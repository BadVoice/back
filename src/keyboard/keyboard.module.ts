import { Module } from '@nestjs/common';
import { KeyboardService } from './keyboard.service';
import { KeyboardController } from './keyboard.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [KeyboardController],
  providers: [KeyboardService],
  imports: [DatabaseModule],
})
export class KeyboardModule {}
