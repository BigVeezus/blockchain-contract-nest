import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlockModule } from './Block/block.module';
import BlockChain from './Block/block.class';

@Module({
  imports: [BlockModule],
  controllers: [AppController],
  providers: [AppService, BlockChain],
})
export class AppModule {}
