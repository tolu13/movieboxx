import { IsEnum, IsString } from 'class-validator';
import { seatLayout, TheaterStatus } from '../types/type';

export class CreateTheaterDto {
  @IsString()
  name!: string;

  @IsString()
  location!: string;

  @IsEnum(TheaterStatus)
  status!: TheaterStatus;

  seats!: seatLayout;
}
