import express from "express";
const router = express.Router();
import { createPost, updatePost, deletePost } from "../controllers/postController";
import { adminGuard, authGuard } from "../middleware/authMIddleware";

router.post("/", authGuard, adminGuard, createPost);
router.route("/:slug").put(authGuard, adminGuard, updatePost).delete(authGuard, adminGuard, deletePost);

export default router;
