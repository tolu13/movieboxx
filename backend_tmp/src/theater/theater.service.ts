import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateTheaterDto } from './dto/create-theater.dto';
import { UpdateTheaterDto } from './dto/update-theater.dto';
import { PrismaService } from '../prisma/prisma.service';
import { locationType, TheaterStatus } from './types/type';
import { NotFoundException } from '@nestjs/common';
@Injectable()
export class TheaterService {
  constructor(private prisma: PrismaService) {}
  async create(createTheaterDto: CreateTheaterDto) {
    try {
      const theater = await this.prisma.theater.create({
        data: {
          name: createTheaterDto.name,
          location: createTheaterDto.location as locationType,
          status: TheaterStatus.OPEN || createTheaterDto.status,
        },
      });
      return theater;
    } catch (error) {
      if (error instanceof Error)
        throw new Error(`Failed to create theater: ${error.message}`);
    }
  }

  findAll() {
    return this.prisma.theater.findMany();
  }

  async findOne(id: string) {
    if (!id) {
      throw new Error('No id found');
    }

    const theater = await this.prisma.theater.findUnique({
      where: { id },
      include: {
        seats: true,
        showtimes: true,
      },
    });
    if (!theater) {
      throw new NotFoundException(`Theater with id ${id} not found`);
    }
    return theater;
  }

  async update(id: string, updateTheaterDto: UpdateTheaterDto) {
    if (!id) {
      throw new Error('No id found');
    }
    const updatedT = await this.prisma.theater.update({
      where: { id },
      data: { ...UpdateTheaterDto },
      include: {
        seats: true,
        showtimes: true,
      },
    });
    if (!updatedT) {
      throw new InternalServerErrorException(`Theater not updated`);
    }
    return updatedT;
  }

  async remove(id: string) {
    const existing = await this.prisma.theater.findUnique({ where: { id } });

    if (!existing) {
      throw new NotFoundException(`Theater with ID ${id} not found`);
    }

    await this.prisma.theater.delete({
      where: { id },
    });

    return { success: true, message: `Theater with ID ${id} deleted.` };
  }
}
