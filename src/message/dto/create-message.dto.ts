import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateKeyboardDto } from 'src/keyboard/dto/create-keyboard.dto';

export class CreateMessageDto {
  @IsString()
  @IsOptional()
  text?: string;

  @IsNumber()
  @IsNotEmpty()
  channel_id: number;

  @ValidateNested({ each: true })
  @Type(() => CreateKeyboardDto)
  @IsOptional()
  keyboards?: CreateKeyboardDto[];
}
