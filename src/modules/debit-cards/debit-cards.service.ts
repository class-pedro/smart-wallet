import { Injectable } from '@nestjs/common';
import { DebitCardsRepository } from './debit-cards.repository';
import { CreateCardDto } from '../cards/dto/create-card.dto';
import { CardsService } from '../cards/cards.service';
import { WalletsService } from '../wallets/wallets.service';

@Injectable()
export class DebitCardsService extends CardsService {
  constructor(
    private readonly debitCardsRepository: DebitCardsRepository,
    walletsService: WalletsService,
  ) {
    super(walletsService);
  }

  async create(createDebitCardDto: CreateCardDto, requesterId: string) {
    const { walletId } = createDebitCardDto;

    await this.canManipulateCard(requesterId, walletId);

    return await this.debitCardsRepository.create(createDebitCardDto);
  }

  async delete(cardId: string, requesterId: string) {
    const { walletId } = await this.debitCardsRepository.getById(cardId);
    await this.canManipulateCard(requesterId, walletId);

    await this.debitCardsRepository.delete(cardId);
  }
}
