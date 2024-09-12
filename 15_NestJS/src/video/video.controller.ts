import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  UploadedFile,
} from '@nestjs/common';
import { VideoService } from './video.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ApiTags } from '@nestjs/swagger';

// Handle storage upload
const storage = {
  storage: diskStorage({
    destination: `${process.cwd()}/public/images`,
    filename: (req, file, callback) =>
      // Rename file
      callback(null, new Date().getTime() + '_' + file.originalname),
  }),
};

@ApiTags('video') // Group API trong Swagger
@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  // Decorator chạy trước khi vào request ~ Middleware
  // Upload single pic
  @UseInterceptors(FileInterceptor('hinhAnh', storage))
  @Post('/upload')
  upload(@UploadedFile() file: Express.Multer.File) {
    return file;
  }

  // Upload multi pic
  @UseInterceptors(FilesInterceptor('hinhAnh', 5, storage))
  @Post('/uploads')
  uploadMulti(@UploadedFiles() files: Express.Multer.File[]) {
    return files;
  }

  @Post()
  create(@Body() createVideoDto: CreateVideoDto) {
    return this.videoService.create(createVideoDto);
  }

  @Get()
  findAll() {
    return this.videoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVideoDto: UpdateVideoDto) {
    return this.videoService.update(+id, updateVideoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videoService.remove(+id);
  }
}
