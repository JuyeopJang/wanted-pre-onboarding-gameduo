import { timestamp } from 'rxjs';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RaidRecord } from './raid-record.entity';

/**
 * made by 김태용, 필요시 변경 가능
 */
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number; // userId

  @Column({ length: 500 })
  email: string;

  @Column()
  password: string;

  @Column()
  nickname: string;

  @CreateDateColumn({ type: 'timestamp', default: 'NOW()' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updateed_at: Date;

  @OneToMany(() => RaidRecord, (record) => record.user) // user와 record 1:N
  records: RaidRecord[];
}
