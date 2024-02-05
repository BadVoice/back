import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ButtonService } from './button.service';
import { CreateButtonDto } from './dto/create-button.dto';
import { UpdateButtonDto } from './dto/update-button.dto';

@Controller('buttons')
export class ButtonController {
  constructor(private readonly buttonService: ButtonService) {}

  @Post()
  create(@Body() createButtonDto: CreateButtonDto) {
    return this.buttonService.create(createButtonDto);
  }

  @Get()
  findAll() {
    return this.buttonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buttonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateButtonDto: UpdateButtonDto) {
    return this.buttonService.update(+id, updateButtonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buttonService.remove(+id);
  }
}
