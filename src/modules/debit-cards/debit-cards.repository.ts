import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateCardDto } from '../cards/dto/create-card.dto';

@Injectable()
export class DebitCardsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDebitCardDto: CreateCardDto) {
    return await this.prisma.debitCard.create({ data: createDebitCardDto });
  }
}
