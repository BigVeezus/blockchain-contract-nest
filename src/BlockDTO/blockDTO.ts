import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class BlockTransactionDTO {
  @IsNotEmpty()
  @IsNumber()
  readonly amount: number;

  @IsNotEmpty()
  @IsString()
  readonly recipient: string;

  @IsNotEmpty()
  @IsString()
  readonly sender: string;
}
