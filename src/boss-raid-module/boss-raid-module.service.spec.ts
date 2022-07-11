import { Test, TestingModule } from '@nestjs/testing';
import { BossRaidModuleService } from './boss-raid-module.service';

describe('BossRaidModuleService', () => {
  let service: BossRaidModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BossRaidModuleService],
    }).compile();

    service = module.get<BossRaidModuleService>(BossRaidModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
