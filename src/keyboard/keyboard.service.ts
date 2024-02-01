import { Injectable } from '@nestjs/common';
import { CreateKeyboardDto } from './dto/create-keyboard.dto';
import { UpdateKeyboardDto } from './dto/update-keyboard.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class KeyboardService {
  constructor(private readonly prisma: DatabaseService) {}
  async create(dto: CreateKeyboardDto) {
    return await this.prisma.keyboard.create({
      data: {
        type: dto.type,
        message: {
          connect: { id: dto.message_id },
        },
      },
      include: {
        buttons: true,
      },
    });
  }

  findAll() {
    return this.prisma.keyboard.findMany({
      include: {
        buttons: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.keyboard.findUnique({
      where: { id },
      include: {
        buttons: true,
      },
    });
  }
}
