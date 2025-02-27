import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { CreditCardsService } from './credit-cards.service';
import { CreateCreditCardDto } from './dto/create-credit-card.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('credit-cards')
export class CreditCardsController {
  constructor(private readonly creditCardsService: CreditCardsService) {}

  @UseGuards(AuthGuard)
  @Post('create')
  create(
    @Body() createCreditCardDto: CreateCreditCardDto,
    @Request() req: any,
  ) {
    const { sub: requesterId } = req.userId;

    return this.creditCardsService.create(createCreditCardDto, requesterId);
  }
}
