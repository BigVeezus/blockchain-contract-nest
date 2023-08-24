// import { BlockService } from './block.service';
import { Chain } from './Types';

export class BlockClass {
  chain: Chain[];
  pendingTransactions: any[];
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.pendingTransactions = [];
  }

  createGenesisBlock(): Chain {
    return {
      index: 1,
      timeStamp: Date.now(),
      transactions: [],
      nonce: 0,
      hash: 'hash',
      previousBlockHash: 'prevHash',
    };
  }
}
