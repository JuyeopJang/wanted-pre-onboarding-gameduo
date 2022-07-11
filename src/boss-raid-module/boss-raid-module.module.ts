import { Module } from '@nestjs/common';
import { TypeormModule } from 'typeorm.module';
import { BossRaidModuleController } from './boss-raid-module.controller';
import { BossRaidModuleService } from './boss-raid-module.service';
import { bossRaidProviders } from './boss-raid.providers';

@Module({
  imports: [TypeormModule],
  controllers: [BossRaidModuleController],
  providers: [...bossRaidProviders, BossRaidModuleService],
})
export class BossRaidModuleModule {}
