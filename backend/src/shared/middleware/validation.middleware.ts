import { Request, Response, NextFunction } from "express";
import { AnyObjectSchema } from "yup";

export const validationMiddleware =
   (schema: AnyObjectSchema) =>
   async (req: Request, res: Response, next: NextFunction) => {
      try {
         await schema.validate(req.body, { abortEarly: false });
         next();
      } catch (err: any) {
         return res.status(400).json({
            error: "Validation failed",
            details: err.errors,
         });
      }
   };
