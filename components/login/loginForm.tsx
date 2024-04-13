"use client";

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
import { loginFormSchema } from "@/components/validations/LoginFormSchema";
import Link from "next/link";
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

export function LoginForm() {
  type LoginFormValues = z.infer<typeof loginFormSchema>;

  // This can come from your database or API.
  // const defaultValues: Partial<LoginFormValues> = {
  //   // name: "Your name",
  //   // dob: new Date("2023-01-23"),
  // };

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
  });

  function onSubmit(data: LoginFormValues) {
    console.log({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    router.push('/')
  }

  const router = useRouter();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card >
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl uppercase text-center">Sign In</CardTitle>
            <CardDescription>
              Enter your email and password below to signin your account
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button
              // onClick={() => router.push("/")}
              className="w-full uppercase"
            >
              Login
            </Button>
            <Link
              href="/forgotPassword"
              className=" py-1 self-end text-sm font-light text-primary"
            >
              Forgot Password?
            </Link>
          </CardFooter>
        </Card>
      </form>
      <p  className="p-8 fixed bottom-0 text-center text-sm text-muted-foreground">
        By clicking continue, you agree to our{" "}
        <Link
          href="/terms"
          className="underline underline-offset-4 hover:text-primary"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="underline underline-offset-4 hover:text-primary"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </Form>
  );
}
