import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

enum ChannelType {
  Telegram = 'Telegram',
  Vkontakte = 'Vkontakte',
  WhatsApp = 'WhatsApp',
  SMS = 'SMS',
}

export class CreateСhannelDto {
  @IsNumber()
  @IsNotEmpty()
  company_id: number;

  @IsString()
  @IsNotEmpty()
  channel_name: string;

  @IsEnum(ChannelType)
  @IsNotEmpty()
  app_name: ChannelType;
}
