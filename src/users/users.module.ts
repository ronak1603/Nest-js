import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { JwtModule } from '@nestjs/jwt/dist/jwt.module';


@Module({
  imports:[TypeOrmModule.forFeature([User]),
  JwtModule.register({
    secret:"key",
    signOptions: { expiresIn: '60s' },
  }),

],
  providers: [UsersService],
  controllers: [UsersController],
  exports:[UsersService]
})
export class UsersModule {}