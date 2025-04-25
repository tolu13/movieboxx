import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Genre } from '../enum/enum';

export class MovieEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  title!: string;

  @Column()
  posterUrl!: string;

  @Column()
  description!: string;

  @Column({
    type: 'enum',
    enum: Genre,
  })
  genre!: Genre;
}
