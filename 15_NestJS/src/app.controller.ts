import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

interface UserType {
  id3: string;
  name3: string;
}
@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // response
    return this.appService.getHello();
  }

  @HttpCode(200) // Định nghĩa statusCode
  @Get('/demo/:id2/:name2')
  getDemo(
    @Req() req: Request,
    @Res() res: Response,

    // Cách 2: Khai báo request
    // query string: ?id=1&name=user1
    @Query('id') id: string,
    @Query('name') name: string,
    // query param (endpoint: /demo/:id2/:name2):  /1/user1
    @Param('id2') id2: string,
    @Param('name2') name2: string,
    // body: { "id3": 1, "name3": "user1"}
    @Body() body: UserType,
  ) {
    /*
      Cách 1: Khai báo request:

      - query string: ?id=1&name=user1
        const { id, name } = req.query;

      - query param (endpoint: /demo/:id2/:name2):  /1/user1
        const { id2, name2 } = req.params;
      
      - body: { "id3": 1, "name3": "user1"}
        const { id3, name3 } = body;

      Trả về response
        res.send({ id, name, id2, name2, id3, name3 });
    */
    const { id3, name3 } = body;

    return {
      id,
      name,
      id2,
      name2,
      id3,
      name3,
    };
  }

  @Get('/get-number')
  getNumber() {
    return this.appService.getNumber();
  }
}
