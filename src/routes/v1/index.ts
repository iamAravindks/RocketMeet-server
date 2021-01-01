import express, { Router } from 'express';
import poll from './poll';
import user from './user';
import signup from './access/signup';
import login from './access/login';
import logout from './access/logout';

const router: Router = express.Router();

router.use('/poll', poll);
router.use('/user', user);
router.use('/login', login);
router.use('/logout', logout);
router.use('/signup', signup);

export default router;