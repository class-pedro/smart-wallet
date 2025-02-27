import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const { id: userId } = await this.prisma.user.create({
      data: createUserDto,
    });

    return userId;
  }

  async getByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async getById(userId: string) {
    return await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        wallet: {
          include: {
            debitCards: true,
            creditCards: true,
          },
        },
      },
    });
  }
}
