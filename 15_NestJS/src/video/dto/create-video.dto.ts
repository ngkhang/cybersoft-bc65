import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateVideoDto {
  @ApiProperty()
  @IsString({ message: 'The Value must be a valid number' })
  video_name: string;

  @ApiProperty()
  @IsString()
  thumbnail: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNumber()
  views: number;

  @ApiProperty()
  @IsString()
  source: string;

  @ApiProperty()
  @IsNumber()
  user_id: number;

  @ApiProperty()
  @IsNumber()
  type_id: number;
}

export class FileUploadDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;
}

export class FilesUploadDto {
  @ApiProperty({ type: 'array', items: { type: 'string', format: 'binary' } })
  files: any[];
}
