import { Injectable } from '@nestjs/common';
import BlockChain from './Block/block.class';

@Injectable()
export class AppService {
  constructor(private blockChain: BlockChain) {}
  getBlockChain() {
    const coin = this.blockChain;

    coin.createTransaction({
      amount: 1000,
      sender: 'Frank',
      recipient: 'Tayo',
    });

    coin.createBlock();

    coin.createTransaction({
      amount: 500,
      sender: 'Elvis',
      recipient: 'Wendy',
    });

    coin.createBlock();

    return coin.isChainValid();
  }
}
