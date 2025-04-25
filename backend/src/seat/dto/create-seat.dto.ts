import { IsString } from 'class-validator';

export class CreateSeatDto {
  @IsString()
  number!: string; // Seat number, e.g., "A1"

  @IsString()
  theaterId!: string;
}
