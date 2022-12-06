import express from 'express';
import multer from 'multer';
import PostController from '../controllers/post.controller';

const upload = multer();
const postRouter = express.Router();
const postController = new PostController();

postRouter.post('/create',upload.none(), (req, res) => {
    postController.createPost(req, res).catch((err) => { res.status(500).json('Server error') });
} )
postRouter.get('/', (req, res) => {
    postController.getAllPost(req, res).catch((err) => { res.status(500).json('Server error') });
})
postRouter.delete('/:id', (req, res) => {
    postController.deletePost(req, res).catch((err) => { res.status(500).json('Server error') });
})
postRouter.patch('/:id', (req, res) => {
    postController.editPost(req, res).catch((err) => { res.status(500).json('Server error') });
})



export default postRouter;





