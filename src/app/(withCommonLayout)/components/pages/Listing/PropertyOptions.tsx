/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { listingSchema } from "@/schema/listing.schema";
import { Button } from "@/components/ui/button";
import { z } from "zod";
// import { z } from "zod";

const propertyOptionSchema = listingSchema.pick({
  propertyOption: true,
});

type TPropertyOption = z.infer<typeof propertyOptionSchema>;

const PropertyOptions = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TPropertyOption>({
    resolver: zodResolver(propertyOptionSchema),
    // defaultValues: { propertyOption: "Whole property" },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <section className="w-[1216px] m-auto mt-14 space-y-5 bg-red-400">
      <h4 className="text-[24px] font-semibold text-colorTextSecondary leading-[32px]">
        How do you want to let the property?
      </h4>
      <div className="px-6 py-8 bg-blue-300">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md p-6 bg-white shadow-md rounded-xl space-y-4"
        >
          <h2 className="text-lg font-semibold">Select Property Type</h2>

          <div className="space-y-2">
            {[
              "Whole property",
              "Individual rooms",
              "Either whole property or individual rooms",
            ].map((option) => (
              <label
                key={option}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="radio"
                  value={option}
                  {...register("propertyOption")}
                  className="w-4 h-4"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>

          {errors.propertyOption && (
            <p className="text-red-500 text-sm">
              {errors.propertyOption.message}
            </p>
          )}

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </section>
  );
};

export default PropertyOptions;
