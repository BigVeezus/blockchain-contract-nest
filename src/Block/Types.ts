export interface Chain {
  index: number;
  timeStamp: any;
  transactions: any[];
  nonce: number;
  hash: string;
  previousBlockHash: string;
}

export interface Transaction {
  amount: number;
  sender: string;
  recipient: string;
}
