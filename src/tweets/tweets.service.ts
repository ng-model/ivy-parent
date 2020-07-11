import { Injectable } from '@nestjs/common';

@Injectable()
export class TweetsService {
  tweets = [{
    "id": 1,
    "first_name": "Cherilynn",
    "last_name": "Issacoff",
    "email": "cissacoff0@home.pl",
    "gender": "Female",
    "capital": 480306,
    "investing": "Electric Utilities: Central"
  }, {
    "id": 2,
    "first_name": "Yurik",
    "last_name": "Baltrushaitis",
    "email": "ybaltrushaitis1@bigcartel.com",
    "gender": "Male",
    "capital": 162875,
    "investing": "Natural Gas Distribution"
  }, {
    "id": 3,
    "first_name": "Andeee",
    "last_name": "Gabbett",
    "email": "agabbett2@dyndns.org",
    "gender": "Female",
    "capital": 382242,
    "investing": "Computer Software: Prepackaged Software"
  }, {
    "id": 4,
    "first_name": "Dorise",
    "last_name": "Andreou",
    "email": "dandreou3@msn.com",
    "gender": "Female",
    "capital": 430635,
    "investing": "Trucking Freight/Courier Services"
  }, {
    "id": 5,
    "first_name": "Michele",
    "last_name": "Chaunce",
    "email": "mchaunce4@rediff.com",
    "gender": "Female",
    "capital": 547491,
    "investing": "Telecommunications Equipment"
  }];

    getTweet() {
        return this.tweets;
    }

    createTweet(data) {
        this.tweets = [...this.tweets, { ...data }];
    }
}
