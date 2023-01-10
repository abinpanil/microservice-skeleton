import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsNumberString,
  MinLength,
  MaxLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsEmail()
  readonly email: string;

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsOptional()
  @IsNumberString()
  @MinLength(5)
  @MaxLength(12)
  readonly phoneNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly password: string;
}
