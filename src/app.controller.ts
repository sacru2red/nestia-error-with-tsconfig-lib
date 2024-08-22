import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { TypedFormData, TypedRoute } from '@nestia/core';
import { PingRequestDto } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @TypedRoute.Post()
  ping(
    @TypedFormData.Body()
    body: PingRequestDto,
  ) {
    console.log(body);
    return this.appService.getHello();
  }
}
