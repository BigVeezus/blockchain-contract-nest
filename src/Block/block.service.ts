import { Injectable } from '@nestjs/common';
import BlockChain from './block.class';
@Injectable()
export class BlockService {
  constructor(private blockChain: BlockChain) {}
  getHello() {
    const coin = this.blockChain;

    return coin;
  }
}
