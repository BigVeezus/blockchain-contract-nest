import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import BlockChain from './Block/block.class';

@Module({
  imports: [ConfigModule, ConfigModule.forRoot()],

  controllers: [AppController],
  providers: [AppService, BlockChain],
})
export class AppModule {}
