import { Injectable } from '@nestjs/common';

@Injectable()
export class TweetsService {
    tweets = [{
        id: 1,
        name: 'A SPA app'
    },
    {
        id: 2,
        name: 'A Nest API'
    }];

    getTweet() {
        return this.tweets;
    }

    createTweet(data) {
        this.tweets = [...this.tweets, { ...data }];
    }
}
