import { Injectable, UnauthorizedException } from '@nestjs/common';
import { WalletsService } from '../wallets/wallets.service';

@Injectable()
export class CardsService {
  constructor(private readonly walletsService: WalletsService) {}

  async canCreateCard(requesterId: string, walletId: string) {
    const { userId: walletOwnerId } =
      await this.walletsService.getById(walletId);

    if (requesterId !== walletOwnerId) {
      throw new UnauthorizedException(
        'You cannot create a card in a wallet that is not yours',
      );
    }
  }
}
