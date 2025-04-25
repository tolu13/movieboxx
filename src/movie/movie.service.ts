import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class MovieService {
  constructor(private prisma: PrismaService) {}

  async create(createMovieDto: CreateMovieDto) {
    try {
      const movies = await this.prisma.movie.create({
        data: {
          title: createMovieDto.title,
          description: createMovieDto.description,
          posterUrl: createMovieDto.posterUrl,
          genre: createMovieDto.genre,
          rating: createMovieDto.rating,
        },
      });
      return movies;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new ForbiddenException('Failed to create');
      }
      throw error;
    }
  }

  findAll() {
    return this.prisma.movie.findMany();
  }

  findOne(id: string) {
    return this.prisma.movie.findFirst({
      where: { id: String(id) },
    });
  }

  async update(id: string, updateMovieDto: UpdateMovieDto) {
    return await this.prisma.movie.update({
      where: { id: String(id) },
      data: updateMovieDto,
    });
  }

  async delete(id: string) {
    try {
      await this.prisma.movie.delete({
        where: { id: String(id) },
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(`Not Found`);
      }
      throw error;
    }
  }
}
