import { IsString } from 'class-validator';

export class Booking {
  @IsString()
  userId!: string;

  @IsString()
  showtimeId!: string;

  @IsString()
  seatId!: string;
}
