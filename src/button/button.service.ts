import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateButtonDto } from './dto/create-button.dto';
import { UpdateButtonDto } from './dto/update-button.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ButtonService {
  constructor(private readonly prisma: DatabaseService) {}
  async create(dto: CreateButtonDto) {
    return await this.prisma.button.create({
      data: {
        content: dto.content,
        type: dto.type,
        keyboard: {
          connect: { id: dto.keyboard_id },
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.button.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.button.findUnique({ where: { id } });
  }

  async update(id: number, dto: UpdateButtonDto) {
    return await this.prisma.button.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    return await this.prisma.button.delete({ where: { id } }).then((r) => {
      if (!r) throw new NotFoundException('Button id not found');
      return r;
    });
  }
}
