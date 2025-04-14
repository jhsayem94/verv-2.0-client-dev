"use client";

import envConfig from "@/config/envConfig";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
import { useUser } from "@/context/user.provider";
import { TPaymentUserData } from "@/types";
import InputField from "../../UI/Form/InputField";
import { Button } from "@/components/ui/button";

const stripe = loadStripe(envConfig.stripePublicKey as string);

const Checkout = () => {
  const searchParams = useSearchParams();
  const planId = searchParams.get("planId");
  const { user } = useUser();

  // const email = user?.email;
  // const fullName = user?.landlord.firstName + " " + user?.landlord.lastName;
  // const phoneNumber = user?.landlord.phoneNumber;

  // const userData: TPaymentUserData = {
  //   email,
  //   fullName,
  //   phoneNumber,
  // };
  const userData = {
    email: "jahid@sayem.com",
    fullName: "jahid",
    phoneNumber: "02131651652"
  }
  console.log(userData)

  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    if (planId === "listing-only") {
      setPrice(0.5);
    } else if (planId === "premier-listings") {
      setPrice(74.99);
    } else if (planId === "rent-ready") {
      setPrice(54.99);
    }
  }, [planId]);

  console.log(planId);
  return (
    <div>
      <h2>
        This is checkout components {planId} - {price}
      </h2>
      {/* -----Personal Details Section------- */}
      <div className='lg:w-[800px] mx-auto w-96 bg-[#FCFCFC] shadow-custom p-6 rounded-xl ' >
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-slate-500 text-lg font-semibold'>Personal Details</h3>
          <Button className="bg-gray-100 hover:bg-slate-700 rounded text-slate-700 hover:text-gray-100 text-[18px] font-semibold py-2 px-4">Edit</Button>
        </div>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-y-4 gap-x-4'>
          <div>
            <p className='text-slate-500 text-[16px] text-base font-medium mb-2'>Full Name</p>
            <span className="w-full"> {userData?.fullName} </span>
          </div>
          <div>
            <p className='text-slate-500 text-[16px] text-base font-medium mb-2'>Email address</p>
            <span className="w-full"> {userData?.email} </span>
          </div>
          <div>
            <p className='text-slate-500 text-[16px] text-base font-medium mb-2'>Phone number</p>
            <span className="w-full"> {userData?.phoneNumber} </span>
          </div>
        </div>
      </div>
      {/* -----Personal Details Section------- */}
      <Elements stripe={stripe}>
        <PaymentForm amount={price} planId={planId} userData={userData} />
      </Elements>
    </div>
  );
};

export default Checkout;
