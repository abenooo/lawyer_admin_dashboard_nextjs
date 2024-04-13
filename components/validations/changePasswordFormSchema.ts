import * as z from "zod";

export const changePasswordFormSchema = z
  .object({
    newPassword: z
      .string({
        required_error: "Password is required!",
      })
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string({
        required_error: "Confirm Password is required!",
      })
      .min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.confirmPassword === data.newPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
