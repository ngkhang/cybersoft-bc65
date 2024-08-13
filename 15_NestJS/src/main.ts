import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Mở chặn truy cập
  app.enableCors();

  app.use(express.static('.'))

  const config = new DocumentBuilder()
    .setTitle('Node 43')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/swagger', app, document);

  await app.listen(3000);
}
bootstrap();

