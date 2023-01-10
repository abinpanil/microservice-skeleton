import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'Entities/dto/user/create-user.dto';

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    return createUserDto;
  }
}
