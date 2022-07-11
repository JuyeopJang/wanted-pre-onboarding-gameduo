import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/constants';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: Repository<User>,
  ) {}

  /**
   * Example Function
   */
  //   async findAll(): Promise<User[]> {
  //     return this.userRepository.find();
  //   }
}
