import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common';
import { RowsService } from './rows.service';

@Controller('rows')
export class RowsController {
  constructor(private readonly rowsService: RowsService) {}

  @Get()
  async getAllRows() {
    return this.rowsService.findAll();
  }

  @Get(':id')
  async getRow(@Param('id') id: string) {
    return this.rowsService.findOne(+id);
  }

  @Post()
  async saveRow(@Body('content') content: string) {
    return this.rowsService.saveRow(content);
  }
}
