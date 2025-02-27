import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  InternalServerErrorException,
  Param,
  Post,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const response = await this.userService.create(createUserDto);

      return { userId: response };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Get('getById/:id')
  @HttpCode(HttpStatus.CREATED)
  async getById(@Param('id') id: string) {
    try {
      const response = await this.userService.getById(id);

      return response;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
