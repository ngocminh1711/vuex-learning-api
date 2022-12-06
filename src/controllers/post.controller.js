import { request } from 'express';
import Post from '../models/post.schema/post.schema.js'


class PostController {

    async createPost(req, res) {
        try {
           let data = req.body;
           console.log(data)
           let post = new Post(data)
           await post.save();

           return res.status(200).json({
            status: "successfully",
            data : post
        });
        }
        catch (err) {
            res.json({
                status: "error",
                message: "Create new post error",
            });
        }
    }
    async getAllPost(req, res, next) {
        try {
            let postData = await Post.find()

            return res.status(200).json({
                status: "Get data successfully",
                data: postData
            })
        }
        catch (err) {
                res.json({
                    status: "error",
                    message: "Get data error"
                })
        }
    }
    async deletePost(req, res) {
        try {
        let id = req.params.id;
        await Post.findByIdAndDelete(id);
        return res.status(200).json({
            status: "delete successfully"
        })
       }
        catch(err) {
            return res.status(404).json(err.message)
        }
    }
    async editPost(req, res, next) {
        try {
            
            let id = req.params.id;
            let data = req.body.name;
             await Post.findByIdAndUpdate(id,{name: data})
            let editedPost = await Post.findById(id)
            return res.status(200).json({
                data: editedPost,
                status: 'Update post successfully'
            })
        }
        catch (err) {
            return res.status(400).json({
                status: "Update Error"
            })
        }
    }

}


export default PostController;