import { Injectable } from '@nestjs/common';
import { CreateShowtimeDto } from './dto/create-showtime.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateShowtimeDto } from './dto/update-showtime.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { ForbiddenException } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class ShowtimeService {
  constructor(private prisma: PrismaService) {}
  async create(createShowtimeDto: CreateShowtimeDto) {
    try {
      const showtimes = await this.prisma.showtime.create({
        data: {
          time: createShowtimeDto.time,
          movieId: createShowtimeDto.movieId,
          theaterId: createShowtimeDto.theaterId,
        },
      });
      return showtimes;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new ForbiddenException('Failed to create');
      }
      throw error;
    }
  }

  async findAll() {
    return await this.prisma.showtime.findMany();
  }

  async findOne(id: string) {
    if (!id) {
      throw new Error('No id found');
    }

    const showtimes = await this.prisma.showtime.findUnique({
      where: { id },
      include: {
        movie: true,
        theater: true,
        bookings: true,
      },
    });
    if (!showtimes) {
      throw new NotFoundException(`showtime with id ${id} not found`);
    }
    return showtimes;
  }

  async update(id: string, updateShowtimeDto: UpdateShowtimeDto) {
    if (!id) {
      throw new Error('No id found');
    }
    const updatedST = await this.prisma.showtime.update({
      where: { id },
      data: { ...updateShowtimeDto },
      include: {
        movie: true,
        theater: true,
        bookings: true,
      },
    });
    if (!updatedST) {
      throw new InternalServerErrorException(`Theater not updated`);
    }
    return updatedST;
  }

  async remove(id: string) {
    const existing = await this.prisma.showtime.findUnique({ where: { id } });

    if (!existing) {
      throw new NotFoundException(`showtime with ID ${id} not found`);
    }

    await this.prisma.showtime.delete({
      where: { id },
    });

    return { success: true, message: `showtime with ID ${id} deleted.` };
  }
}
