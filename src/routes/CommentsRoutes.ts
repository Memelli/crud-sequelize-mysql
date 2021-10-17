import express from 'express';
import CommentController from '../Controllers/CommentController';

const router = express.Router();

router.post('/comment/create', CommentController.create);
router.get('/comment/list/:postId', CommentController.findAll);
router.get('/comment/:commentId', CommentController.findAll);
router.get('/comment/like/:commentId', CommentController.findAll);

export { router };
