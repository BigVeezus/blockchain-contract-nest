import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { BlockTransactionDTO } from './BlockDTO/blockDTO';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getBlockchain() {
    return this.appService.getBlockChain();
  }

  @Post('mine-block')
  mineBlock(@Body() body: BlockTransactionDTO) {
    return this.appService.mineBlock(body);
  }

  @Get('is-valid')
  validateBlock() {
    return this.appService.validateBlockChain();
  }
}
