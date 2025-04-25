import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
//import { UpdateBookingDto } from './dto/update-booking.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BookingService {
  constructor(private prisma: PrismaService) {}
  async create(createBookingDto: CreateBookingDto) {
    try {
      const booking = await this.prisma.booking.create({
        data: {
          userId: createBookingDto.userId,
          showtimeId: createBookingDto.showtimeId,
          seatId: createBookingDto.seatId,
        },
        include: {
          user: true,
          showtime: true,
          seat: true,
        },
      });
      return booking;
    } catch (error) {
      if (error instanceof Error)
        throw new Error(`Failed to create theater: ${error.message}`);
    }
  }

  async findAll() {
    return this.prisma.booking.findMany();
  }

  async findOne(userId: string) {
    const booking = await this.prisma.booking.findFirst({
      where: { userId: String(userId) },
      include: {
        user: true,
        showtime: true,
        seat: true,
      },
    });
    return booking;
  }

  //update(id: number, updateBookingDto: UpdateBookingDto) {
  // return `This action updates a #${id} booking`;
  //}

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
