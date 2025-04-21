import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Genre } from '../enum/enum';

export class CreateMovieDto {
  @IsString()
  title!: string;

  @IsString()
  description!: string;

  @IsString()
  posterUrl!: string;

  @IsEnum(Genre)
  genre!: Genre;

  @IsOptional()
  tmdbId!: number;

  @IsOptional()
  rating!: number;
}
