import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Row } from './row.entity';
import { CreateRowDto } from './row.dto';
import { EmailService } from '../email/email.service';
import { google } from 'googleapis';

@Injectable()
export class RowsService {
  constructor(
    @InjectRepository(Row)
    private readonly rowRepository: Repository<Row>,
    private readonly emailService: EmailService,
  ) {}

  async createRow(createRowDto: CreateRowDto): Promise<Row> {
    const row = this.rowRepository.create(createRowDto);
    const savedRow = await this.rowRepository.save(row);
    const rowCount = await this.rowRepository.count();

    if (rowCount % 10 === 0) {
      const recipients = await this.getSheetUsers();
      await this.sendEmailNotification(rowCount, recipients);
    }

    return savedRow;
  }

  private async sendEmailNotification(
    rowCount: number,
    recipients: string[],
  ): Promise<void> {
    const subject = `У Google Sheets збережено ${rowCount} рядків`;
    const message = `Google Sheets оновлено: додано новий рядок. Загальна кількість рядків: ${rowCount}.`;

    await this.emailService.sendEmail(recipients, subject, message);
  }

  async getAllRows(): Promise<Row[]> {
    return this.rowRepository.find();
  }

  async getRowById(id: number): Promise<Row> {
    return this.rowRepository.findOne({ where: { id } });
  }

  private async getSheetUsers(): Promise<string[]> {
    const auth = new google.auth.GoogleAuth({
      keyFile: 'src/sheets-api-443315-fced3fec0b8c.json',
      scopes: ['https://www.googleapis.com/auth/drive'],
    });

    const drive = google.drive({ version: 'v3', auth });

    const fileId = process.env.GOOGLE_SHEETS_ID;
    const permissions = await drive.permissions.list({
      fileId,
      fields: 'permissions(emailAddress)',
    });

    const emailAddresses = permissions.data.permissions
      ?.map((permission) => permission.emailAddress)
      .filter((email) => email) as string[];

    return emailAddresses || [];
  }
}
