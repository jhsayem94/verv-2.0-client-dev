/* eslint-disable @typescript-eslint/no-explicit-any */

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputFieldProps } from "@/types";
// import { FieldErrors, UseFormRegister } from "react-hook-form";

// interface InputFieldProps {
//   registerName: string;
//   label?: string;
//   placeholder?: string;
//   type: string;
//   register: UseFormRegister<any>;
//   errors?: FieldErrors<any>;
// }

const InputField: React.FC<InputFieldProps> = ({
  registerName,
  label,
  placeholder,
  type,
  register,
  errors,
}) => {
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
      {errors?.[registerName] && (
        <p className="text-red-500 mt-1">
          {(errors[registerName] as { message?: string })?.message}
        </p>
      )}
    </div>
  );
};

export default InputField;
