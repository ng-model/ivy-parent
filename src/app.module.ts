import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsService } from './tweets/tweets.service';
import { TweetsController } from './tweets/tweets.controller';

@Module({
  imports: [],
  controllers: [AppController, TweetsController],
  providers: [AppService, TweetsService],
})
export class AppModule {}
