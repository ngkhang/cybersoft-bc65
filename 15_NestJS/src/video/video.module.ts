import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';
// import { ConfigModule } from '@nestjs/config';

@Module({
  // imports: [ConfigModule], // module ConfigModule chỉ dùng trong module video
  controllers: [VideoController],
  providers: [VideoService],
})
export class VideoModule {}
