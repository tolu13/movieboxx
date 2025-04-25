import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { MovieModule } from './movie/movie.module';
import { TheaterModule } from './theater/theater.module';
import { ShowtimeModule } from './showtime/showtime.module';
import { SeatModule } from './seat/seat.module';
import { BookingModule } from './booking/booking.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes config available app-wide without re-importing
    }),
    PrismaModule,
    AuthModule,
    UserModule,
    MovieModule,
    TheaterModule,
    ShowtimeModule,
    SeatModule,
    BookingModule,
  ],
  controllers: [],
})
export class AppModule {}
