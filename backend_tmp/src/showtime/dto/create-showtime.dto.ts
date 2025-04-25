import { IsDateString, IsString } from 'class-validator';
import { MovieId, ShowtimeDate, TheaterId } from '../types/types';

export class CreateShowtimeDto {
  @IsDateString()
  time!: ShowtimeDate;

  @IsString()
  movieId!: MovieId;

  @IsString()
  theaterId!: TheaterId;
}
