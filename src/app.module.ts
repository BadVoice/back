import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CompanyModule } from './company/company.module';
import { СhannelModule } from './сhannel/сhannel.module';

@Module({
  imports: [DatabaseModule, CompanyModule, СhannelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
