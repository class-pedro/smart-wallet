import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';
import { CreateCardDto } from 'src/modules/cards/dto/create-card.dto';

export class CreateCreditCardDto extends CreateCardDto {
  @IsNumber()
  @IsNotEmpty()
  limit: number;

  @IsNumber()
  @IsNotEmpty()
  dueDateDay: number;

  @IsNumber()
  @IsNotEmpty()
  closingDateDay: number;
}
