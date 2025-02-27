import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { PrismaModule } from './shared/prisma/prisma.module';
import { WalletsModule } from './modules/wallets/wallets.module';
import { CreditCardsModule } from './modules/credit-cards/credit-cards.module';
import { DebitCardsModule } from './modules/debit-cards/debit-cards.module';
import { ExpensesModule } from './modules/expenses/expenses.module';
import { AmountsModule } from './modules/amounts/amounts.module';
import { CardsModule } from './modules/cards/cards.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [PrismaModule, UsersModule, WalletsModule, CreditCardsModule, DebitCardsModule, ExpensesModule, AmountsModule, CardsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
