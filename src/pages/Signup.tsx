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
import { useSignup } from "@/hooks/useSignup";

const signUpSchema = z
  .object({
    email: z.string().email("Please enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password cannot exceed 100 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type SignUpFormValues = z.infer<typeof signUpSchema>;

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { signUp, isPending } = useSignup();

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: SignUpFormValues) => {
    console.log("Form data:", data);

    // Handle signup logic here
    const email = data.email;
    const password = data.password;
    signUp({ email, password }, { onSettled: () => form.reset() });
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
            Create Your Account
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Sign up to manage your tools
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
                      placeholder="your@email.com"
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

            {/* Confirm Password Field */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        {...field}
                        className="rounded-lg border-gray-300 px-4 py-3 pr-16 focus:border-secondary-purple focus:ring-1 focus:ring-secondary-purple focus:ring-offset-1"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="text-purple-text2 absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium"
                      >
                        {showConfirmPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="hover:bg-purple-text w-full rounded-full bg-secondary-purple py-6 font-semibold text-white"
            >
              {isPending ? "Signing up..." : "Sign up Account"}
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

        {/* Log In Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account{" "}
          <Link
            to="/login"
            className="font-semibold text-purple-600 hover:text-purple-700"
          >
            Log In
          </Link>
        </p>
      </article>
    </section>
  );
}
