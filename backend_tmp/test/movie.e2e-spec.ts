/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Test, TestingModule } from '@nestjs/testing';
import { MovieController } from '../src/movie/movie.controller';
import { MovieService } from '../src/movie/movie.service';
import { PrismaService } from '../src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config'; // Add ConfigService
import * as request from 'supertest';
import { Genre } from './../src/movie/enum/enum'; // Correct import for Genre enum

describe('MovieController (e2e)', () => {
  let app;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovieController],
      providers: [
        MovieService,
        PrismaService,
        ConfigService, // Provide ConfigService
      ],
    }).compile();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST /movie - should create a movie', async () => {
    const res = await request(app.getHttpServer())
      .post('/movie')
      .send({
        title: 'Inception',
        description: 'A mind-bending thriller',
        posterUrl: 'https://example.com/inception.jpg',
        genre: Genre.SCI_FI, // Using the Genre enum here
        rating: 8.8,
      })
      .expect(201);

    expect(res.body.title).toBe('Inception');
    expect(res.body.genre).toBe(Genre.SCI_FI); // Verifying that the genre is set properly
  });

  it('GET /movie - should return all movies', async () => {
    const res = await request(app.getHttpServer()).get('/movie').expect(200);

    expect(res.body).toBeInstanceOf(Array);
  });

  it('GET /movie/:id - should return one movie', async () => {
    const res = await request(app.getHttpServer())
      .get('/movie/d5213884-aa23-4916-bcce-96f19ac4dc92')
      .expect(200);

    expect(res.body.id).toBe('d5213884-aa23-4916-bcce-96f19ac4dc92');
  });

  it('PATCH /movie/:id - should update movie', async () => {
    const res = await request(app.getHttpServer())
      .patch('/movie/d5213884-aa23-4916-bcce-96f19ac4dc92')
      .send({ title: 'Updated Title' })
      .expect(200);

    expect(res.body.title).toBe('Updated Title');
  });

  it('DELETE /movie/:id - should delete movie', async () => {
    await request(app.getHttpServer())
      .delete('/movie/d5213884-aa23-4916-bcce-96f19ac4dc92')
      .expect(200);

    await request(app.getHttpServer())
      .get('/movie/d5213884-aa23-4916-bcce-96f19ac4dc92')
      .expect(404); // Expect 404 after deletion
  });
});
