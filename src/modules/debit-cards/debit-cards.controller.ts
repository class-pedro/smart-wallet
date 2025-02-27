import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  Delete,
  Param,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { DebitCardsService } from './debit-cards.service';
import { AuthGuard } from '../auth/auth.guard';
import { CreateCardDto } from '../cards/dto/create-card.dto';

@UseGuards(AuthGuard)
@Controller('debit-cards')
export class DebitCardsController {
  constructor(private readonly debitCardsService: DebitCardsService) {}

  @Post('create')
  async create(@Body() createDebitCardDto: CreateCardDto, @Request() req: any) {
    const { sub: requesterId } = req.userId;

    return await this.debitCardsService.create(createDebitCardDto, requesterId);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('delete/:id')
  async delete(@Param('id') cardId: string, @Request() req: any) {
    const { sub: requesterId } = req.userId;

    await this.debitCardsService.delete(cardId, requesterId);
  }
}
