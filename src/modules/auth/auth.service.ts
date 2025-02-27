import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const { email, password: loginPassword } = loginDto;
    const user = await this.usersService.getByEmail(email);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const { id: userId, password: userPassword } = user;
    const passwordMatch = await bcrypt.compare(loginPassword, userPassword);
    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const jwtPayload = { sub: userId };

    return {
      access_token: await this.jwtService.signAsync(jwtPayload),
    };
  }
}
