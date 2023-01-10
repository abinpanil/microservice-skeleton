import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from 'Entities/dto/user/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@Inject('USER_SERVICE') private client: ClientProxy) {}

  async create(createUserDto: CreateUserDto): Promise<any> {
    return this.client.send('createUser', createUserDto);
  }
}
