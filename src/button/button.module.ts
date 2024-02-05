import { Module } from '@nestjs/common';
import { ButtonService } from './button.service';
import { ButtonController } from './button.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [ButtonController],
  providers: [ButtonService],
  imports: [DatabaseModule],
})
export class ButtonModule {}
