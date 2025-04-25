import { IsDate, IsString } from 'class-validator';

export class Showtime {
  @IsDate()
  time!: Date;

  @IsString()
  movieId!: string;

  @IsString()
  theaterId!: string;
}
