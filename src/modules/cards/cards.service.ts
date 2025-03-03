import { Injectable, UnauthorizedException } from '@nestjs/common';
import { WalletsService } from '../wallets/wallets.service';

@Injectable()
export class CardsService {
  constructor(private readonly walletsService: WalletsService) {}

  async canManipulateCard(requesterId: string, walletId: string) {
    const { userId: walletOwnerId } =
      await this.walletsService.getById(walletId);

    if (requesterId !== walletOwnerId) {
      throw new UnauthorizedException(
        'You cannot modify a resource in a wallet that is not yours',
      );
    }
  }
}
