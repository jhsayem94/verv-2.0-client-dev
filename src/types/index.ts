/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { ZodType } from "zod";
import {
  Control,
  DefaultValues,
  FieldErrors,
  FieldValues,
  Path,
  SubmitHandler,
  UseFormRegister,
} from "react-hook-form";

export interface ITrustPilot {
  showGrow?: boolean;
  showTrustPilot?: boolean;
}

export interface IProperty {
  id: number;
  title: string;
  address: IAddress;
  pricePerMonth: number;
  currency: string;
  status: "POPULAR" | "AVAILABLE" | "RENTED" | string;
  features: IFeatures;
  image: string;
}

interface IAddress {
  street: string;
  city: string;
  state: string;
}

interface IFeatures {
  beds: number;
  bathrooms: number;
  size: ISize;
}

interface ISize {
  width: number;
  length: number;
  unit: "m²" | "sq ft" | string;
}

export type TVForm<T> = {
  children: ReactNode;
  schema: ZodType<T>;
  onSubmit: (data: T) => void;
  defaultValues?: DefaultValues<T>;
};

export interface IFormConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}

export interface IFormProps extends IFormConfig {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
}

export interface InputFieldProps {
  className?: string;
  registerName: string;
  label?: string;
  placeholder?: string;
  type: string;
  register: UseFormRegister<any>;
  errors?: FieldErrors<any>;
}

interface IOptionGroup {
  label: string;
  options: { value: string; label: string }[];
}

export interface ISelectFieldProps<T extends FieldValues> {
  className?: string;
  registerName: Path<T>; // Ensures correct key type from the form schema
  label?: string;
  control: Control<T>; // Correctly typed control
  errors?: FieldErrors<T>;
  options: IOptionGroup[];
}

export interface ICheckboxFieldProps<T extends FieldValues> {
  registerName: Path<T>;
  label: string;
  control: Control<T>;
  //   errors?: FieldErrors<T>;
}

type TPropertyDetails = {
  postcode: string;
  address: string;
  address2?: string;
  houseNumber: string;
  town: string;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  furnishingOptions: string;
  description: string;
};

type TTenancyDetails = {
  monthlyRent: number;
  minimumTenancy: number;
  weeklyRent: number;
  maximumTenancy: number;
  depositAmount: number;
  moveInDate: string;
};

type TFeatures = {
  billsIncluded: boolean;
  gardenAccess: boolean;
  parking: boolean;
  fireplace: boolean;
};

type TTenantPreferences = {
  studentAllowed: boolean;
  familiesAllowed: boolean;
  dssIncomeAccepted: boolean;
  petsAllowed: boolean;
  smokersAllowed: boolean;
};

export type TPropertyDetailsState = {
  propertyDetails: TPropertyDetails;
  tenancyDetails: TTenancyDetails;
  features: TFeatures;
  tenantPreferences: TTenantPreferences;
  remoteVideoViewing: boolean;
  viewingDescription: string;
  youtubeUrl: string;
  termsAgreed: boolean;
  setData: (data: Partial<TPropertyDetailsState>) => void;
};

export interface IFileState {
  files: File[];
  setFilesToStore: (files: File[]) => void;
  clearFilesFromStore: () => void;
}
