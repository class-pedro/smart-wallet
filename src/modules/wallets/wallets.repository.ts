import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class WalletsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string) {
    await this.prisma.wallet.create({
      data: {
        userId,
      },
    });
  }

  async getById(walletId: string) {
    return await this.prisma.wallet.findUnique({
      where: {
        id: walletId,
      },
    });
  }
}
