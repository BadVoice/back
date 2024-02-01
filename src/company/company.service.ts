import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CompanyService {
  constructor(private readonly prisma: DatabaseService) {}

  async create(dto: CreateCompanyDto) {
    //prittier-ignore
    return await this.prisma.company
      .create({
        data: dto,
        include: {
          channels: true,
        },
      })
      .catch((error) => {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          if (error.code === 'P2002') {
            throw new BadRequestException(
              'Company with this app_name already exists',
            );
          }
        }
        return error;
      });
  }

  async findAll() {
    return await this.prisma.company.findMany({
      include: {
        channels: true,
      },
    });
  }

  async findOne(id: number) {
    const company = await this.prisma.company.findUnique({ where: { id } });
    if (!company) {
      throw new NotFoundException('Company not found');
    }
    return company;
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    //prittier-ignore
    return await this.prisma.company
      .update({
        data: {
          ...updateCompanyDto,
        },
        where: {
          id,
        },
      })
      .then((r) => {
        if (!r) throw new NotFoundException('Message not found');
        return r;
      });
  }

  async remove(id: number) {
    return await this.prisma.company.delete({ where: { id } }).then((r) => {
      if (!r) throw new NotFoundException('Message not found');
      return r;
    });
  }
}
