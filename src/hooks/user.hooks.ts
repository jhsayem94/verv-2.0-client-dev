/* eslint-disable @typescript-eslint/no-explicit-any */

import { createUserProfile, registerUser } from "@/services/UserServices";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useRegisterUser = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["REGISTER_USER"],
    mutationFn: async (userData) => await registerUser(userData),
    onSuccess: () => {
      toast.success("User registration successful.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useCreateUserProfile = () => {
  console.log("From User Hook")
  return useMutation<any, Error, FormData>({    
    mutationKey: ["CREATE_PROFILE"],
    mutationFn: async (userData) => await createUserProfile(userData),
    onSuccess: () => {
      toast.success("User profile is created successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
