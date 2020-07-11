"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TweetsService = void 0;
const common_1 = require("@nestjs/common");
let TweetsService = (() => {
    let TweetsService = class TweetsService {
        constructor() {
            this.tweets = [{
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
        }
        getTweet() {
            return this.tweets;
        }
        createTweet(data) {
            this.tweets = [...this.tweets, Object.assign({}, data)];
        }
    };
    TweetsService = __decorate([
        common_1.Injectable()
    ], TweetsService);
    return TweetsService;
})();
exports.TweetsService = TweetsService;
//# sourceMappingURL=tweets.service.js.map