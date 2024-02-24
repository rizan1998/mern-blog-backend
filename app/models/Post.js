import { Schema, model } from "mongoose";
import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    caption: { type: String, required: true },
    slug: { type: String, required: true },
    body: { type: String, required: true },
    photo: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    tags: { type: [String], required: false },
    categories: { type: Schema.Types.ObjectId, ref: "PostCategories" },
  },
  { timestamps: true }
);

PostSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "postId",
});

const User = model("Post", PostSchema);
export default User;
