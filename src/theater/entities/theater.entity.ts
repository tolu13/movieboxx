import { IsString } from 'class-validator';
import { seatLayout } from '../types/type';

export class Theater {
  @IsString()
  name!: string;

  @IsString()
  location!: string;

  @IsString()
  status!: string;

  seats!: seatLayout;
}
