import { Controller, Get } from '@nestjs/common';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';
import { sharedContract } from 'shared';
import { localContract } from 'src/contract';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // ts error : Property '204' is incompatible with index signature.
  // Type 'unique symbol' is not assignable to type 'AppRouteResponse'.ts(2345)
  @TsRestHandler(sharedContract)
  async handlerShared() {
    return tsRestHandler(sharedContract, {
      delete: async () => {
        console.log('Delete item');
        return { status: 204, body: undefined };
      },
    });
  }

  // no ts error
  @TsRestHandler(localContract)
  async handlerLocal() {
    return tsRestHandler(localContract, {
      delete: async () => {
        console.log('Delete item');
        return { status: 204, body: undefined };
      },
    });
  }
}
