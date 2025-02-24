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
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <InputField
        registerName="email"
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
        className="w-full mt-4 mb-6"
      />

      <div className="w-full">
        <div className="flex items-center gap-6">
          <p className="text-colorTextPrimary leading-[150%]">Register as</p>
          <div className="flex items-center gap-4">
            <div className="flex justify-center items-center gap-2">
              <input
                type="radio"
                value="landlord"
                {...register("role")}
                className="w-[18px] h-[18px] accent-green-600"
              />
              <p className="text-sm text-colorTextPrimary font-semibold">
                Landlord/Agent
              </p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <input
                type="radio"
                value="tenant"
                {...register("role")}
                className="w-[18px] h-[18px] accent-green-600"
              />
              <p className="text-sm text-colorTextPrimary font-semibold">
                Tenant
              </p>
            </div>
          </div>
        </div>
        {errors.role && (
          <p className="text-red-500 text-sm">{errors.role.message}</p>
        )}
      </div>
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
