/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";

const VInput = ({
  registerName,
  label,
  placeholder,
  type,
}: {
  registerName: string;
  label?: string;
  placeholder?: string;
  type: string;
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Record<string, any>>();

  return (
    <div>
      <div>
        {label && <Label htmlFor={registerName}>{label}</Label>}
        <Input
          className="flex w-full items-center self-stretch px-3 py-1.5 rounded-md border border-gray-400 bg-white"
          type={type}
          id={registerName}
          placeholder={placeholder}
          {...register(registerName)}
        />
      </div>
      {errors[registerName] && (
        <p className="text-red-500 mt-1">
          {(errors[registerName] as { message?: string })?.message}
        </p>
      )}
    </div>
  );
};

export default VInput;
