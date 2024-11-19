import Router from "express";
import { upload } from "../middlewares/molter.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  registerUser,
  loginUser,
  logoutUser,
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
  updateUserAvatar,
} from "../controllers/user.controller.js";
// import { verify } from "jsonwebtoken";
const router = Router();

router
  .route("/register")
  .post(upload.fields([{ name: "avatar", maxCount: 1 }]), registerUser);

router.route("/login").post(loginUser),
  router.route("/logout").post(verifyJWT, logoutUser);
router.route("/change/password").patch(verifyJWT, changeCurrentPassword);
router.route("current-user").get(verifyJWT, getCurrentUser);
router.route("/update-userdetails").patch(verifyJWT, updateAccountDetails);
router.route("/change/avatarImage").patch(verifyJWT, updateUserAvatar);

export default router;
