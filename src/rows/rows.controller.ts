import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common';
import { RowsService } from './rows.service';
import { Row } from './row.entity';

@Controller('rows')
export class RowsController {
  constructor(private readonly rowsService: RowsService) {}

  @Get()
  async getAllRows() {
    return this.rowsService.getAllRows();
  }

  @Get(':id')
  async getRow(@Param('id') id: string) {
    return this.rowsService.getRowById(+id);
  }

  @Post()
  async saveRow(@Body('content') content: string) {
    const data: Partial<Row> = { content };
    return this.rowsService.addRow(data);
  }
}
