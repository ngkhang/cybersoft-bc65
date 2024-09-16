import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
/*
  PassportStrategy(Strategy, key)
    - Strategy : đối tượng strategy từ passport-jwt
    - key (default = "jwt") : dựa vào key để liên kết việc chặn token và strategy
*/
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt_node43') {
  constructor(config: ConfigService) {
    super({
      // Định dạng jwt từ request
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Bearer ...
      ignoreExpiration: false,
      secretOrKey: config.get('SECRET_KEY'),
    });
  }

  async validate(tokenDecode: any) {
    // Kiểm tra phân quyền ...
    return { userId: tokenDecode.sub, username: tokenDecode.username };
  }
}
