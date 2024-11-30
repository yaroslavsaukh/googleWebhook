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
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'google-webhook',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // У продакшні краще встановити false
    }),
    RowsModule,
    AnalyticsModule,
    EmailModule,
  ],
  providers: [WebhookGateway],
})
export class AppModule {}
