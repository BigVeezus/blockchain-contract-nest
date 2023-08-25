import { Module } from '@nestjs/common';
import BlockChain from './block.class';
import { BlockService } from './block.service';

@Module({
  imports: [],
  controllers: [],
  providers: [BlockService, BlockChain],
})
export class BlockModule {}
