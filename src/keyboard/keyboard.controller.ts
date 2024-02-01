import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { KeyboardService } from './keyboard.service';
import { CreateKeyboardDto } from './dto/create-keyboard.dto';
import { UpdateKeyboardDto } from './dto/update-keyboard.dto';

@Controller('keyboards')
export class KeyboardController {
  constructor(private readonly keyboardService: KeyboardService) {}

  @Post()
  create(@Body() createKeyboardDto: CreateKeyboardDto) {
    return this.keyboardService.create(createKeyboardDto);
  }

  @Get()
  findAll() {
    return this.keyboardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.keyboardService.findOne(+id);
  }
}
