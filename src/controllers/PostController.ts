import { Request, Response } from 'express';
import { PostModel } from '../Models/PostModel';

class PostController {
  async create(req: Request, res: Response) {
    const { title, body, author } = req.body;
    if (title && body) {
      const post = await PostModel.create({
        title,
        body,
        author,
      });
      return res.status(201).json({
        post,
        message: 'Post criado com sucesso.',
      });
    }
  }

  async update(req: Request, res: Response) {
    const { postId } = req.params;
    const { title, body, author } = req.body;
    const post = await PostModel.findOne({
      where: { id: postId },
    });
    if (post) {
      await PostModel.update(
        {
          title,
          body,
          author,
        },
        {
          where: {
            id: postId,
          },
        }
      );
      return res.status(200).json({
        post,
        message: 'Post atualizado com sucesso.',
      });
    } else {
      return res.status(204).json({
        message: 'Post não encontrado',
      });
    }
  }

  async findOne(req: Request, res: Response) {
    const { postId } = req.params;
    const post = await PostModel.findOne({
      where: { id: postId },
    });
    if (post) {
      return res.status(200).json(post);
    } else {
      return res.status(204).json({
        message: 'Post não encontrado',
      });
    }
  }

  async findAll(req: Request, res: Response) {
    const posts = await PostModel.findAll();
    const totalPosts = await PostModel.count();
    if (posts.length > 0) {
      return res.status(200).json({
        posts,
        totalPosts,
      });
    }
  }

  async destroy(req: Request, res: Response) {
    const { postId } = req.params;
    const post = await PostModel.findOne({ where: { id: postId } });
    if (post) {
      await PostModel.destroy({ where: { id: postId } });
      return res.status(200).send();
    } else {
      return res.status(204).json({
        message: 'Post não encontrado.',
      });
    }
  }
}

export default new PostController();
