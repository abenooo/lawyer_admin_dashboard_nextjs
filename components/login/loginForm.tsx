"use client"
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginFormSchema } from '@/components/validations/LoginFormSchema';
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription
} from "@/components/ui/card";
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
export function LoginForm() {
   var router = useRouter();
  const form = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  async function onSubmit(data: any) {
    try {
      const response = await fetch('https://vgf59b03-5001.uks1.devtunnels.ms/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const jsonData = await response.json();
      if (response.ok) {
        // Store the token in sessionStorage
        sessionStorage.setItem('authToken', jsonData.token);
        console.log('Success:', jsonData);
       router.push('/blog');
      } else {
        console.error('Login failed:', jsonData.message);
        alert(jsonData.message || 'Failed to log in');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during login. Please try again.');
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl uppercase text-center">Sign In</CardTitle>
            <CardDescription>Enter your email and password below to sign in to your account</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter your email" />
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
                    <Input {...field} type="password" placeholder="Enter your password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button type="submit" className="w-full uppercase">Login</Button>
            <Link href="/forgotPassword" className="py-1 self-end text-sm font-light text-primary">
              Forgot Password?
            </Link>
          </CardFooter>
        </Card>
      </form>
      <p className="p-8 fixed bottom-0 text-center text-sm text-muted-foreground">
        By clicking continue, you agree to our
        <Link href="/terms" className="underline underline-offset-4 hover:text-primary">Terms of Service</Link>
        and
        <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">Privacy Policy</Link>.
      </p>
    </Form>
  );
}
