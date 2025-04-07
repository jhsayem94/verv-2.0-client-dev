"use client";

import React, { useEffect } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import VForm from "../../UI/Form/VForm";
import { loginSchema } from "@/schema/login.schema";
import VInput from "../../UI/Form/VInput";
import { Button } from "@/components/ui/button";
import VPasswordInput from "../../UI/Form/VPasswordInput";
import { useUserLogin } from "@/hooks/auth.hook";
import Loading from "../../UI/Loading/Loading";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@/context/user.provider";

const Login = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirect");

  const { setIsLoading: userLoading } = useUser();

  const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    handleUserLogin(data);
    userLoading(true);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        console.log("Redirect", redirect);
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isPending, isSuccess, redirect, router]);

  return (
    <>
      {isPending && <Loading />}
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
    </>
  );
};

export default Login;
