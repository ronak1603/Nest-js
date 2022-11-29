import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { getMongoRepository } from 'typeorm';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';


@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>
  ) { }

  async addUser(CreateUserDto: CreateUserDto): Promise<string> {

    await getMongoRepository(User).insertOne({
      name: CreateUserDto.name,

      email: CreateUserDto.email,

      password: CreateUserDto.password,

    })

    return "user has been created";
  }

  findAllUsers(): Promise<User[]> {
    return this.userRepo.find();
  }

  findUser(id: string): Promise<any> {
    return this.userRepo.findOne(id);
  }

  async signIn(CreateUserDto: CreateUserDto): Promise<User> {
    const user = await getMongoRepository(User).findOne({
      name: CreateUserDto.name,

      password: CreateUserDto.password,

    })

    if (!user)
      throw new UnauthorizedException();

    return user;
  }

  getUserByName(name: string): Promise<any> {
    return this.userRepo.findOne(name);
  }


  async updateUser(updateUserDto: UpdateUserDto) {
    await getMongoRepository(User).updateOne(
      { id: updateUserDto.id },
      {
        $set: {
          name: updateUserDto.name,

          email: updateUserDto.email,

          password: updateUserDto.password
        }
      },
    )

    return "user has been updated";
  }

  deleteUser(userId: string): Promise<any> {
    return this.userRepo.delete(userId);

  }

}