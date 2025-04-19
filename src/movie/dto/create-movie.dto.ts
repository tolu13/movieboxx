import { IsEnum, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  posterUrl: string;

  @IsEnum(Genre)
  henre: Genre
}
