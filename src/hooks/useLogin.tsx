import { loginApi } from "@/lib/utils/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isPending } = useMutation({
    mutationFn: loginApi,

    onSuccess: (user) => {
      toast.success("Login Successful.");
      queryClient.setQueryData(["user"], user.user);
      navigate("/rewards", { replace: true });
    },

    onError: (err) => {
      console.error("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isPending };
}
