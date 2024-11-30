import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Row } from './row.entity';
import { EmailService } from '../email/email.service';

@Injectable()
export class RowsService {
  constructor(
    @InjectRepository(Row)
    private rowRepository: Repository<Row>,
    private emailService: EmailService,
  ) {}

  // Додати новий рядок до бази даних
  async addRow(data: Partial<Row>): Promise<Row> {
    const newRow = this.rowRepository.create(data);
    await this.rowRepository.save(newRow);

    // Логіка: надсилання email кожні 10 записів
    const rowCount = await this.rowRepository.count();
    if (rowCount % 10 === 0) {
      await this.sendEmailNotification(rowCount);
    }

    return newRow;
  }

  // Логіка для надсилання email
  private async sendEmailNotification(rowCount: number): Promise<void> {
    const subject = `У Google Sheets збережено ${rowCount} рядків`;
    const message = `Google Sheets оновлено: додано новий рядок. Загальна кількість рядків: ${rowCount}.`;
    const recipients = ['user1@example.com', 'user2@example.com']; // Замість цього можна отримати список email із Google API

    await this.emailService.sendEmail(recipients, subject, message);
  }

  // Отримати всі рядки
  async getAllRows(): Promise<Row[]> {
    return this.rowRepository.find();
  }

  // Отримати один рядок по ID
  async getRowById(id: number): Promise<Row> {
    return this.rowRepository.findOneBy({ id });
  }
}
