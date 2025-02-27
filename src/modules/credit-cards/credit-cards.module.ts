import { Module } from '@nestjs/common';
import { CreditCardsService } from './credit-cards.service';
import { CreditCardsController } from './credit-cards.controller';
import { CreditCardsRepository } from './credit-cards.repository';
import { PrismaModule } from 'src/shared/prisma/prisma.module';
import { WalletsModule } from '../wallets/wallets.module';
import { AuthModule } from '../auth/auth.module';
import { CardsModule } from '../cards/cards.module';

@Module({
  imports: [PrismaModule, WalletsModule, AuthModule, CardsModule],
  controllers: [CreditCardsController],
  providers: [CreditCardsRepository, CreditCardsService],
})
export class CreditCardsModule {}
