import { Injectable } from '@nestjs/common';
import BlockChain from './Block/block.class';

@Injectable()
export class AppService {
  constructor(private blockChain: BlockChain) {}
  getBlockChain() {
    const coin = this.blockChain;
    return coin;
  }
}
