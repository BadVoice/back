import { Type } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateButtonDto } from 'src/button/dto/create-button.dto';

enum KeyboardType {
  INLINE = 'INLINE',
  DEFAULT = 'DEFAULT',
}

export class CreateKeyboardDto {
  @IsNotEmpty()
  @IsString()
  @IsEnum(KeyboardType)
  type: KeyboardType;

  @IsNotEmpty()
  @IsNumber()
  message_id: number;

  @ValidateNested({ each: true })
  @Type(() => CreateButtonDto)
  buttons: CreateButtonDto[];
}
