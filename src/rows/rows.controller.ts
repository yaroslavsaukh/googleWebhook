import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RowsService } from './rows.service';
import { CreateRowDto } from './row.dto';

@ApiTags('Rows')
@Controller('rows')
export class RowsController {
  constructor(private readonly rowsService: RowsService) {}

  @Post()
  @ApiOperation({ summary: 'Створити новий рядок' })
  @ApiResponse({ status: 201, description: 'Рядок успішно створено.' })
  @ApiResponse({ status: 400, description: 'Некоректні дані.' })
  async createRow(@Body() createRowDto: CreateRowDto) {
    return this.rowsService.createRow(createRowDto);
  }

  @Get()
  @ApiOperation({ summary: 'Отримати всі рядки' })
  async getAllRows() {
    return this.rowsService.getAllRows();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Отримати один рядок за ID' })
  async getRowById(@Param('id') id: number) {
    return this.rowsService.getRowById(id);
  }
}
