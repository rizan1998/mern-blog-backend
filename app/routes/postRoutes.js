import express from "express";
const router = express.Router();
import { createPost, updatePost } from "../controllers/postController";
import { adminGuard, authGuard } from "../middleware/authMIddleware";

router.post("/", authGuard, adminGuard, createPost);
router.put("/:slug", authGuard, adminGuard, updatePost);

export default router;
