import { Router } from 'express';

import authMiddleware from '@middlewares/authMiddleware';

import UserController from '@controllers/UserController';
import AuthController from '@controllers/AuthController';


const router = Router();

router.post('/usuarios', UserController.store);
router.post('/login', AuthController.authenticate);
router.get('/usuarios', authMiddleware, UserController.index);

export default router;