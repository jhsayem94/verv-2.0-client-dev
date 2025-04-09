/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/AxiosInstance";

export const createPaymentIntent = async (amount: number) => {
  console.log({ amount });
  try {
    const { data } = await axiosInstance.post(
      "/payments/stripe-payment-intent",
      {
        amount,
      }
    );
    console.log("payment intent secret", data.data.client_secret);
    return data.data.client_secret;
  } catch (error: any) {
    console.error("Error creating payment intent:", error.message);
    throw new Error(error.message);
  }
};
