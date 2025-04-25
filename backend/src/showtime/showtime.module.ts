import { Module } from '@nestjs/common';
import { ShowtimeService } from './showtime.service';
import { ShowtimeController } from './showtime.controller';

@Module({
  controllers: [ShowtimeController],
  providers: [ShowtimeService],
})
export class ShowtimeModule {}
