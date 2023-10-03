import { z } from "zod";

const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

const signUpSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  contactNumber: z.string().min(11).max(11),
  streetName: z.string().min(5),
  barangay: z.string().min(5),
  city: z.string().min(3),
  email: z.string().email(),
  password: z
    .string()
    .min(6, "Password should be atleast 6 characters")
    .optional(),
});

const resetSchema = z.object({
  email: z.string().email(),
});

export { loginSchema, signUpSchema, resetSchema };
