import express from "express";
const router = express.Router();
import {} from "../controllers/commentControllers";
import { adminGuard, authGuard } from "../middleware/authMIddleware";

router.post("/", authGuard, adminGuard, createPost);

export default router;
