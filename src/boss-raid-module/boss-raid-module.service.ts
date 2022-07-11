import { Inject, Injectable } from '@nestjs/common';
import { RAID_REPOSITORY } from 'src/constants';
import { RaidRecord } from 'src/entity/raid-record.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BossRaidModuleService {
  constructor(
    @Inject(RAID_REPOSITORY)
    private raidRepository: Repository<RaidRecord>,
  ) {}

  /**
   * Example Function
   */
  //   async findAll(): Promise<User[]> {
  //     return this.raidRepository.find();
  //   }
}
