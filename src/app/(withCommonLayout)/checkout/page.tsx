import React, { Suspense } from "react";
import Checkout from "../components/pages/Checkout/Checkout";
import Loading from "../components/UI/Loading/Loading";

const page = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Checkout />
      </Suspense>
    </div>
  );
};

export default page;
