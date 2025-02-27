import { Injectable } from '@nestjs/common';
import { CreateAmountDto } from './dto/create-amount.dto';
import { UpdateAmountDto } from './dto/update-amount.dto';

@Injectable()
export class AmountsService {
  create(createAmountDto: CreateAmountDto) {
    return 'This action adds a new amount';
  }

  findAll() {
    return `This action returns all amounts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} amount`;
  }

  update(id: number, updateAmountDto: UpdateAmountDto) {
    return `This action updates a #${id} amount`;
  }

  remove(id: number) {
    return `This action removes a #${id} amount`;
  }
}
