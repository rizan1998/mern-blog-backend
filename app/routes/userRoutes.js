import express from "express";
const router = express.Router();
import { loginUser, registerUser, updateProfilePicture, updateProfile, userProfile } from "../controllers/userController";
import { authGuard } from "../middleware/authMIddleware";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authGuard, userProfile);
router.put("/updateProfile", authGuard, updateProfile);
router.put("/updateProfilePicture", authGuard, updateProfilePicture);

export default router;
