// src/validations/user.validation.ts
import * as yup from "yup";

export const updateUserSchema = yup.object({
   name: yup.string().max(100).nullable(),
   bio: yup.string().max(500).nullable(),
   avatar: yup.string().url().nullable(),
   website: yup.string().url().nullable(),
   github: yup.string().max(100).nullable(),
   x: yup.string().max(100).nullable(),
   threads: yup.string().max(100).nullable(),
});
