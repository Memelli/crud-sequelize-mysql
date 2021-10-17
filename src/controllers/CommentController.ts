import { Request, Response } from 'express';
import { CommentModel } from '../Models/CommentModel';

class CommentController {
  async create(req: Request, res: Response) {
    const { author, postId, body, likes, unlike } = req.body;
    const comment = await CommentModel.create({
      author,
      postId,
      body,
      likes,
      unlike,
    });
    return res.status(200).json({
      comment,
      message: 'Comentário adicionado com sucesso.',
    });
  }

  async update(req: Request, res: Response) {}

  async findAll(req: Request, res: Response) {
    const { postId } = req.params;
    const comments = await CommentModel.findAll({ where: { postId: postId } });
    if (comments.length > 0) {
      return res.status(200).json(comments);
    } else {
      return res.status(204).send();
    }
  }

  async findOne(req: Request, res: Response) {
    const { commentId } = req.params;
    const comment = await CommentModel.findOne({ where: { id: commentId } });
    if (comment) {
      return res.status(200).json(comment);
    } else {
      return res.status(204).send();
    }
  }

  async destroy(req: Request, res: Response) {
    const { commentId } = req.params;
    const comment = await CommentModel.findOne({ where: { id: commentId } });
    if (comment) {
      await CommentModel.destroy({ where: { id: commentId } });
      return res.status(200).json({
        message: 'Comentário excluído com sucesso.',
      });
    } else {
      return res.status(204).send();
    }
  }
}

export default new CommentController();
