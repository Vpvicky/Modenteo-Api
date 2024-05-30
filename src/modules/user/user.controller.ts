import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { SignInDto } from './dto/sign-in.dto';
import { ApiTags } from '@nestjs/swagger';
import { SignUpDto } from './dto/sign-up.dto';

@ApiTags('User')
@Controller({
  path: 'user',
  version: '1',
})
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.userService.signUp(signUpDto);
  }

  @Post('/signin')
  signIn(@Body() signInDto: SignInDto) {
    return this.userService.signIn(signInDto);
  }

  @Get('/get-user')
  getAllUsers() {
    return this.userService.getAllUsers();
  }
}
