import { Request, Response } from "express";
import { updateUser, getUserById } from "./user.service.js";

/*
GET /api/users/me
Returns the current user's profile from the users table.
*/
export const getMeController = async (req: Request, res: Response) => {
   try {
      const user = await getUserById(req.user!.id);
      if (!user) return res.status(404).json({ message: "User not found" });
      res.json(user);
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to fetch profile" });
   }
};

/*
PATCH /api/users/me
Updates editable profile fields — never touches email (owned by Better Auth).
*/
export const updateMeController = async (req: Request, res: Response) => {
   try {
      const updated = await updateUser(req.user!.id, req.body);
      res.json(updated);
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to update profile" });
   }
};
