import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

const PORT = 3000; // Port server

async function bootstrap() {
  // Định nghĩa port/ Khởi dộng server/ Config server

  // Nhận vào lớp đối tượng AppModule - AppModule là module gốc
  const app = await NestFactory.create(AppModule);

  // Mở chặn truy cập
  app.enableCors({
    origin: ['*'], // Cho phép tất cả truy cập ~ app.enableCors()
  });

  // Định vị nơi load tài nguyên
  app.use(express.static('.'));

  // Validator input
  app.useGlobalPipes(new ValidationPipe());

  // Swagger
  const configSwagger = new DocumentBuilder()
    .addBearerAuth() // Handle pass và mở khóa token cho toàn bộ nơi bị khóa token
    .setTitle('Node 43')
    .build(); // config
  const documentSwagger = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('/swagger', app, documentSwagger);

  await app.listen(PORT, () =>
    console.log(`Server is running: http://localhost:${PORT}`),
  );
}
bootstrap();
