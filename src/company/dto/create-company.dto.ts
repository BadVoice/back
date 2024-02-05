import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;
}
