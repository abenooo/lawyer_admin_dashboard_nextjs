"use client"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "@/components/validations/LoginFormSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export function LoginForm() {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(loginFormSchema),
  });
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data: any) {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://vgf59b03-5001.uks1.devtunnels.ms/api/user/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      const jsonData = await response.json();
      if (response.ok) {
        sessionStorage.setItem("authToken", jsonData.token);
        toast.success("Login successful!");
        router.push("/blog");
      } else {
        toast.error(jsonData.message || "Failed to log in");
      }
    } catch (error) {
      toast.error("An error occurred during login. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>
                Enter your email and password below to sign in to your account.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter your email" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Enter your password"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Processing..." : "Login"}
              </Button>
              <Link href="/forgotPassword">Forgot Password?</Link>
            </CardFooter>
          </Card>
        </form>
      </Form>
      <ToastContainer />
      <p className="p-8 fixed bottom-0 text-center text-sm text-muted-foreground">
        By clicking continue, you agree to our
        <Link
          href="/terms"
          className="underline underline-offset-4 hover:text-primary"
        >
          Terms of Service
        </Link>
        and
        <Link
          href="/privacy"
          className="underline underline-offset-4 hover:text-primary"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </>
  );
}
