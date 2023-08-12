import express from "express";
import usersSchemas from "../schemas/users-schemas.js";
import validateBody from "../decorators/validateBody.js";

import authController from "../controllers/auth-controller.js";
import authenticate from "../middlewares/authenticate.js";
import upload from "../middlewares/upload.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(usersSchemas.userRegisterSchema),
  authController.register
);
authRouter.post(
  "/login",
  validateBody(usersSchemas.userLoginSchema),
  authController.login
);

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  authController.avatarUpdate
);

authRouter.get("/current", authenticate, authController.getCurrent);

authRouter.post("/logout", authenticate, authController.logout);

authRouter.get("/verify/:verificationToken", authController.verify);

authRouter.post("/verify", validateBody(usersSchemas.userEmailSchema), authController.resendVerifyEmail)

export default authRouter;
