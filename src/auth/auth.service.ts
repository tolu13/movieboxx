import { ForbiddenException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { LoginDto, SignUpDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from 'generated/prisma/runtime/library';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
    private jwt: JwtService,
  ) {}

  async signup(dto: SignUpDto) {
    // hash password
    const password = await argon.hash(dto.password);

    // save new user into db
    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          name: dto.name,
          password,
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

  async login(dto: LoginDto) {
    // find user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    // if user doesn't exist, throw exceptions
    if (!user) throw new ForbiddenException('Credentials incorrect');

    // compare password
    const passwordMatch = await argon.verify(user.password, dto.password);

    // if password incorrect, throw error
    if (!passwordMatch) throw new ForbiddenException('Credentials incorrect');

    // send back the user
    return this.signToken(user.id, user.email);
  }

  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };

    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '30m',
      secret: secret,
    });

    return {
      access_token: token,
    };
  }
}
}