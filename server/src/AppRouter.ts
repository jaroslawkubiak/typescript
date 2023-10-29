import express from 'express';

// creating a singleton class - upewniamy się że mamy zdefiniowany tylko jeden router w całej aplikacji
export class AppRouter {
  private static instance: express.Router;

  static getInstance(): express.Router {
    if (!AppRouter.instance) {
      AppRouter.instance = express.Router();
    }

    return AppRouter.instance;
  }
}
