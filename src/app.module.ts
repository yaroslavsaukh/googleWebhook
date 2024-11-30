import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RowsModule } from './rows/rows.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { EmailModule } from './email/email.module';
import { WebhookGateway } from './websoket/websoket.gateway';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
    }),
    RowsModule,
    AnalyticsModule,
    EmailModule,
  ],
  providers: [WebhookGateway],
})
export class AppModule {}
