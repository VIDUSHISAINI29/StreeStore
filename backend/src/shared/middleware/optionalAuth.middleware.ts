import { Request, Response, NextFunction } from "express";
import { auth } from "../../auth.js";

/*
   optionalAuthMiddleware
   Non-blocking auth — attaches req.user if a valid session exists,
   continues without error if not. Used on public routes that need
   to know who the user is when logged in (e.g. boostedByUser on
   tool page) but should not block unauthenticated visitors.
*/
export const optionalAuthMiddleware = async (
   req: Request,
   _res: Response,
   next: NextFunction,
) => {
   try {
      const session = await auth.api.getSession({
         headers: new Headers(req.headers as Record<string, string>),
      });

      if (session?.user) {
         req.user = {
            id: session.user.id,
            email: session.user.email,
         };
      }
   } catch {
      // Session validation failed — treat as unauthenticated, don't block
   }

   next();
};
