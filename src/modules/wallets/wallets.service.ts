import { Injectable } from '@nestjs/common';
import { WalletsRepository } from './wallets.repository';

@Injectable()
export class WalletsService {
  constructor(private readonly walletsRepository: WalletsRepository) {}

  async create(userId: string) {
    return await this.walletsRepository.create(userId);
  }

  async getById(walletId: string) {
    return await this.walletsRepository.getById(walletId);
  }
}
