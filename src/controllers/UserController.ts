import { Request, Response } from 'express';
import { UserModel } from '../Models/UserModel';
import { hash } from 'bcrypt';

class UserController {
  async findAll(req: Request, res: Response) {
    const users = await UserModel.findAll();
    if (users.length > 0) {
      return res.status(200).json(users);
    } else {
      return res.status(204).json({
        message: 'Nenhum usuário encontrado.',
      });
    }
  }

  async findOne(req: Request, res: Response) {
    const { userId } = req.params;
    const user = await UserModel.findOne({ where: { id: userId } });
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(204).json({
        message: 'Usuário não encontrado',
      });
    }
  }

  async create(req: Request, res: Response) {
    const { email, password, nome, isAdmin } = req.body;
    const userExists = await UserModel.findOne({ where: { email: email } });
    const passwordHash = await hash(password, 8);
    if (!userExists) {
      const user = await UserModel.create({
        email,
        password: passwordHash,
        nome,
        isAdmin,
      });
      return res.status(201).json(user);
    }
    return res.status(400).json({
      message: 'Já existe um usuário com esse email.',
    });
  }

  async update(req: Request, res: Response) {
    const { email, nome, password, isAdmin } = req.body;
    const { userId } = req.params;
    const passwordHash = await hash(password, 8);
    const user = await UserModel.findOne({ where: { id: userId } });

    if (user) {
      await UserModel.update(
        {
          email,
          nome,
          password: passwordHash,
          isAdmin,
        },
        { where: { id: userId } }
      );
      return res.status(204).send();
    } else {
      return res.status(404).json({
        message: 'Usuário não encontrado.',
      });
    }
  }

  async destroy(req: Request, res: Response) {
    const { userId } = req.params;
    const user = await UserModel.findOne({ where: { id: userId } });
    if (user) {
      await UserModel.destroy({ where: { id: userId } });
      return res.status(200).json({
        message: 'Usuário deletado com sucesso',
      });
    } else {
      return res.status(204).json({
        message: 'Usuário não encontrado',
      });
    }
  }
}

export default new UserController();
