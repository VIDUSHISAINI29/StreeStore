import { Router } from "express";
import { authMiddleware } from "../../shared/middleware/auth.middleware.js";
import { validationMiddleware } from "../../shared/middleware/validation.middleware.js";
import {
   getMeController,
   updateMeController,
} from "./user.controller.js";
import { updateUserSchema } from "./user.validation.js";

const router = Router();

router.get("/me", authMiddleware, getMeController);
router.patch(
   "/me",
   authMiddleware,
   validationMiddleware(updateUserSchema),
   updateMeController,
);

export default router;
