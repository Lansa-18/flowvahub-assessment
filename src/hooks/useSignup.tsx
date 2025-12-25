import { signupApi } from "@/lib/utils/apiAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success("Account successfully created, you can now login.");
      navigate("/login", { replace: true });
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to create account");
      console.error("Signup error:", error);
    },
  });

  return { signUp, isPending };
}
