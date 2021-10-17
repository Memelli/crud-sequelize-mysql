import express from 'express';
import PostController from '../Controllers/PostController';

const router = express.Router();

router.post('/post/create', PostController.create);
router.get('/post/list', PostController.findAll);
router.get('/post/list/:postId', PostController.findOne);
router.put('/post/update/:postId', PostController.update);
router.delete('/post/delete/:postId', PostController.destroy);

export { router };
