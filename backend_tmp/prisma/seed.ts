// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

const TMDB_API_KEY = process.env.TMDB_API_KEY as string;

if (!TMDB_API_KEY) {
  throw new Error('TMDB_API_KEY is missing from .env');
}

// Type TMDB response
type TMDBMovie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
};

type TMDBResponse = {
  page: number;
  results: TMDBMovie[];
  total_pages: number;
  total_results: number;
};

// Map genre IDs to genre names (you can expand this list)
const genreMap: Record<number, string> = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
};

async function fetchPopularMovies(): Promise<TMDBMovie[]> {
  try {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`;
    const response = await axios.get<TMDBResponse>(url);
    return response.data.results;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Seeding error:', error.message);
    } else {
      console.error('Unknown seeding error');
    }
    return [];
  }
}

async function main() {
  const movies = await fetchPopularMovies();

  for (const movie of movies) {
    // Get the first genre ID and map it to a genre name, default to 'Unknown'
    const genre =
      movie.genre_ids.length > 0
        ? genreMap[movie.genre_ids[0]] || 'Unknown'
        : 'Unknown';

    await prisma.movie.upsert({
      where: { id: String(movie.id) },
      update: {},
      create: {
        id: String(movie.id),
        title: movie.title,
        description: movie.overview || 'No description available',
        posterUrl: movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : null,
        rating: movie.vote_average,
        genre: genre,
        createdAt: new Date(),
      },
    });
  }

  console.log(`✅ Seeded ${movies.length} movies from TMDB`);
}

main()
  .catch((error: unknown) => {
    if (error instanceof Error) {
      console.error('Seeding error:', error.message);
    } else {
      console.error('Unknown seeding error');
    }
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
