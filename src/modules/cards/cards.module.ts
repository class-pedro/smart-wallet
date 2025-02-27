import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { WalletsModule } from '../wallets/wallets.module';

@Module({
  imports: [WalletsModule],
  providers: [CardsService],
  exports: [CardsService],
})
export class CardsModule {}
