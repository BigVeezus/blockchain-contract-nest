import { Module } from '@nestjs/common';
import { BlockClass } from './block.class';
import { BlockService } from './block.service';

@Module({
  imports: [],
  controllers: [BlockClass],
  providers: [BlockService],
})
export class AppModule {}
