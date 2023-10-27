import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString({ message: 'username must be a string.' })
  @IsNotEmpty()
  username: string;

  @IsString({ message: 'password must be a string.' })
  @IsNotEmpty()
  password: string;

  @IsString({ message: 'fullName must be a string' })
  @IsOptional()
  fullName: string | null;
}
