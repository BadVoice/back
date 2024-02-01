import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [CompanyController],
  providers: [CompanyService],
  imports: [DatabaseModule],
})
export class CompanyModule {}
