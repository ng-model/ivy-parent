import { Injectable } from '@nestjs/common';

@Injectable()
export class TweetsService {
    tweets = [{
        "id": 1,
        "first_name": "Brandon",
        "last_name": "Soame",
        "email": "bsoame0@ted.com",
        "gender": "Male",
        "stock": "616"
      }, {
        "id": 2,
        "first_name": "Rozanne",
        "last_name": "Woollett",
        "email": "rwoollett1@hp.com",
        "gender": "Female",
        "stock": "7"
      }, {
        "id": 3,
        "first_name": "Heall",
        "last_name": "Ruppertz",
        "email": "hruppertz2@google.nl",
        "gender": "Male",
        "stock": "53"
      }, {
        "id": 4,
        "first_name": "Hermy",
        "last_name": "Palliser",
        "email": "hpalliser3@tmall.com",
        "gender": "Male",
        "stock": "9515"
      }, {
        "id": 5,
        "first_name": "Gamaliel",
        "last_name": "Sant",
        "email": "gsant4@census.gov",
        "gender": "Male",
        "stock": "0"
      }];

    getTweet() {
        return this.tweets;
    }

    createTweet(data) {
        this.tweets = [...this.tweets, { ...data }];
    }
}
