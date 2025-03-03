import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  Delete,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreditCardsService } from './credit-cards.service';
import { CreateCreditCardDto } from './dto/create-credit-card.dto';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('credit-cards')
export class CreditCardsController {
  constructor(private readonly creditCardsService: CreditCardsService) {}

  @Post('create')
  create(
    @Body() createCreditCardDto: CreateCreditCardDto,
    @Request() req: any,
  ) {
    const { sub: requesterId } = req.userId;

    return this.creditCardsService.create(createCreditCardDto, requesterId);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('delete/:id')
  async delete(@Param('id') cardId: string, @Request() req: any) {
    const { sub: requesterId } = req.userId;

    await this.creditCardsService.delete(cardId, requesterId);
  }
}
