import { Module } from '@nestjs/common';
import { СhannelService } from './сhannel.service';
import { СhannelController } from './сhannel.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [СhannelController],
  providers: [СhannelService],
  imports: [DatabaseModule],
})
export class СhannelModule {}
