import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

enum ButtonType {
  LINK = 'LINK',
  TEXT = 'TEXT',
}

export class CreateButtonDto {
  @IsString()
  @IsNotEmpty()
  content: string;
  @IsEnum(ButtonType)
  @IsString()
  @IsNotEmpty()
  type: ButtonType;

  @IsNumber()
  @IsNotEmpty()
  keyboard_id: number;
}
