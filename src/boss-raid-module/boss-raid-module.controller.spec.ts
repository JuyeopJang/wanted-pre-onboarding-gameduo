import { Test, TestingModule } from '@nestjs/testing';
import { BossRaidModuleController } from './boss-raid-module.controller';

describe('BossRaidModuleController', () => {
  let controller: BossRaidModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BossRaidModuleController],
    }).compile();

    controller = module.get<BossRaidModuleController>(BossRaidModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
