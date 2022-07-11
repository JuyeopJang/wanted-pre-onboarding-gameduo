import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class RaidRecord {
  @PrimaryGeneratedColumn()
  raidRecordId: number;

  @ManyToOne(() => User, (user) => user.userId) // user와 record 1:N
  user: User;

  @Column()
  can_enter: boolean;

  @Column()
  score: number;

  @Column()
  start_time: Date;

  @Column({ nullable: true })
  end_time: Date;
}
