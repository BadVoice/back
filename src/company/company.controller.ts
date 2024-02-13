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
  async createCompany(@Body() dto: CreateCompanyDto) {
    return await this.companyService.createCompany(dto);
  }

  @Get()
  async findAll() {
    return await this.companyService.findAll();
  }

  @Get(':id/channels/:channelId')
  async findChannelById(
    @Param('id') id: string,
    @Param('channelId') channelId: string,
  ) {
    return await this.companyService.findChannelById(+id, +channelId);
  }

  @Get(':id')
  async findCompanyById(@Param('id') id: string) {
    return await this.companyService.findCompanyById(+id);
  }

  @Patch(':id')
  updateCompanyById(
    @Param('id') id: string,
    @Body() updateCompanyDto: UpdateCompanyDto,
  ) {
    return this.companyService.updateCompanyById(+id, updateCompanyDto);
  }

  @Delete(':id')
  removeCompanyById(@Param('id') id: string) {
    return this.companyService.removeCompanyById(+id);
  }
}
