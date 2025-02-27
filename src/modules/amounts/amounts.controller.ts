import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AmountsService } from './amounts.service';
import { CreateAmountDto } from './dto/create-amount.dto';
import { UpdateAmountDto } from './dto/update-amount.dto';

@Controller('amounts')
export class AmountsController {
  constructor(private readonly amountsService: AmountsService) {}

  @Post()
  create(@Body() createAmountDto: CreateAmountDto) {
    return this.amountsService.create(createAmountDto);
  }

  @Get()
  findAll() {
    return this.amountsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.amountsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAmountDto: UpdateAmountDto) {
    return this.amountsService.update(+id, updateAmountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.amountsService.remove(+id);
  }
}
