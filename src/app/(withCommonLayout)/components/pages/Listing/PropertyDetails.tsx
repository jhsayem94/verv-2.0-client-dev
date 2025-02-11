"use client";

import { listingSchema } from "@/schema/listing.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../../UI/Form/InputField";
// import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "@/assets/icons/icons";

const propertyDetailsSchema = listingSchema.pick({
  postcode: true,
  houseNumber: true,
  address: true,
  address2: true,
  town: true,
  //   propertyType: true,
  //   bedrooms: true,
  //   bathrooms: true,
  //   furnishingOptions: true,
  //   monthlyRent: true,
  //   minimumTenancy: true,
  //   weeklyRent: true,
  //   maximumTenancy: true,
  //   depositAmount: true,
  //   billsIncluded: true,
  //   gardenAccess: true,
});

type TPropertyDetails = z.infer<typeof propertyDetailsSchema>;

const PropertyDetails = () => {
  //   const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TPropertyDetails>({
    resolver: zodResolver(propertyDetailsSchema),
    // defaultValues: { propertyOption: "Whole property" },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    // router.push("property-details");
  };

  return (
    <section className="w-[1216px] m-auto mt-14">
      <h2 className="text-[24px] font-semibold text-colorTextSecondary leading-[32px]">
        Property / Room Details
      </h2>
      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-10 p-28 rounded-xl bg-[#FCFCFC] shadow-[0px_1px_4px_0px_rgba(16,24,40,0.10),0px_1px_4px_0px_rgba(16,24,40,0.06)]">
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
          </div>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
};

export default PropertyDetails;
