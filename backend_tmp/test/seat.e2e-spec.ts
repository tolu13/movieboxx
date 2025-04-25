/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ConfigService } from '@nestjs/config';
import { SeatController } from '../src/seat/seat.controller';
import { SeatService } from '../src/seat/seat.service';
import { PrismaService } from '../src/prisma/prisma.service';

describe('SeatController (e2e)', () => {
  let app: INestApplication;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let prisma: PrismaService;
  let createdSeatId: string;
  const theaterId = 'f4c06686-8de8-4ecb-a3a0-0cbb6b2eda28'; // 👈 Use a valid UUID from your DB

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [SeatController],
      providers: [SeatService, PrismaService, ConfigService],
    }).compile();

    app = moduleFixture.createNestApplication();
    prisma = moduleFixture.get<PrismaService>(PrismaService);

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST /seat - should create a new seat', async () => {
    const response = await request(app.getHttpServer())
      .post('/seat')
      .send({
        number: 'A10',
        theaterId,
      })
      .expect(201);

    expect(response.body).toHaveProperty('id');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(response.body.number).toBe('A10');
    expect(response.body.theaterId).toBe(theaterId);
    createdSeatId = response.body.id;
  });

  it('GET /seat - should fetch all seats', async () => {
    const response = await request(app.getHttpServer())
      .get('/seat')
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });

  it('GET /seat/:id - should fetch a specific seat', async () => {
    const response = await request(app.getHttpServer())
      .get(`/seat/${createdSeatId}`)
      .expect(200);

    expect(typeof response.body).toBe('string'); // Since your `findOne` just returns a string
    expect(response.body).toContain(createdSeatId);
  });

  it('PATCH /seat/:id - should update a seat (mocked response)', async () => {
    const response = await request(app.getHttpServer())
      .patch(`/seat/${createdSeatId}`)
      .send({ number: 'B2' }) // even if not used
      .expect(200);

    expect(response.body).toContain('B2');
  });

  it('DELETE /seat/:id - should delete a seat (mocked response)', async () => {
    const response = await request(app.getHttpServer())
      .delete(`/seat/${createdSeatId}`)
      .expect(200);

    expect(response.body).toContain('removes a');
  });
});
