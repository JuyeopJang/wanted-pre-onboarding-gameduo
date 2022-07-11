import { APP_DATABASE, RAID_REPOSITORY } from '../constants';
import { RaidRecord } from '../entity/raid-record.entity';
import { DataSource } from 'typeorm';

export const bossRaidProviders = [
  {
    provide: RAID_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(RaidRecord),
    inject: [APP_DATABASE],
  },
];
