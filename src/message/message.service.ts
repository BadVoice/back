import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class MessageService {
  constructor(private readonly prisma: DatabaseService) {}
  async create(dto: CreateMessageDto) {
    const { text, channel_id, keyboards } = dto;

    const messageData = {
      text,
      channel: {
        connect: { id: channel_id },
      },
    };

    if (keyboards && keyboards.length > 0) {
      messageData['keyboards'] = {
        createMany: {
          data: keyboards.map((keyboard) => {
            return {
              type: keyboard.type,
              buttons: {
                createMany: {
                  data: keyboard.buttons.map((button) => {
                    return {
                      content: button.content,
                      type: button.type,
                    };
                  }),
                },
              },
            };
          }),
        },
      };
    }

    const message = await this.prisma.message.create({
      data: messageData,
      include: {
        keyboard: {
          include: {
            buttons: true,
          },
        },
      },
    });

    return message;
  }

  findAll() {
    return this.prisma.message.findMany({
      include: {
        keyboard: {
          include: {
            buttons: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    const message = await this.prisma.message.findUnique({
      where: { id },
      include: {
        keyboard: {
          include: {
            buttons: true,
          },
        },
      },
    });

    if (!message) {
      throw new NotFoundException('Message not found');
    }
    return message;
  }

  async update(id: number, dto: UpdateMessageDto) {
    const message = await this.prisma.message
      .update({
        where: { id },
        data: dto,
      })
      .then((r) => {
        if (!r) throw new NotFoundException('Message not found');
        return r;
      });

    return message;
  }

  async remove(id: number) {
    return await this.prisma.message.delete({ where: { id } }).then((r) => {
      if (!r) throw new NotFoundException('Message not found');
      return r;
    });
  }
}
