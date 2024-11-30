import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RowsModule } from './rows/rows.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { EmailModule } from './email/email.module';
import { WebhookGateway } from './websoket/websoket.gateway';
import { LoggerModule } from './logger/logger.interceptor';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://postgres:wp9GfjL6A3KSH8EK@jaggedly-tangible-sandgrouse.data-1.use1.tembo.io:5432/postgres?sslmode=verify-full&sslrootcert=ca.crt',
      autoLoadEntities: true,
      synchronize: true,
    }),
    RowsModule,
    AnalyticsModule,
    EmailModule,
    LoggerModule,
  ],
  providers: [WebhookGateway],
})
export class AppModule {}
