/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { AxiosError } from "axios";
import { revalidateTag } from "next/cache";

export const createUser = async (formData: FormData): Promise<any> => {
  console.log(formData);
  try {
    const { data } = await axiosInstance.post("/users/create-user", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    revalidateTag("users");

    return data;
  } catch (error) {
    const axiosError = error as AxiosError;

    console.log(axiosError.response?.data || axiosError.message);

    throw new Error("Failed to create user");
  }
};
