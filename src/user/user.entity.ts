import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { EditUserDTO } from './dtos/edit-user.dto';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  username: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'text' })
  fullName: string | null;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  constructor(
    username: string,
    password: string,
    fullName: string | null,
    createdAt?: Date | null,
    id?: string,
  ) {
    this.id = id ?? uuid();
    this.username = username;
    this.password = password;
    this.fullName = fullName;
    this.createdAt = createdAt ?? new Date();
  }

  edit(editUserDTO: EditUserDTO) {
    this.username = editUserDTO.username ?? this.username;
    this.password = editUserDTO.password ?? this.password;
    this.fullName = editUserDTO.fullName ?? this.fullName;
  }
}
