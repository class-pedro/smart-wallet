import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcryptjs from 'bcryptjs';
import { WalletsService } from '../wallets/wallets.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly walletService: WalletsService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { password } = createUserDto;

    const hashPassword = await bcryptjs.hash(password, 12);

    const newUserPayload = {
      ...createUserDto,
      password: hashPassword,
    };
    const newUserId = await this.usersRepository.create(newUserPayload);

    if (!newUserId) {
      throw new InternalServerErrorException('Error creating user');
    }

    await this.walletService.create(newUserId);

    return newUserId;
  }

  async getByEmail(email: string) {
    return await this.usersRepository.getByEmail(email);
  }

  async getById(userId: string) {
    const user = await this.usersRepository.getById(userId);
    const { password, ...userData } = user;

    return userData;
  }
}
