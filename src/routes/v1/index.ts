import express, { Router } from 'express';
import poll from './poll';
import user from './user';

const router: Router = express.Router();

router.use('/poll', poll);
router.use('/user', user);

export default router;
