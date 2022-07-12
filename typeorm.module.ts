import { Module } from '@nestjs/common';
import { ormConfig } from 'typeorm.providers';

@Module({
  providers: [...ormConfig],
  exports: [...ormConfig],
})
export class TypeormModule {}
