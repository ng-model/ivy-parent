import { TweetsService } from './tweets.service';
interface Tweet {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    stock: string;
}
export declare class TweetsController {
    private readonly tweetService;
    constructor(tweetService: TweetsService);
    getTweets(): {
        id: number;
        first_name: string;
        last_name: string;
        email: string;
        gender: string;
        capital: number;
        investing: string;
    }[];
    getTweet(Params: any): {
        id: number;
        first_name: string;
        last_name: string;
        email: string;
        gender: string;
        capital: number;
        investing: string;
    }[];
    createTweet(tweet: Tweet): void;
}
export {};
