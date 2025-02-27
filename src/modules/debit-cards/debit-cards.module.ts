import { Module } from '@nestjs/common';
import { DebitCardsService } from './debit-cards.service';
import { DebitCardsController } from './debit-cards.controller';
import { PrismaModule } from 'src/shared/prisma/prisma.module';
import { WalletsModule } from '../wallets/wallets.module';
import { DebitCardsRepository } from './debit-cards.repository';
import { AuthModule } from '../auth/auth.module';
import { CardsModule } from '../cards/cards.module';

@Module({
  imports: [PrismaModule, WalletsModule, AuthModule, CardsModule],
  controllers: [DebitCardsController],
  providers: [DebitCardsRepository, DebitCardsService],
})
export class DebitCardsModule {}
