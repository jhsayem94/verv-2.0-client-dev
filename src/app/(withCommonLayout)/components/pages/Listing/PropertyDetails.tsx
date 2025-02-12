"use client";

import {
  propertyDetailsSchema,
  TPropertyDetails,
} from "@/schema/listing.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import InputField from "../../UI/Form/InputField";
// import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "@/assets/icons/icons";
import SelectField from "../../UI/Form/SelectField";
import CheckboxField from "../../UI/Form/CheckboxField";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { datePicker } from "@/helpers/datePicker";

const options = [
  {
    label: "Residential",
    options: [{ value: "Flat", label: "Flat" }],
  },
  {
    label: "Commercial",
    options: [{ value: "Bedsit", label: "Bedsit" }],
  },
];

const furnishedOptions = [
  {
    label: "Options",
    options: [
      { value: "Furnished", label: "Furnished" },
      { value: "Unfurnished", label: "Unfurnished" },
      { value: "Choice", label: "Choice" },
    ],
  },
];

const depositAmount = [
  {
    label: "Amount",
    options: [
      { value: "2 Weeks Rent", label: "2 Weeks Rent" },
      { value: "Monthly Rent", label: "Monthly Rent" },
      { value: "Choice", label: "Choice" },
    ],
  },
];

const PropertyDetails = () => {
  //   const router = useRouter();
  const [date, setDate] = useState<Date | undefined>(new Date());

  const formattedDate = datePicker(date);
  console.log(formattedDate);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TPropertyDetails>({
    resolver: zodResolver(propertyDetailsSchema),
    defaultValues: {
      billsIncluded: false,
      gardenAccess: false,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    // router.push("property-details");
  };

  return (
    <section className="w-[1216px] m-auto mt-14">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* room details */}
        <div>
          <h2 className="text-[24px] font-semibold text-colorTextSecondary mb-5 leading-[32px]">
            Property / Room Details
          </h2>
          <div className="flex gap-10 p-7 rounded-xl bg-[#FCFCFC] shadow-[0px_1px_4px_0px_rgba(16,24,40,0.10),0px_1px_4px_0px_rgba(16,24,40,0.06)]">
            <div className="space-y-8 w-1/2">
              <div className="flex items-end self-stretch gap-1">
                <InputField
                  registerName="postcode"
                  label="Postcode"
                  type="text"
                  placeholder="Enter your postcode"
                  register={register}
                  errors={errors}
                  className="w-[344px]"
                />
                <Button className="bg-colorButton">
                  <SearchIcon />
                  Find Address
                </Button>
              </div>
              <InputField
                registerName="address"
                label="Address"
                type="text"
                placeholder="Enter your address"
                register={register}
                errors={errors}
              />
              <InputField
                registerName="address2"
                label="Address Line 2 (Optional)"
                type="text"
                placeholder="Enter your another address"
                register={register}
                errors={errors}
              />
              <InputField
                registerName="houseNumber"
                label="Flat or House Number (kept private)"
                type="text"
                placeholder="Enter your flat or house number"
                register={register}
                errors={errors}
              />
            </div>

            <div className="space-y-8 w-1/2">
              <InputField
                registerName="town"
                label="Town"
                type="text"
                placeholder="Enter your town"
                register={register}
                errors={errors}
              />
              <SelectField
                registerName="propertyType"
                label="Property Type"
                control={control} // Pass the correctly typed control
                errors={errors}
                options={options}
              />

              <div className="flex items-center gap-4">
                <InputField
                  registerName="bedrooms"
                  label="Number of Bedrooms"
                  type="text"
                  placeholder="Bedrooms"
                  register={register}
                  errors={errors}
                  className="w-1/2"
                />

                <InputField
                  registerName="bathrooms"
                  label="Number of Bathrooms"
                  type="text"
                  placeholder="Bathrooms"
                  register={register}
                  errors={errors}
                  className="w-1/2"
                />
              </div>
              <SelectField
                registerName="furnishingOptions"
                label="Furnishing Options"
                control={control} // Pass the correctly typed control
                errors={errors}
                options={furnishedOptions}
              />
            </div>
          </div>
        </div>

        {/* tenancy details */}
        <div className="mt-12">
          <h2 className="text-[24px] font-semibold text-colorTextSecondary mb-5 leading-[32px]">
            Tenancy Details
          </h2>
          <div className="flex gap-10 p-7 rounded-xl bg-[#FCFCFC] shadow-[0px_1px_4px_0px_rgba(16,24,40,0.10),0px_1px_4px_0px_rgba(16,24,40,0.06)]">
            <div className="w-full flex gap-10">
              <div className="w-1/3 space-y-8">
                <InputField
                  registerName="monthlyRent"
                  label="Monthly Rent For Entire Property"
                  type="text"
                  placeholder="33.56"
                  register={register}
                  errors={errors}
                />
                <InputField
                  registerName="weeklyRent"
                  label="Weekly Rent For Entire Property"
                  type="text"
                  placeholder="33.56"
                  register={register}
                  errors={errors}
                />
                <SelectField
                  registerName="depositAmount"
                  label="Deposit Amount"
                  control={control}
                  errors={errors}
                  options={depositAmount}
                />
              </div>
              <div className="w-1/3 space-y-8">
                <InputField
                  registerName="minimumTenancy"
                  label="Minimum Tenancy Length"
                  type="text"
                  placeholder="12"
                  register={register}
                  errors={errors}
                />
                <InputField
                  registerName="maximumTenancy"
                  label="Maximum Number of Tenants"
                  type="text"
                  placeholder="33"
                  register={register}
                  errors={errors}
                />
              </div>
              <div className="">
                <p>Earliest Move In Date</p>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border shadow"
                />
              </div>
            </div>
          </div>
        </div>

        {/* features and preferences */}
        <div className="flex items-center gap-8 mt-12">
          {/* features */}
          <div className="w-1/2">
            <div className="mb-5">
              <h2 className="text-[24px] font-semibold text-colorTextSecondary mb-2 leading-[32px]">
                Features
              </h2>
              <p className="text-colorTextSecondary leading-[24px]">
                Please tell us about any particular features of your property /
                tenancy.
              </p>
            </div>
            <div className="p-7 rounded-xl bg-[#FCFCFC] shadow-[0px_1px_4px_0px_rgba(16,24,40,0.10),0px_1px_4px_0px_rgba(16,24,40,0.06)]">
              <CheckboxField
                registerName="billsIncluded"
                label="Bills Included"
                control={control}
              />
            </div>
          </div>

          {/* preferences */}
          <div className="w-1/2">
            <div className="mb-5">
              <h2 className="text-[24px] font-semibold text-colorTextSecondary mb-2 leading-[32px]">
                Tenant Preferences
              </h2>
              <p className="text-colorTextSecondary leading-[24px]">
                Please tell us about who can apply for your property.
              </p>
            </div>
            <div className="p-7 rounded-xl bg-[#FCFCFC] shadow-[0px_1px_4px_0px_rgba(16,24,40,0.10),0px_1px_4px_0px_rgba(16,24,40,0.06)]">
              <CheckboxField
                registerName="gardenAccess"
                label="Garden Access"
                control={control}
              />
            </div>
          </div>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
};

export default PropertyDetails;
