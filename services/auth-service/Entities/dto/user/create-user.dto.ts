import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsNumberString,
  MinLength,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsOptional()
  @IsNumberString()
  @MinLength(5)
  @MaxLength(12)
  readonly phoneNumber: string;

  @IsNotEmpty()
  readonly password: string;
}
