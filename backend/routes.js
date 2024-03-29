import express from 'express';

const RoutesConstants = {
  PRIVATE: {
    SERVER_PORT: '3001',
    MONGODB: process.env.MONGODB_URL,
  },
  PUBLIC: {
    ROOT: '/',
    Tweets: '/tweets',
    TweetID: '/tweets/:id',
    Likes: '/likes/:id',
  }
};

const BaseRoutes = express.Router();

BaseRoutes.get(RoutesConstants.PUBLIC.ROOT, (req, res) => {
  return res.send('Hello World');
});

export { RoutesConstants, BaseRoutes };
