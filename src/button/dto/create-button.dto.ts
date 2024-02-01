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
  @IsNotEmpty()
  @IsNumber()
  keyboard_id: number;
}
