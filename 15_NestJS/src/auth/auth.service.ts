import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { userLoginType, userSignUpType } from 'src/models/User';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  signUp(userSignUp: userSignUpType) {
    /*
      Flow code: Check mail -> Logic/Mã hóa/Thêm data -> Thông báo
    */
  }

  login(userLogin: userLoginType) {
    try {
      /*
        Flow code: Check mail/password -> Đúng thông tin: Tạo token -> Thông báo
      */
      const isValidAccount = true; // Example for valid account

      if (isValidAccount) {
        // Tạo token
        const token = this.jwtService.signAsync(
          // payload
          { userId: 1 },
          // header + secret key
          { algorithm: 'HS256', expiresIn: '5m', secret: 'SECRET_KEY' },
        );
        return token;
      }

      // throw new HttpException('Email or Password not correct', 401);
      throw new UnauthorizedException('Email or Password not correct');
    } catch (error) {
      if (error.status && error.status !== 500)
        throw new HttpException(error.response, error.status);
      throw new HttpException('Server Error', 500);
    }
  }
}
