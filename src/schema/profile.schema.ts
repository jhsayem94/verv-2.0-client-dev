import { z } from "zod";

export const profileSchema = z.object({
  firstName: z
    .string({ required_error: "Please enter your first name" })
    .min(2, "First Name is required"),

  lastName: z
    .string({ required_error: "Please enter your last name" })
    .min(2, "Last Name is required"),

  phoneNumber: z
    .string({ required_error: "Please enter your phone number" })
    .min(2, "Phone Number is required"),

  //   languages: z
  //     .array(
  //       z.object({
  //         label: z.string(),
  //         value: z.string(),
  //       })
  //     )
  //     .min(1),
});
