import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateCreditCardDto } from './dto/create-credit-card.dto';

@Injectable()
export class CreditCardsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCreditCardDto: CreateCreditCardDto) {
    return await this.prisma.creditCard.create({ data: createCreditCardDto });
  }

  async delete(cardId: string) {
    await this.prisma.creditCard.delete({
      where: {
        id: cardId,
      },
    });
  }

  async getById(cardId: string) {
    return await this.prisma.creditCard.findFirst({
      where: {
        id: cardId,
      },
    });
  }
}
