import { APP_DATABASE, USER_REPOSITORY } from '../constants';
import { User } from '../entity/user.entity';
import { DataSource } from 'typeorm';

export const userProviders = [
  {
    provide: USER_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [APP_DATABASE],
  },
];
