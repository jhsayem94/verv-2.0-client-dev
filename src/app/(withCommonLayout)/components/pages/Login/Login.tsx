"use client";

import React, { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import VForm from "../../UI/Form/VForm";
import { loginSchema } from "@/schema/login.schema";
import VInput from "../../UI/Form/VInput";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full">
      <VForm onSubmit={onSubmit} resolver={zodResolver(loginSchema)}>
        <VInput type="email" placeholder="Email" registerName="email" />
        <div className="space-y-2">
          <div className="relative">
            <VInput
              type={isVisible ? "text" : "password"}
              placeholder="Password"
              registerName="password"
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

        <Button
          type="submit"
          className="bg-colorButton w-full rounded shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-lg font-semibold"
        >
          Login
        </Button>
      </VForm>
    </div>
  );
};

export default Login;
