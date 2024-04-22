import * as z from "zod";

export const passwordUpdateSchema = z.object({
  currentPassword: z
    .string({
      required_error: "Current password is required!",
    })
    .min(5, "Current password must be at least 5 characters long."),
  newPassword: z
    .string({
      required_error: "New password is required!",
    })
    .min(8, "New password must be at least 8 characters long."),
  confirmPassword: z
    .string({
      required_error: "Confirming the new password is required!",
    })
});

// Adding custom refinement to check if newPassword and confirmPassword are the same
passwordUpdateSchema.refine(data => data.newPassword === data.confirmPassword, {
  message: "New passwords must match",
  path: ["confirmPassword"], // This targets the error specifically to the confirmPassword field
});
