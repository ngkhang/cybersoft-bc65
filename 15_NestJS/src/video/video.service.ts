import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class VideoService {
  prisma = new PrismaClient();

  create(createVideoDto: CreateVideoDto) {
    return 'This action adds a new video';
  }

  async findAll() {
    // Nest.Js support async -> Có thể bỏ await
    const data = await this.prisma.video.findMany();
    return data;
  }

  async findOne(id: number) {
    const data = await this.prisma.video.findMany({
      where: {
        video_id: id,
      },
    });
    return data;
  }

  update(id: number, updateVideoDto: UpdateVideoDto) {
    return `This action updates a #${id} video`;
  }

  remove(id: number) {
    return `This action removes a #${id} video`;
  }
}
