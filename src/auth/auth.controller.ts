import { AuthService } from './auth.service';
import { Controller, Request, UseGuards, Post } from '@nestjs/common';

@Controller()
export class AuthController {
    constructor(private authService: AuthService) { }
    @UseGuards(AuthService)
    @Post('/login')
    async login(@Request() req) {
        return this.authService.generateToken(req.user);
    }
}