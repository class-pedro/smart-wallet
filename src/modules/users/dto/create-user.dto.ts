import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
} from 'class-validator';
import { IsCpf } from 'src/shared/decorators/is-cpf.decorator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 150)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Matches(/^(\(?\d{2}\)?9?\d{8})$|^(\(?\d{2}\)?\d{8})$/, {
    message: 'Invalid cellphone number',
  })
  cellphone: string;

  @IsNotEmpty()
  @IsCpf()
  document: string;

  @IsString()
  @Length(8, 30)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).*$/, {
    message:
      'The password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 symbol.',
  })
  @IsNotEmpty()
  password: string;
}
