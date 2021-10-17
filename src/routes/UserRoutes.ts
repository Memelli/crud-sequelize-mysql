import express from 'express';
import UserController from '../Controllers/UserController';

const router = express.Router();

router.post('/users/create', UserController.create);
router.get('/users/list', UserController.findAll);
router.get('/users/list/:userId', UserController.findOne);
router.put('/users/update/:userId', UserController.update);
router.delete('/users/delete/:userId', UserController.destroy);

export { router };
