/* eslint-disable @typescript-eslint/no-explicit-any */
import { createUser } from "@/services/UserServices";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateUser = () => {
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_USER"],
    mutationFn: async (userData) => await createUser(userData),
    onSuccess: () => {
      toast.success("User registration successful.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
