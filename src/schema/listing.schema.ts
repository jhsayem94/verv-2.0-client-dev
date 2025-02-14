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
  address: z
    .string({ required_error: "Please enter the address" })
    .min(1, "Address is required"),
  address2: z.string().optional(),
  propertyType: z.enum(["Flat", "Bedsit"], {
    required_error: "Please select a type",
  }),
  bedrooms: z
    .string({
      required_error: "Please enter the number of bedrooms",
    })
    .min(1, "Number of bedrooms is required"),
  bathrooms: z
    .string({
      required_error: "Please enter the number of bathrooms",
    })
    .min(1, "Number of bathrooms is required"),
  furnishingOptions: z.enum(["Furnished", "Unfurnished", "Choice"], {
    required_error: "Please select an option",
  }),
  town: z
    .string({ required_error: "Please enter a town" })
    .min(1, "Town is required"),
  description: z
    .string()
    .min(1, "Description is required")
    .refine((val) => val.replace(/<(.|\n)*?>/g, "").trim() !== "", {
      message: "Description is required",
    }),
  monthlyRent: z
    .string({ required_error: "Please add a monthly rent" })
    .min(1, "Monthly Rent is required"),
  minimumTenancy: z
    .string({
      required_error: "Please enter the minimum number of tenancy",
    })
    .min(1, "Minimum Number is required"),
  weeklyRent: z
    .string({
      required_error: "Please add a weekly rent",
    })
    .min(1, "Weekly Rent is required"),
  maximumTenancy: z
    .string({
      required_error: "Please enter the maximum number of tenancy",
    })
    .min(1, "Maximum Number is required"),
  depositAmount: z
    .string({
      required_error: "Please enter an deposit amount",
    })
    .min(1, "Deposit Amount is required"),
  billsIncluded: z.boolean().default(false),
  gardenAccess: z.boolean().default(false),
  parking: z.boolean().default(false),
  fireplace: z.boolean().default(false),

  studentAllowed: z.boolean().default(false),
  familiesAllowed: z.boolean().default(false),
  dssIncomeAccepted: z.boolean().default(false),
  petsAllowed: z.boolean().default(false),
  smokersAllowed: z.boolean().default(false),

  remoteVideoViewing: z.boolean().default(false),
  viewingDescription: z.string().optional(),
  youtubeUrl: z.string().optional(),
  termsAgreed: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "You must agree to the terms",
    }),
});

export type TListingSchema = z.infer<typeof listingSchema>;

export const propertyDetailsSchema = listingSchema.pick({
  postcode: true,
  houseNumber: true,
  address: true,
  address2: true,
  town: true,
  description: true,
  propertyType: true,
  bedrooms: true,
  bathrooms: true,
  furnishingOptions: true,
  monthlyRent: true,
  minimumTenancy: true,
  weeklyRent: true,
  maximumTenancy: true,
  depositAmount: true,
  billsIncluded: true,
  gardenAccess: true,
  parking: true,
  fireplace: true,

  studentAllowed: true,
  familiesAllowed: true,
  dssIncomeAccepted: true,
  petsAllowed: true,
  smokersAllowed: true,

  remoteVideoViewing: true,
  viewingDescription: true,
  youtubeUrl: true,
  termsAgreed: true,
});

export type TPropertyDetails = z.infer<typeof propertyDetailsSchema>;

export const propertyDetailsStoreSchema = z.object({
  propertyOption: z.enum([
    "Whole property",
    "Individual rooms",
    "Either whole property or individual rooms",
  ]),

  propertyDetails: z.object({
    postcode: z.string().min(1, "Postcode is required"),
    houseNumber: z.string().min(1, "House number is required"),
    address: z.string().min(1, "Address is required"),
    address2: z.string().optional(),
    propertyType: z.enum(["Flat", "Bedsit"]),
    bedrooms: z.string().min(1, "Number of bedrooms is required"),
    bathrooms: z.string().min(1, "Number of bathrooms is required"),
    furnishingOptions: z.enum(["Furnished", "Unfurnished", "Choice"]),
    town: z.string().min(1, "Town is required"),
    description: z.string().min(1, "Description is required"),
  }),

  tenancyDetails: z.object({
    monthlyRent: z.string().min(1, "Monthly Rent is required"),
    minimumTenancy: z.string().min(1, "Minimum Tenancy is required"),
    weeklyRent: z.string().min(1, "Weekly Rent is required"),
    maximumTenancy: z.string().min(1, "Maximum Tenancy is required"),
    depositAmount: z.string().min(1, "Deposit Amount is required"),
  }),

  features: z.object({
    billsIncluded: z.boolean().default(false),
    gardenAccess: z.boolean().default(false),
    parking: z.boolean().default(false),
    fireplace: z.boolean().default(false),
  }),

  tenantPreferences: z.object({
    studentAllowed: z.boolean().default(false),
    familiesAllowed: z.boolean().default(false),
    dssIncomeAccepted: z.boolean().default(false),
    petsAllowed: z.boolean().default(false),
    smokersAllowed: z.boolean().default(false),
  }),

  remoteVideoViewing: z.boolean().default(false),
  viewingDescription: z.string().optional(),
  youtubeUrl: z.string().optional(),
  termsAgreed: z.boolean().refine((value) => value === true, {
    message: "You must agree to the terms",
  }),
});

export type TPropertyDetailsStoreSchema = z.infer<
  typeof propertyDetailsStoreSchema
>;
