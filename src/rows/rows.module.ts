import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RowsController } from './rows.controller';
import { RowsService } from './rows.service';
import { Row } from './row.entity';
import { EmailModule } from '../email/email.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Row]),
    EmailModule,
  ],
  controllers: [RowsController],
  providers: [RowsService],
})
export class RowsModule {}
