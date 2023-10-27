import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dtos/create-user.dto';
import { EditUserDTO } from './dtos/edit-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() body: CreateUserDTO) {
    const content = await this.userService.create(body);

    return { result: content };
  }

  @Get('/:id')
  async getOne(@Param('id') id: string) {
    const content = await this.userService.getOne(id);
    return { result: content };
  }

  @Get()
  async getMany() {
    const content = await this.userService.getMany();
    return { result: content };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const content = await this.userService.delete(id);

    return { result: content };
  }

  @Patch(':id')
  async edit(@Param('id') id: string, @Body() body: EditUserDTO) {
    const content = await this.userService.edit(id, body);

    return { result: content };
  }
}
