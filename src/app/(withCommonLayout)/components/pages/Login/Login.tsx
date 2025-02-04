"use client";

import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import VForm from "../../UI/Form/VForm";
import { loginSchema } from "@/schema/login.schema";
import VInput from "../../UI/Form/VInput";
import { Button } from "@/components/ui/button";
import VPasswordInput from "../../UI/Form/VPasswordInput";

const Login = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full">
      <VForm onSubmit={onSubmit} resolver={zodResolver(loginSchema)}>
        <VInput type="email" placeholder="Email" registerName="email" />
        <VPasswordInput placeholder="Password" registerName="password" />
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
