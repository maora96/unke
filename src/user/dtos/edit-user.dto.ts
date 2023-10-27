import { IsOptional, IsString } from 'class-validator';

export class EditUserDTO {
  @IsString({ message: 'username must be a string.' })
  @IsOptional()
  username: string;

  @IsString({ message: 'password must be a string.' })
  @IsOptional()
  password: string;

  @IsString({ message: 'fullName must be a string' })
  @IsOptional()
  fullName: string;
}
