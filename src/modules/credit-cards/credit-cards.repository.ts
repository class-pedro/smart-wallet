import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateCreditCardDto } from './dto/create-credit-card.dto';

@Injectable()
export class CreditCardsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCreditCardDto: CreateCreditCardDto) {
    return await this.prisma.creditCard.create({ data: createCreditCardDto });
  }
}
