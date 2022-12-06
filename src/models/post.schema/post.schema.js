import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
  name: {
    type: String,
  },
});

const Post = mongoose.model("Post", postSchema);
export default Post;