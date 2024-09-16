import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  // module trong import chỉ dùng trong module video
  imports: [ConfigModule, JwtModule.register({})],
  controllers: [VideoController],
  providers: [VideoService, PrismaService],
})
export class VideoModule {}
