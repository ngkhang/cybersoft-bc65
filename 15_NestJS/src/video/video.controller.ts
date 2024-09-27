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
  UseGuards,
  Req,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { VideoService } from './video.service';
import {
  CreateVideoDto,
  FilesUploadDto,
  FileUploadDto,
} from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
// import { diskStorage } from 'multer';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import storeService, { StorageName } from 'src/shared/file-upload.service';

interface UserType {
  user: {
    id: number;
    email: string;
  };
}

// Handle storage upload
// const storage = {
//   storage: diskStorage({
//     destination: `${process.cwd()}/public/images`,
//     filename: (req, file, callback) =>
//       // Rename file
//       callback(null, new Date().getTime() + '_' + file.originalname),
//   }),
// };

@ApiTags('video') // Group API trong Swagger
// @UseGuards(AuthGuard('jwt_node43')) // Khóa API theo cấp controller (đối tượng)
@Controller('video')
export class VideoController {
  constructor(
    private readonly videoService: VideoService,
    private jwtService: JwtService,
  ) {}

  // Decorator chạy trước khi vào request ~ Middleware
  // Upload single pic
  @UseInterceptors(
    FileInterceptor('file', { storage: storeService(StorageName.Video) }),
  )
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Upload single pic',
    type: FileUploadDto,
  })
  @Post('/upload')
  upload(@UploadedFile() file: Express.Multer.File) {
    return file;
  }

  // Upload multi pic
  @UseInterceptors(
    FilesInterceptor('files', 5, { storage: storeService(StorageName.Video) }),
  )
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Upload mutil pic',
    type: FilesUploadDto,
  })
  @Post('/uploads')
  uploadMulti(@UploadedFiles() files: Express.Multer.File[]) {
    return files;
  }

  /*
    Khóa Api dùng thư viện
  */
  @ApiBearerAuth() // Decorator cho swagger hoạt động mở khóa token
  @UseGuards(AuthGuard('jwt_node43')) // Decorator cho strategy hoạt động
  @ApiOperation({ summary: 'Get all video' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get all video successfully!',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Error server',
  })
  @Get()
  findAll(@Req() req) {
    // Flow code Auth: Lấy token từ headers -> Check token
    /*
      // Khóa api thủ công
      if (this.jwtService.verifyAsync('token', { secret: 'SECRET_KEY' })) {
      }
    */

    const data = req.user;
    console.log(data);
    return this.videoService.findAll();
  }

  @Post('/create-video')
  async create(
    @Body() createVideoDto: CreateVideoDto,
    @Res() res: Response,
  ): Promise<Response<CreateVideoDto>> {
    const newVideo = await this.videoService.create(createVideoDto);
    return res.status(201).json(newVideo);
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
