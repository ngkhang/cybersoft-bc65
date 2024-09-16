// Module gốc

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoModule } from './video/video.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  // Khai báo module - kết nối: controller và service của đối tượng đó; với các module khác
  imports: [
    VideoModule,
    ConfigModule.forRoot({ isGlobal: true }), // Khai báo ConfigModule phạm vi global
    AuthModule,
  ],
  // Khai báo controller - định nghĩa api (request, response) (router trong express)
  controllers: [AppController],
  // Khai báo service (provider) - định nghĩa logic (controller trong express)
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
