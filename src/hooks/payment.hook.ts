/* eslint-disable @typescript-eslint/no-explicit-any */
import { createPaymentIntent } from "@/services/PaymentServices";
import { useMutation } from "@tanstack/react-query";

export const useCreatePaymentIntent = () => {
  return useMutation<any, Error, number>({
    mutationKey: ["CREATE_PAYMENT_INTENT"],
    mutationFn: async (amount) => await createPaymentIntent(amount),
  });
};
