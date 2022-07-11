import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BossRaidModuleModule } from './boss-raid-module/boss-raid-module.module';

@Module({
  imports: [UserModule, ConfigModule.forRoot(), BossRaidModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
