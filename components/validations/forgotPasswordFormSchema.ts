import * as z from "zod";

export const forgotPasswordFormSchema = z.object({
  email: z
    .string({
      required_error: "Email is required!",
    })
    .email(),
});
