import { IsString } from 'class-validator';

export class Seat {
  @IsString()
  number!: string; // Seat number, e.g., "A1"

  @IsString()
  theaterId!: string;
}
