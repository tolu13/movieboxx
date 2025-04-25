/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Test, TestingModule } from '@nestjs/testing';
import { ShowtimeController } from '../src/showtime/showtime.controller';
import { ShowtimeService } from '../src/showtime/showtime.service';
import { PrismaService } from '../src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config'; // ConfigService included
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';

describe('ShowtimeController', () => {
  let app: INestApplication;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let prismaService: PrismaService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [ShowtimeController],
      providers: [
        ShowtimeService,
        PrismaService, // Add PrismaService
        ConfigService, // Add ConfigService
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    prismaService = moduleFixture.get<PrismaService>(PrismaService);

    await app.init();
  });

  it('should create a new showtime', async () => {
    const createShowtimeDto = {
      time: '2025-04-24T14:00:00.000Z',
      movieId: '762509', // example UUID
      theaterId: 'f4c06686-8de8-4ecb-a3a0-0cbb6b2eda28', // example UUID
    };

    const response = await request(app.getHttpServer())
      .post('/showtime')
      .send(createShowtimeDto)
      .expect(201); // Expecting 201 because it's a new resource

    expect(response.body).toHaveProperty('id');
    expect(response.body.time).toBe(createShowtimeDto.time);
  });

  it('should fetch all showtimes', async () => {
    const response = await request(app.getHttpServer())
      .get('/showtime')
      .expect(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should update an existing showtime', async () => {
    const updateShowtimeDto = { time: '2025-04-25T14:00:00.000Z' };
    const response = await request(app.getHttpServer())
      .patch('/showtime/856db474-84db-49f4-a90b-e3af620e05ab')
      .send(updateShowtimeDto)
      .expect(200);

    expect(response.body.time).toBe(updateShowtimeDto.time);
  });

  it('should delete an existing showtime', async () => {
    // Create a showtime first
    const createShowtimeDto = {
      time: '2025-04-24T14:00:00.000Z',
      movieId: '762509', // example UUID
      theaterId: 'f4c06686-8de8-4ecb-a3a0-0cbb6b2eda28',
    };

    const createdShowtimeResponse = await request(app.getHttpServer())
      .post('/showtime')
      .send(createShowtimeDto)
      .expect(201);

    const createdShowtimeId = createdShowtimeResponse.body.id;

    // Now, delete that showtime
    await request(app.getHttpServer())
      .delete(`/showtime/${createdShowtimeId}`)
      .expect(200);

    // Try to fetch the showtime and expect it to be deleted (404)
    await request(app.getHttpServer())
      .get(`/showtime/${createdShowtimeId}`)
      .expect(404);
  });

  afterAll(async () => {
    await app.close();
  });
});
