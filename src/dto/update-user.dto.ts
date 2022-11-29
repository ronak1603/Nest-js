import { IsString, IsEmail } from "class-validator";

export class UpdateUserDto {
  
  id:number;

  @IsString()
  password: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;
}