/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Seat } from './types/type';

@Injectable()
export class SeatService {
  constructor(private prisma: PrismaService) {}

  async create(createSeatDto: CreateSeatDto): Promise<Seat> {
    const seat = await this.prisma.seat.create({
      data: {
        number: createSeatDto.number, // Ensures that `number` is a string
        theaterId: createSeatDto.theaterId, // Ensures theaterId is a string
      },
      include: {
        bookings: true,
      },
    });
    return seat; // Returns a Seat, which matches the `Seat` type
  }

  async findAll(): Promise<Seat[]> {
    return this.prisma.seat.findMany({
      include: {
        bookings: true,
      },
    });
  }

  async findOne(id: string): Promise<Seat> {
    const seat = await this.prisma.seat.findUnique({
      where: { id },
      include: {
        bookings: true,
      },
    });
    if (!seat) {
      throw new NotFoundException(`Seat with ID ${id} not found`);
    }
    return seat;
  }
  async update(id: string, updateSeatDto: UpdateSeatDto): Promise<Seat> {
    try {
      const updatedSeat = await this.prisma.seat.update({
        where: { id },
        data: updateSeatDto,
        include: {
          bookings: true,
        },
      });
      return updatedSeat;
    } catch (error) {
      throw new InternalServerErrorException(`Could not update seat ${id}`);
    }
  }

  async remove(id: string): Promise<{ success: boolean; message: string }> {
    const seat = await this.prisma.seat.findUnique({ where: { id } });
    if (!seat) {
      throw new NotFoundException(`Seat with ID ${id} not found`);
    }

    await this.prisma.seat.delete({ where: { id } });

    return {
      success: true,
      message: `Seat with ID ${id} deleted successfully`,
    };
  }
}
