import { Injectable } from '@nestjs/common';
import BlockChain from './Block/block.class';
import { BlockTransactionDTO } from './BlockDTO/blockDTO';
@Injectable()
export class AppService {
  constructor(private blockChain: BlockChain) {}
  getBlockChain() {
    const coin = this.blockChain;

    return coin;
  }

  mineBlock(body: BlockTransactionDTO) {
    const { amount, sender, recipient } = body;
    console.log(body);
    const coin = this.blockChain;
    coin.createTransaction({
      amount,
      sender,
      recipient,
    });

    coin.createBlock();
    return coin;
  }

  validateBlockChain() {
    const coin = this.blockChain;
    return coin.isChainValid();
  }
}
