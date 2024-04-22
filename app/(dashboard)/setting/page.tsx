"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, ControllerRenderProps } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const profileFormSchema = z.object({
  Id: z.string().min(1, { message: "User ID is required" }),
  currentPassword: z.string().min(1, { message: "Current password is required" }),
  newPassword: z.string().min(6, { message: "New password must be at least 6 characters" }),
  confirmNewPassword: z.string().min(1, { message: "Confirm new password" }),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const defaultValues: Partial<ProfileFormValues> = {
  Id: "662119c8e2a572b51e9272a9",
};

export default function Page() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(data: ProfileFormValues) {
    const { currentPassword, newPassword, confirmNewPassword, Id } = data;

    if (newPassword !== confirmNewPassword) {
      toast.error("New password and confirm password do not match");
      return;
    }

    const authToken = sessionStorage.getItem('authToken');
    if (!authToken) {
      toast.error("No authentication token found. Please log in again.");
      return;
    }

    try {
      const response = await fetch("https://vgf59b03-5001.uks1.devtunnels.ms/api/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authToken}`
        },
        body: JSON.stringify({
          Id,
          currentPassword,
          newPassword,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        toast.success("Your password has been updated successfully.");
      } else {
        toast.error(responseData.message || "An error occurred while updating the password.");
      }
    } catch (error) {
      console.error("Error updating password:", error);
      toast.error("An error occurred while updating the password.");
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="currentPassword"
            render={({
              field,
            }: {
              field: ControllerRenderProps<ProfileFormValues, "currentPassword">;
            }) => (
              <FormItem>
                <FormLabel>Current Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="newPassword"
            render={({
              field,
            }: {
              field: ControllerRenderProps<ProfileFormValues, "newPassword">;
            }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmNewPassword"
            render={({
              field,
            }: {
              field: ControllerRenderProps<
                ProfileFormValues,
                "confirmNewPassword"
              >;
            }) => (
              <FormItem>
                <FormLabel>Confirm New Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Update Password</Button>
        </form>
      </Form>
      <ToastContainer />
    </>
  );
}