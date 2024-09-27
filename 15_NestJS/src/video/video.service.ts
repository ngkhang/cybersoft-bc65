import { HttpException, Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';

// Cách 1: Setup Prisma
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

// Cách 2: Recommend
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class VideoService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createVideoDto: CreateVideoDto) {
    try {
      const num_views = Number(createVideoDto.views);
      createVideoDto.views = num_views;
      const data = await this.prismaService.video.create({
        data: createVideoDto,
      });
      return data;
    } catch (error) {
      throw new HttpException('Lỗi Server', 500);
    }
  }

  async findAll() {
    try {
      // Nest.Js support async -> Có thể bỏ await
      // const data = await prisma.video.findMany();
      const data = await this.prismaService.video.findMany();
      return data;
    } catch (error) {
      throw new HttpException('Lỗi Server', 500);
    }
  }

  async findOne(id: number) {
    const data = await this.prismaService.video.findMany({
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
