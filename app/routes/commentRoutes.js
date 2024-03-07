import express from "express";
const router = express.Router();
import { createComment } from "../controllers/commentController";
import { authGuard } from "../middleware/authMIddleware";

router.post("/", authGuard, createComment);

export default router;
