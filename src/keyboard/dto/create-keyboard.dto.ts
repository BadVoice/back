import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

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
}
