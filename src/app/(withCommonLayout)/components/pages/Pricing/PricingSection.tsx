import React from "react";
import { pricingData } from "./pricingConstants";
import PricingCard from "./PricingCard";

const PricingSection = () => {
  return (
    <div className="mt-14 grid grid-cols-1 gap-y-6 lg:w-[1216px] md:w-3/5 w-5/6 mx-auto">
      {pricingData.map((data) => (
        <PricingCard key={data.id} data={data}></PricingCard>
      ))}
    </div>
  );
};

export default PricingSection;
