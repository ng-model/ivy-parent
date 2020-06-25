import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { TweetsService } from './tweets.service';

interface Tweet {
  id: string,
  first_name: string,
  last_name: string,
  email: string,
  gender: string,
  stock: string
}

@Controller('tweets')
export class TweetsController {
    constructor(private readonly tweetService: TweetsService){}

    @Get()
    getTweets() {
      return this.tweetService.getTweet();
    }

    @Get(':id')
    getTweet(@Param() Params) {
      return this.tweetService.getTweet().filter(p => p.id == Params.id);
    }

    @Post()
    createTweet(@Body() tweet: Tweet) {
     this.tweetService.createTweet(tweet);
    }


}
