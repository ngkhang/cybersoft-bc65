import { Body, Controller, Get, HttpCode, Param, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

interface UserType {
  id3: string, name3: string
}
@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @HttpCode(200)
  @Get('/demo/:id2/:name2')
  getDemo(@Req() req: Request,
  @Query('id') id: string, @Query('name') name: string,
  @Param('id2') id2: string, @Param('name2') name2: string,
  @Body() body: UserType,
) {
  // let {id, name} = req.query;
  
  // let {id2, name2} = req.params;
  
  let {id3, name3} = body;
  
  return {
    id, name,
    id2, name2,
    id3, name3,
  }
}

@Get('/get-number')
  getNumber() {
    return this.appService.getNumber()
  }
}
