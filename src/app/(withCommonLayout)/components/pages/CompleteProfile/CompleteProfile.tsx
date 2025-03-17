"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../../UI/Form/InputField";
import { Button } from "@/components/ui/button";
import MultipleSelector, {
  MultipleSelectorRef,
} from "@/components/extension/multiple-selector";
import { languages } from "./profileConstants";
import { profileSchema } from "@/schema/profile.schema";
import { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import ImageUploader from "../../UI/ImageUploader/ImageUploader";

type TProfile = z.infer<typeof profileSchema>;

const CompleteProfile = () => {
  const ref = useRef<MultipleSelectorRef>(null);
  const [image, setImage] = useState<File[] | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TProfile>({
    resolver: zodResolver(profileSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const languageSelector = ref.current?.selectedValue;
    if (
      !ref.current?.selectedValue ||
      ref.current?.selectedValue.length === 0
    ) {
      console.log("No language selected");
      ref.current?.focus();
    } else {
      const profileData = {
        ...data,
        languages: languageSelector,
      };
      console.log(profileData);
      console.log(image);
    }
  };

  return (
    <div className="m-auto  my-14 flex lg:w-[600px] w-96 p-[40px] flex-col justify-center items-center flex-shrink-0 rounded-[16px] border border-[#EEF1F3] shadow-[0px_4px_20px_rgba(0,0,0,0.08)]">
      <h2 className="text-colorTextPrimary text-center text-[24px] font-semibold leading-[120%] mb-10">
        Complete profile
      </h2>
      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-2">
        <div className="space-y-2 mb-4">
          <InputField
            registerName="firstName"
            type="text"
            placeholder="First Name"
            register={register}
            errors={errors}
            className="w-full"
          />
          <InputField
            registerName="lastName"
            type="text"
            placeholder="Last Name"
            register={register}
            errors={errors}
            className="w-full"
          />

          <p className="text-colorTextSecondary text-[12px] font-normal leading-[140%]">
            Make sure this matches the name on your government ID. If you go by
            another name, you can add a preferred first name.
          </p>
        </div>

        <InputField
          registerName="phoneNumber"
          type="text"
          placeholder="Phone Number"
          register={register}
          errors={errors}
          className="w-full"
        />

        <div>
          <MultipleSelector
            ref={ref}
            className=" rounded-md text-[16px] border border-gray-400 bg-white pr-10 mb-4"
            defaultOptions={languages}
            placeholder="Select Languages"
            emptyIndicator={
              <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                no results found.
              </p>
            }
          />
        </div>

        <div>
          <ImageUploader files={image} setFiles={setImage} />
        </div>

        <Button
          type="submit"
          className="bg-colorButton w-full mt-6 rounded shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-lg font-semibold"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CompleteProfile;
