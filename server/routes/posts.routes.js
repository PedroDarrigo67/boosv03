import {Router} from 'express';
import {getPosts, createPost, updatePost, deletePost, getPost, getPostTipo } from '../controller/posts.controllers.js';


const router = Router();

router.get('/posts', getPosts);
router.post('/posts', createPost);
router.put('/posts/:id',updatePost);
router.delete('/posts/:id', deletePost);
router.get('/posts/:id', getPost);
router.get('/posts/tipo/:id', getPostTipo);


export default router
