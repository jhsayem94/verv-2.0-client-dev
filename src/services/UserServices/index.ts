/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { AxiosError } from "axios";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues): Promise<any> => {
  console.log(userData);
  try {
    const { data } = await axiosInstance.post("/user/register-user", userData);

    revalidateTag("users");

    return data;
  } catch (error) {
    const axiosError = error as AxiosError;

    console.log(axiosError.response?.data || axiosError.message);

    throw new Error("Failed to create user");
  }
};
