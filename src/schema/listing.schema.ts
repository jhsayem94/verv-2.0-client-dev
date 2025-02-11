import { z } from "zod";

export const listingSchema = z.object({
  propertyOption: z.enum(
    [
      "Whole property",
      "Individual rooms",
      "Either whole property or individual rooms",
    ],
    { required_error: "Please select an option" }
  ),

  postcode: z
    .string({ required_error: "Please enter a postcode" })
    .min(1, "Postcode is required"),
  houseNumber: z
    .string({
      required_error: "Please enter flat or house number",
    })
    .min(1, "Postcode is required"),
  address: z.string({ required_error: "Please enter the address" }),
  address2: z.string().optional(),
  propertyType: z.enum(["Flat", "Bedsit"], {
    required_error: "Please select a type",
  }),
  bedrooms: z.string({
    required_error: "Please enter the number of bedrooms",
  }),
  bathrooms: z.string({
    required_error: "Please enter the number of bathrooms",
  }),
  furnishingOptions: z.enum(["Furnished", "Unfurnished", "Choice"], {
    required_error: "Please select an option",
  }),
  town: z.string({ required_error: "Please enter a town" }),
  propertyDescription: z.string({
    required_error: "Please add a description",
  }),
  monthlyRent: z.string({ required_error: "Please add a monthly rent" }),
  minimumTenancy: z.string({
    required_error: "Please enter the minimum number of tenancy",
  }),
  weeklyRent: z.string({
    required_error: "Please add a weekly rent",
  }),
  maximumTenancy: z.string({
    required_error: "Please enter the maximum number of tenancy",
  }),
  depositAmount: z.string({
    required_error: "Please enter an deposit amount",
  }),
  billsIncluded: z.boolean().default(false),
  gardenAccess: z.boolean().default(false),
});

export type TListingSchema = z.infer<typeof listingSchema>;
