import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateCreditCardDto } from './dto/create-credit-card.dto';
import { WalletsService } from '../wallets/wallets.service';
import { CreditCardsRepository } from './credit-cards.repository';
import { CardsService } from '../cards/cards.service';

@Injectable()
export class CreditCardsService extends CardsService {
  constructor(
    private readonly creditCardsRepository: CreditCardsRepository,
    walletsService: WalletsService,
  ) {
    super(walletsService);
  }
  async create(createCreditCardDto: CreateCreditCardDto, requesterId: string) {
    const { walletId } = createCreditCardDto;

    await this.canCreateCard(requesterId, walletId);

    return await this.creditCardsRepository.create(createCreditCardDto);
  }
}
