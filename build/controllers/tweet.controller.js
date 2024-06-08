"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTweetController = exports.updatedTweetController = exports.createTweetController = exports.getTweetController = void 0;
const tweet_repository_1 = require("../repositories/tweet.repository");
const user_repository_1 = require("../repositories/user.repository");
const getTweetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tweetId = req.query.tweetId;
    try {
        const tweet = yield (0, tweet_repository_1.getTweetRepo)(tweetId);
        if (tweet) {
            res.status(200).json({ data: tweet });
        }
        else {
            res.status(500).json({ error: "tweet not found" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});
exports.getTweetController = getTweetController;
const createTweetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tweet = req.body;
    try {
        const success = yield (0, tweet_repository_1.createTweetRepo)(tweet);
        if (success) {
            const userUpdateSuccess = yield (0, user_repository_1.updateUserWithTweet)(tweet.adminId, tweet.tweetId);
            if (userUpdateSuccess) {
                res.status(200).json({ "data": tweet });
            }
            else {
                res.status(500).json({ error: "User not Updated" });
            }
        }
        else {
            res.status(500).json({ error: "tweet not Created" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});
exports.createTweetController = createTweetController;
const updatedTweetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedtweet = req.body;
    try {
        const success = yield (0, tweet_repository_1.updateTweetRepo)(updatedtweet, updatedtweet.tweetId);
        if (success) {
            res.status(200).json({ "data": "tweet Updated" });
        }
        else {
            res.status(500).json({ error: "tweet not Updated" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});
exports.updatedTweetController = updatedTweetController;
const deleteTweetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tweetId = req.query.tweetId;
    try {
        const success = yield (0, tweet_repository_1.deleteTweetRepo)(tweetId);
        if (success) {
            res.status(200).json({ "data": "tweet deleted" });
        }
        else {
            res.status(500).json({ error: "tweet not deleted" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});
exports.deleteTweetController = deleteTweetController;
