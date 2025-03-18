import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z.preprocess(
    (value) => (value === null || value === undefined ? undefined : value),
    z.enum(["LANDLORD", "TENANT"], { required_error: "Role is required" })
  ),
});
