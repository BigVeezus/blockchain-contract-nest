import { Injectable } from '@nestjs/common';
import { Chain } from './Types';
import { SHA256 } from 'crypto-js/sha256';

@Injectable()
export default class BlockChain {
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

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  generateHash(previousBlockHash: string, timeStamp: number) {
    let hash = '';
    let nonce = 0;

    while (hash.substring(0, 3) !== '000') {
      nonce++;
      hash = SHA256(
        previousBlockHash +
          timeStamp +
          JSON.stringify(this.pendingTransactions) +
          nonce,
      ).toString();
    }

    return { hash, nonce };
  }

  createTransaction(amount, sender, recipient) {
    this.pendingTransactions.push({
      amount,
      sender,
      recipient,
    });
  }

  createBlock() {
    const timeStamp = Date.now();
    const transactions = this.pendingTransactions;
    const previousBlockHash = this.getLastBlock().hash;
    const generateHash = this.generateHash(previousBlockHash, timeStamp);

    const newBlock = {
      index: this.chain.length + 1,
      timeStamp,
      transactions,
      nonce: generateHash.nonce,
      hash: generateHash.hash,
      previousBlockHash,
    };

    this.pendingTransactions = [];
    this.chain.push(newBlock);

    return newBlock;
  }
}
