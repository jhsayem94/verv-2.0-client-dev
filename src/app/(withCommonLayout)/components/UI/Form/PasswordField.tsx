// /* eslint-disable @typescript-eslint/no-explicit-any */

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputFieldProps } from "@/types";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const PasswordField: React.FC<InputFieldProps> = ({
  className,
  registerName,
  label,
  placeholder,
  // type,
  register,
  errors,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  //   const registerValueType = type === "number" ? { valueAsNumber: true } : {};

  return (
    <div className={className}>
      <div className="space-y-2">
        <div className="relative">
          {label && <Label htmlFor={registerName}>{label}</Label>}
          <Input
            id={registerName}
            placeholder={placeholder}
            type={isVisible ? "text" : "password"}
            {...register(registerName)}
            {...register(registerName)}
            className="flex w-full items-center self-stretch pl-3 pr-10 py-1.5 rounded-md border border-gray-400 bg-white"
          />
          <button
            className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            type="button"
            onClick={toggleVisibility}
            aria-label={isVisible ? "Hide password" : "Show password"}
            aria-pressed={isVisible}
            aria-controls="password"
          >
            {isVisible ? (
              <EyeOff size={16} strokeWidth={2} aria-hidden="true" />
            ) : (
              <Eye size={16} strokeWidth={2} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      {errors?.[registerName] && (
        <p className="text-red-500 mt-1">
          {(errors[registerName] as { message?: string })?.message}
        </p>
      )}
    </div>
  );
};

export default PasswordField;
