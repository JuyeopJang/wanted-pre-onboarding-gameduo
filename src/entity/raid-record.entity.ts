import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class RaidRecord {
  @PrimaryGeneratedColumn()
  raidRecordId: number;

  @ManyToOne(() => User, (user) => user.userId) // user와 record 1:N
  user: User;

  @Column()
  enterPossible: boolean;

  @Column()
  score: number;

  @Column()
  startTime: Date;

  @Column({ nullable: true })
  endTime: Date;
}
