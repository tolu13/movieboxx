import { Module } from '@nestjs/common';
//import { UserModule  from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes config available app-wide without re-importing
    }),
    PrismaModule,
    AuthModule,
  ],
  controllers: [],
})
export class AppModule {}
