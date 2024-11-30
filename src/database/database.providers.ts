import { DataSource } from 'typeorm';
import { Row } from '../rows/row.entity';
import { Analytics } from '../analytics/analytics.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        entities: [Row, Analytics],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];
