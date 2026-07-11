import { Request, Response, NextFunction } from "express";
import { auth } from "../../auth.js";

/*
   authMiddleware
   Validates the session using Better Auth's built-in session API.
   Better Auth uses HTTP-only cookies for sessions by default.
   The fromNodeHeaders helper converts Express headers to the Web API
   Headers format that Better Auth expects internally.
*/
export const authMiddleware = async (
   req: Request,
   res: Response,
   next: NextFunction,
) => {
   try {
      const session = await auth.api.getSession({
         headers: new Headers(req.headers as Record<string, string>),
      });

      if (!session?.user) {
         return res.status(401).json({ message: "Unauthorized" });
      }

      req.user = {
         id: session.user.id,
         email: session.user.email,
      };

      next();
   } catch (error) {
      console.error(error);
      return res.status(401).json({ message: "Authentication failed" });
   }
};
