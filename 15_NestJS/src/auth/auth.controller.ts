import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { userLoginType, userSignUpType } from 'src/models/User';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/sign-up')
  signUp(@Body() userSignUp: userSignUpType) {
    return this.authService.signUp(userSignUp);
  }

  @Post('/login')
  login(@Body() userLogin: userLoginType) {
    return this.authService.login(userLogin);
  }
}
