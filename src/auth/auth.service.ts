/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto, SignUpDto } from './dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: SignUpDto) {
    // generate  the password hash
    const password = await argon.hash(dto.password);
    // save the new user in db
    try {
      const user = await this.prisma.user.create({
        data: {
          name: dto.name,
          email: dto.email,
          password: password,
        },
      });
      // return the saved user
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }

  async signin(dto: LoginDto) {
    //find user by emaill
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
      include: {
        bookings: true,
      },
    });
    //if user doesnt eist throw exceptions

    if (!user) throw new ForbiddenException('Credentials incorrect');
    // compare password
    const passwordMatch = await argon.verify(user.password, dto.password);
    //if password incoreect throw error
    if (!passwordMatch) throw new ForbiddenException('Credentials incorrect');
    //send back the user

    return this.signToken(user.id, user.email, user);
  }

  async signToken(
    userId: string,
    email: string,
    user: any,
  ): Promise<{ access_token: string; user: any }> {
    const payload = {
      sub: userId,
      email,
    };

    const secret = this.config.get<string>('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '60m',
      secret: secret,
    });

    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      user: { id: userId, email, name: user.name },
      access_token: token,
    };
  }
}
