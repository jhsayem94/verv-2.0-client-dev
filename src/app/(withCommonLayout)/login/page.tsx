// "use client"; make login to Suspense

import Link from "next/link";
import Login from "../components/pages/Login/Login";
import SocialLogin from "../components/pages/Login/SocialLogin";

const page = () => {
  return (
    <div className="m-auto flex flex-col items-center justify-center w-[416px] h-[664px] p-10 mt-14 gap-10 shrink-0 rounded-2xl border border-[#EEF1F3] bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.08)]">
      <h2 className="text-[#00204A] text-center font-inter text-[24px] font-semibold leading-[120%]">
        Login to your Account
      </h2>
      <SocialLogin />
      <div className="relative">
        <p className="absolute text-colorTextSecondary -bottom-[20px] left-[149px] p-2 z-10 bg-white">
          OR
        </p>
        <div className="w-[336px] h-[1px] bg-[#EEF1F3]"></div>
      </div>
      {/* <Suspense fallback={<Loading />}>
        <Login />
      </Suspense> */}
      <Login />

      <p className="text-center text-[#3B5374]">
        Don’t have account?{" "}
        <span className="font-semibold underline decoration-solid text-colorButton">
          <Link href="/register">Register</Link>
        </span>
      </p>
    </div>
  );
};

export default page;
