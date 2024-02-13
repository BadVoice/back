import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { СhannelService } from './сhannel.service';
import { CreateСhannelDto } from './dto/create-сhannel.dto';
import { UpdateСhannelDto } from './dto/update-сhannel.dto';

@Controller('channels')
export class СhannelController {
  constructor(private readonly сhannelService: СhannelService) {}

  @Post()
  create(@Body() dto: CreateСhannelDto) {
    return this.сhannelService.create(dto);
  }

  @Get()
  async findAllByCompanyId(@Query('companyId') companyId: number) {
    return this.сhannelService.findAllByCompanyId(+companyId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.сhannelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateСhannelDto: UpdateСhannelDto) {
    return this.сhannelService.update(+id, updateСhannelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.сhannelService.remove(+id);
  }
}
