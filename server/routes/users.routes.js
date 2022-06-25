import {Router} from 'express';
import {getUsers, createUser } from '../controller/user.controllers.js';


const router = Router();

router.get('/users', getUsers);
router.post('/users', createUser);


export default router