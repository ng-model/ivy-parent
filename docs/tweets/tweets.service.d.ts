export declare class TweetsService {
    tweets: {
        id: number;
        first_name: string;
        last_name: string;
        email: string;
        gender: string;
        capital: number;
        investing: string;
    }[];
    getTweet(): {
        id: number;
        first_name: string;
        last_name: string;
        email: string;
        gender: string;
        capital: number;
        investing: string;
    }[];
    createTweet(data: any): void;
}
