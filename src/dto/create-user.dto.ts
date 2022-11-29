import { IsEmail, IsString } from "class-validator";
import { ObjectID } from "typeorm";

export class CreateUserDto {
  
  id:ObjectID;
  
  @IsString()
  password: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;
}