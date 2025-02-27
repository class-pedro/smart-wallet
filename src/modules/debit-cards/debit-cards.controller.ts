import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { DebitCardsService } from './debit-cards.service';
import { AuthGuard } from '../auth/auth.guard';
import { CreateCardDto } from '../cards/dto/create-card.dto';

@Controller('debit-cards')
export class DebitCardsController {
  constructor(private readonly debitCardsService: DebitCardsService) {}

  @UseGuards(AuthGuard)
  @Post('create')
  async create(@Body() createDebitCardDto: CreateCardDto, @Request() req: any) {
    const { sub: requesterId } = req.userId;

    return await this.debitCardsService.create(createDebitCardDto, requesterId);
  }
}
