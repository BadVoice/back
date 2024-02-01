import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [MessageController],
  providers: [MessageService],
  imports: [DatabaseModule],
})
export class MessageModule {}
