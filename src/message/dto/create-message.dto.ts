import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsOptional()
  text?: string;

  @IsNumber()
  @IsNotEmpty()
  channel_id: number;
}
