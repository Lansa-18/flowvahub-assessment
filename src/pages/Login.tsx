import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useLogin } from "@/hooks/useLogin";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password cannot exceed 100 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { login, isPending } = useLogin();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log("Form data:", data);

    // Handle login logic here
    login(
      { email: data.email, password: data.password },
      { onSettled: () => form.reset() },
    );
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic
    console.log("Google sign in");
  };

  return (
    <section className="to-purple-text flex min-h-[100dvh] w-full items-center justify-center bg-gradient-to-br from-secondary-purple px-3 py-5">
      <article className="w-full max-w-[26rem] rounded-[10px] bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-purple-text text-2xl font-bold">
            Log in to flowva
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Log in to receive personalized recommendations
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="user@example.com"
                      {...field}
                      className="rounded-lg border-gray-300 px-4 py-3 focus:border-secondary-purple focus:ring-1 focus:ring-secondary-purple focus:ring-offset-1"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        {...field}
                        className="rounded-lg border-gray-300 px-4 py-3 pr-16 focus:border-secondary-purple focus:ring-1 focus:ring-secondary-purple focus:ring-offset-1"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-purple-text2 absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium"
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Forgot Password Link */}
            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-xs font-medium text-secondary-purple hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="hover:bg-purple-text w-full rounded-full bg-secondary-purple py-6 font-semibold text-white"
            >
              {isPending ? "Logging in..." : "Log in"}
            </Button>
          </form>
        </Form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-sm text-gray-500">or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Google Sign In */}
        <Button
          onClick={handleGoogleSignIn}
          variant="outline"
          className="w-full rounded-lg py-6"
        >
          <img src="/google-icon.svg" alt="google-icon" className="h-6 w-6" />
          Sign in with Google
        </Button>

        {/* Sign Up Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-secondary-purple hover:underline"
          >
            Sign up
          </Link>
        </p>
      </article>
    </section>
  );
}
