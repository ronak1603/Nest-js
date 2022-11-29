import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/users.service";

@Injectable()

export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) { }

  async validateUser(name: string, password: string): Promise<any> {
    const user = await this.usersService.getUserByName(name);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async generateToken(name: string): Promise<any> {
    const user = await this.usersService.getUserByName(name);
    const payload = { name: user.name }
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}