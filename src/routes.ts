import express from 'express';
import UserController from './controllers/UserController';

const router = express.Router();

router.post('/users/create', UserController.create);

router.get('/users/list', UserController.findAll);

router.get('users/:userID', UserController.findOne);

router.put('users/:userID/update', UserController.update);

router.delete('users/:userID/delete', UserController.destroy);

export { router };
