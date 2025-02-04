/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

const VPasswordInput = ({
  registerName,
  placeholder,
}: {
  registerName: string;
  placeholder?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const {
    register,
    formState: { errors },
  } = useFormContext<Record<string, any>>();

  return (
    <div>
      <div className="space-y-2">
        <div className="relative">
          <Input
            id={registerName}
            className="flex w-full items-center self-stretch pl-3 py-1.5 rounded-md border border-gray-400 bg-white pe-9"
            placeholder={placeholder}
            type={isVisible ? "text" : "password"}
            {...register(registerName)}
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
      {errors[registerName] && (
        <p className="text-red-500 mt-1">
          {(errors[registerName] as { message?: string })?.message}
        </p>
      )}
    </div>
  );
};

export default VPasswordInput;
