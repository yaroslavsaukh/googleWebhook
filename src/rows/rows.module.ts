import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RowsController } from './rows.controller';
import { RowsService } from './rows.service';
import { Row } from './row.entity';
import { EmailModule } from '../email/email.module'; // Імпортуємо EmailModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Row]), // Додаємо TypeOrm для роботи з Row
    EmailModule, // Додаємо EmailModule до імпортів
  ],
  controllers: [RowsController],
  providers: [RowsService],
})
export class RowsModule {}
