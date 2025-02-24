"use client";

import { Button } from "@/components/ui/button";
import { registerSchema } from "@/schema/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../../UI/Form/InputField";
import PasswordField from "../../UI/Form/PasswordField";

type TRegister = z.infer<typeof registerSchema>;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegister>({
    resolver: zodResolver(registerSchema),
    // defaultValues: { propertyOption: "Whole property" },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  //   className="flex w-full items-start self-stretch px-3 py-1.5 rounded-md border border-gray-400 bg-white pr-10 mb-4"
  // pass  className="flex w-full items-start self-stretch px-3 py-1.5 rounded-md border border-gray-400 bg-white pr-10"

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <InputField
        registerName="email"
        //   label="Email"
        type="email"
        placeholder="Email"
        register={register}
        errors={errors}
        className="w-full"
      />

      <PasswordField
        registerName="password"
        placeholder="Password"
        register={register}
        errors={errors}
        className="w-full"
      />

      {/* <PasswordInputField
        register={register}
        errors={errors}
        className="flex w-full items-start self-stretch px-3 py-1.5 rounded-md border border-gray-400 bg-white pr-10"
      /> */}

      {/* <div className="w-full flex justify-between items-center gap-6 mt-6">
        <p className="text-colorTextPrimary leading-[150%]">Register as</p>
        <RadioGroupField
          options={registerOptions}
          registerAs="role"
          register={register}
          errors={errors}
        />
      </div> */}
      <Button
        type="submit"
        className="bg-colorButton w-full mt-6 rounded shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-lg font-semibold"
      >
        Submit
      </Button>
    </form>
  );
};

export default Register;
