import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';
import { EditUserDTO } from './dtos/edit-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDTO: CreateUserDTO) {
    const { username, password, fullName } = createUserDTO;
    const user = new User(username, password, fullName);

    return this.userRepository.save(user);
  }

  async getOne(id: string) {
    const user = await this.userRepository.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async getMany() {
    return this.userRepository.find();
  }

  async delete(id: string) {
    const user = await this.userRepository.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }
    return this.userRepository.remove(user);
  }

  async edit(id: string, editUserDTO: EditUserDTO) {
    const user = await this.userRepository.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    user.edit(editUserDTO);

    return this.userRepository.save(user);
  }
}
