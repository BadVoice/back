import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  async create(@Body() dto: CreateCompanyDto) {
    return await this.companyService.create(dto);
  }

  @Get()
  async findAll() {
    return await this.companyService.findAll();
  }

  @Get(':id/channels/:channelId')
  async findChannel(
    @Param('id') id: string,
    @Param('channelId') channelId: string,
  ) {
    return await this.companyService.findChannel(+id, +channelId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.companyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.update(+id, updateCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyService.remove(+id);
  }
}
