import { Request, Response } from "express";
import { uploadToR2 } from "../storage/storage.service.js";

/*
   uploadLogoController
   Accepts a single image file, uploads to R2 under logos/{userId}/{uuid}.{ext}
   Returns the public URL.
*/
export const uploadLogoController = async (req: Request, res: Response) => {
   try {
      const file = req.file;

      if (!file) {
         return res.status(400).json({ message: "No file provided" });
      }

      const userId = req.user!.id;
      const ext = file.originalname.split(".").pop();
      const key = `logos/${userId}/${crypto.randomUUID()}.${ext}`;

      const url = await uploadToR2(file.buffer, key, file.mimetype);

      res.json({ url });
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Logo upload failed" });
   }
};

/*
   uploadScreenshotsController
   Accepts multiple image files, uploads each to R2 under
   screenshots/{userId}/{uuid}.{ext}
   Returns array of public URLs in the same order as the input files.
*/
export const uploadScreenshotsController = async (
   req: Request,
   res: Response,
) => {
   try {
      const files = req.files as Express.Multer.File[];

      if (!files?.length) {
         return res.status(400).json({ message: "No files provided" });
      }

      const userId = req.user!.id;

      const urls = await Promise.all(
         files.map(async (file) => {
            const ext = file.originalname.split(".").pop();
            const key = `screenshots/${userId}/${crypto.randomUUID()}.${ext}`;
            return uploadToR2(file.buffer, key, file.mimetype);
         }),
      );

      res.json({ urls });
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Screenshots upload failed" });
   }
};

export const uploadAvatarController = async (req: Request, res: Response) => {
   try {
      const file = req.file;
      if (!file) return res.status(400).json({ message: "No file provided" });

      const userId = req.user!.id;
      const ext = file.originalname.split(".").pop();
      const key = `avatars/${userId}/${crypto.randomUUID()}.${ext}`;

      const url = await uploadToR2(file.buffer, key, file.mimetype);

      res.json({ url });
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Avatar upload failed" });
   }
};
