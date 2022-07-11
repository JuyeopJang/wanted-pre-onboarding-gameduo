import { APP_DATABASE, RAID_REPOSITORY } from 'src/constants';
import { RaidRecord } from 'src/entity/raid-record.entity';
import { DataSource } from 'typeorm';

export const bossRaidProviders = [
  {
    provide: RAID_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(RaidRecord),
    inject: [APP_DATABASE],
  },
];
