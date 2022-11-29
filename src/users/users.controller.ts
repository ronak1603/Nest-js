import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {

    }

    @Post('/add')
    createUser(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {

        return this.userService.addUser(createUserDto);
    }

    @UseGuards(AuthService)
    @Get("/findAll")
    getAllUser() {
        return this.userService.findAllUsers();
    }

    @Get("/:id")
    getUser(@Param('id') id: string) {
        return this.userService.findUser(id);
    }

    @UseGuards(AuthService)
    @Post('/login')
    login(@Body() createUserDto: CreateUserDto) {
        return this.userService.signIn(createUserDto);
    }

    @Get("/:name")
    getUserName(_name: string) {
        return this.userService.getUserByName(_name);
    }

    @Put('/:id')
    updateUser(@Param('id') @Body() updateUserDto: UpdateUserDto) {
        return this.userService.updateUser(updateUserDto);
    }

    @Delete('/delete/:id')
    async delete(@Param('id') userId: string) {
        return this.userService.deleteUser(userId);
    }
}

