"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { forgotPasswordFormSchema } from "@/validations/forgotPasswordFormSchema";

export function ForgotPasswordForm() {
  type ForgotPasswordFormValues = z.infer<typeof forgotPasswordFormSchema>;


  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordFormSchema),
  });

  function onSubmit(data: ForgotPasswordFormValues) {
    console.log({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    router.push('/changePassword')
  }

  const router = useRouter();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <Card >
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl uppercase text-center">FORGOT YOUR PASSWORD?

</CardTitle>
            <CardDescription>
            Please enter your email address and we will send you a link to reset your password right away!            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          </CardContent>
          <CardFooter>
            <Button
              className="w-full uppercase"
            >
              Reset My Password
            </Button>
     
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
