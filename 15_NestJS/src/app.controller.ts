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
import { ApiBody, ApiParam, ApiProperty, ApiQuery } from '@nestjs/swagger';

interface UserType {
  id3: string;
  name3: string;
}

// Type dùng cho request theo Express phải là Class
class UserTypeClass {
  @ApiProperty()
  id3: string;
  @ApiProperty()
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
    // Cách 1: Khai báo request theo Express
    @Req() req: Request,
    @Res() res: Response,

    // Cách 2: Khai báo request theo Nest
    // query string: ?id=1&name=user1
    @Query('id') id: string,
    @Query('name') name: string,
    // query param (endpoint: /demo/:id2/:name2):  /1/user1
    @Param('id2') id2: string,
    @Param('name2') name2: string,
    // body: { "id3": 1, "name3": "user1"}
    // @Body() body: UserType,
  ) {
    /*
      Cách 1: Khai báo request theo Express

      - query string: ?id=1&name=user1
        const { id, name } = req.query;

      - query param (endpoint: /demo/:id2/:name2):  /1/user1
        const { id2, name2 } = req.params;
      
      - body: { "id3": 1, "name3": "user1"}
        const { id3, name3 } = body;

      Trả về response
        res.send({ id, name, id2, name2, id3, name3 });
    */
    // const { id3, name3 } = body;

    return {
      id,
      name,
      id2,
      name2,
      // id3,
      // name3,
    };
  }

  //
  // Decorator hỗ trợ request query load ra Swagger
  @ApiQuery({
    name: 'id',
    type: String,
  })
  // Decorator hỗ trợ request param ra Swagger
  @ApiParam({
    name: 'title',
    type: String,
  })
  // @ApiBody({
  //   type: UserTypeClass, // Type của body phải là class
  // })
  @Get('/get-number/:title')
  getNumber(@Req() req: Request) {
    const { id } = req.query;
    const { title } = req.params;
    // const { name, email } = req.body;
    return {
      number: this.appService.getNumber(),
      id,
      title,
    };
  }
}
