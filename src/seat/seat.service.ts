import { Injectable } from '@nestjs/common';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { PrismaService } from 'src/prisma/prisma.service';
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

  findAll() {
    return this.prisma.seat.findMany();
  }

  findOne(id: string) {
    return `This action returns a #${id} seat`;
  }

  update(id: string, updateSeatDto: UpdateSeatDto) {
    return `This action updates a #${id} seat`;
  }

  remove(id: string) {
    return `This action removes a #${id} seat`;
  }
}
