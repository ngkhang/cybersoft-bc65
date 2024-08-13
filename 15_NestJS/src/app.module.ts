// Module gốc

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoModule } from './video/video.module';
import {ConfigModule} from '@nestjs/config';

@Module({
  imports: [VideoModule, ConfigModule.forRoot({isGlobal: true})],                  // Khai báo module 
  controllers: [AppController], // Khai báo controller
  providers: [AppService],      // Khai báo service
})
export class AppModule {}
