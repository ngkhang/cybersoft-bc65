import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, UploadedFile } from '@nestjs/common';
import { VideoService } from './video.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import {diskStorage} from 'multer';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('video')
@Controller('video')
export class VideoController {
  constructor(
    private readonly videoService: VideoService,
  ) {}

  // Upload single pic
  @UseInterceptors(FileInterceptor('hinhAnh', {
    storage: diskStorage({
      destination: process.cwd() + '/public/images',
      filename: (req, file, callback) => callback(null, new Date().getTime + '_' + file.originalname)
    })
  }))
  @Post('/upload')
  upload(@UploadedFile() file: Express.Multer.File){
    return file;
  }

  // Upload multi pic
  @UseInterceptors(FilesInterceptor('hinhAnh', 5, {
    storage: diskStorage({
      destination: process.cwd() + '/public/images',
      filename: (req, file, callback) => callback(null, new Date().getTime + '_' + file.originalname)
    })
  }))
  @Post('/upload-multi')
  uploadMulti(@UploadedFiles() file: Express.Multer.File){
    return file;
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
