// const firebase = require("firebase-admin");
import { Request, Response, NextFunction } from 'express';
import admin from './firebase';

declare module 'express-serve-static-core' {
  interface Request {
    currentUser: admin.auth.DecodedIdToken;
  }
}
const auth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const headerToken = req.headers?.authorization;
  if (headerToken?.startsWith('Bearer ')) {
    const idToken = headerToken.split('Bearer ')[1];

    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      req.currentUser = decodedToken;
      next();
    } catch (err) {
      res.status(401).json({ msg: err.message });
    }
  } else {
    res.status(401).json({ msg: 'Token does not exist ' });
  }
};

export default auth;
