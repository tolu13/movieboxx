import { IsString } from 'class-validator';

export class CreateBookingDto {
  @IsString()
  userId!: string;

  @IsString()
  showtimeId!: string;

  @IsString()
  seatId!: string;
}
