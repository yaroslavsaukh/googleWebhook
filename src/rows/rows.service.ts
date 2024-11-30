import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Row } from './row.entity';
import { CreateRowDto } from './row.dto';

@Injectable()
export class RowsService {
  constructor(
    @InjectRepository(Row)
    private readonly rowRepository: Repository<Row>,
  ) {}

  async createRow(createRowDto: CreateRowDto): Promise<Row> {
    const row = this.rowRepository.create(createRowDto);
    return this.rowRepository.save(row);
  }

  async getAllRows(): Promise<Row[]> {
    return this.rowRepository.find();
  }

  async getRowById(id: number): Promise<Row> {
    return this.rowRepository.findOne({ where: { id } });
  }
}
