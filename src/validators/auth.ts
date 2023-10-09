import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, "Password should be atleast 6 characters")
    .refine(
      (value) => {
        // Use a regular expression to check if the password is alphanumeric
        // The regular expression /[a-zA-Z]/ checks for at least one letter
        // The regular expression /[0-9]/ checks for at least one digit
        return /[a-zA-Z]/.test(value) && /[0-9]/.test(value);
      },
      {
        message:
          "Password must be alphanumeric (contain both letters and numbers)",
      }
    ),
});

const signUpSchema = z.object({
  firstName: z.string().min(2, "First Name must contain at least 2 characters"),
  lastName: z.string().min(2, "Last Name must contain at least 2 characters"),
  contactNo: z.string().min(11, "First Name must be 11 digits").max(11),
  streetName: z
    .string()
    .min(5, "Street Name must contain at least 5 characters"),
  barangay: z.string().min(5, "Barangay must contain at least 5 characters"),
  city: z.string().min(3, "City must contain at least 3 characters"),
  email: z.string().email(),
  password: z
    .string()
    .min(6, "Password should be atleast 6 characters")
    .refine(
      (value) => {
        // Use a regular expression to check if the password is alphanumeric
        // The regular expression /[a-zA-Z]/ checks for at least one letter
        // The regular expression /[0-9]/ checks for at least one digit
        return /[a-zA-Z]/.test(value) && /[0-9]/.test(value);
      },
      {
        message:
          "Password must be alphanumeric (contain both letters and numbers)",
      }
    ),
});

const resetSchema = z.object({
  email: z.string().email(),
});

export { loginSchema, signUpSchema, resetSchema };
