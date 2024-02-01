import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CompanyModule } from './company/company.module';
import { СhannelModule } from './сhannel/сhannel.module';
import { MessageModule } from './message/message.module';
import { KeyboardModule } from './keyboard/keyboard.module';

@Module({
  imports: [DatabaseModule, CompanyModule, СhannelModule, MessageModule, KeyboardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
