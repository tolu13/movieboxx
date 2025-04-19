import { Column, PrimaryGeneratedColumn } from 'typeorm';

export enum Genre {
  ACTION = 'action',
  DRAMA = 'drama',
  COMEDY = 'comedy',
  HORROR = 'horror',
  SCI_FI = 'sci-fi',
}

export class MovieEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  posterUrl: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: Genre,
  })
  genre: Genre;
}
