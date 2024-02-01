import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateСhannelDto } from './dto/create-сhannel.dto';
import { UpdateСhannelDto } from './dto/update-сhannel.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class СhannelService {
  constructor(private readonly prisma: DatabaseService) {}
  async create(dto: CreateСhannelDto) {
    return await this.prisma.channel.create({
      data: {
        channel_name: dto.channel_name,
        app_name: dto.app_name,
        company: {
          connect: { id: dto.company_id },
        },
      },
      include: {
        messages: true,
      },
    });
  }

  async findAll() {
    return await this.prisma.channel.findMany({
      include: {
        messages: {
          include: {
            keyboard: {
              include: {
                buttons: true,
              },
            },
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.channel
      .findUnique({
        where: { id },
        include: {
          messages: {
            include: {
              keyboard: true,
            },
          },
        },
      })
      .then((r) => {
        if (!r) throw new NotFoundException('Channel not found');
        return r;
      });
  }

  async update(id: number, dto: UpdateСhannelDto) {
    return await this.prisma.channel
      .update({ where: { id }, data: dto })
      .then((r) => {
        if (!r) throw new NotFoundException('Channel not found');
        return r;
      });
  }

  async remove(id: number) {
    return await this.prisma.channel.delete({ where: { id } }).then((r) => {
      if (!r) throw new NotFoundException('Channel not found');
      return r;
    });
  }
}
