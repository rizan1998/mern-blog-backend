import Post from "../models/Post";

const createComment = async (req, res, next) => {
  try {
    const { desc, slug, parent, replyOnUser } = req.body;

    const post = await Post.findOne({ slug: slug });
  } catch (error) {
    next(error);
  }
};
