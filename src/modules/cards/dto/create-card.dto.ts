import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class CreateCardDto {
  @IsUUID()
  @IsNotEmpty()
  walletId: string;

  @Length(2, 25)
  @IsString()
  @IsNotEmpty()
  cardName: string;
}