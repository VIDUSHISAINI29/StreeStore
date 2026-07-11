import { Router } from "express";
import multer from "multer";
import { authMiddleware } from "../../shared/middleware/auth.middleware.js";
import {
   uploadLogoController,
   uploadScreenshotsController,
   uploadAvatarController
} from "../upload/upload.controller.js";

/*
   Multer configured with memory storage — files are held in buffer,
   never written to disk on the server. Uploaded directly to R2.

   Limits:
   - Logo: 1 file, 2MB max
   - Screenshots: 5 files, 5MB each
   - Images only (jpeg, png, webp, gif)
*/

const imageFilter: multer.Options["fileFilter"] = (_req, file, cb) => {
   const allowed = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
      "image/svg+xml", // ← add this
   ];
   if (allowed.includes(file.mimetype)) {
      cb(null, true);
   } else {
      cb(new Error("Only image files are allowed"));
   }
};

const logoUpload = multer({
   storage: multer.memoryStorage(),
   limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
   fileFilter: imageFilter,
});

const screenshotsUpload = multer({
   storage: multer.memoryStorage(),
   limits: { fileSize: 5 * 1024 * 1024 }, // 5MB per file
   fileFilter: imageFilter,
});

const avatarUpload = multer({
   storage: multer.memoryStorage(),
   limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
   fileFilter: imageFilter,
});

const router = Router();

// POST /api/upload/logo — single logo image
router.post(
   "/logo",
   authMiddleware,
   (req, res, next) => {
      logoUpload.single("logo")(req, res, (err) => {
         if (err) return res.status(400).json({ message: err.message });
         next();
      });
   },
   uploadLogoController,
);

// POST /api/upload/screenshots — up to 5 screenshot images
router.post(
   "/screenshots",
   authMiddleware,
   (req, res, next) => {
      screenshotsUpload.array("screenshots", 5)(req, res, (err) => {
         if (err) return res.status(400).json({ message: err.message });
         next();
      });
   },
   uploadScreenshotsController,
);

// POST /api/upload/avatar — single avatar image
router.post(
   '/avatar',
   authMiddleware,
   (req, res, next) => {
      avatarUpload.single('avatar')(req, res, (err) => {
         if (err) return res.status(400).json({ message: err.message });
         next();
      });
   },
   uploadAvatarController,
);

export default router;
