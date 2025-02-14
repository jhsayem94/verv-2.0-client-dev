/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { usePropertyDetailsStore } from "@/store/store";
import ListingTab from "../../components/Shared/Tabs/ListingTab";

const page = () => {
  const propertyDetails = usePropertyDetailsStore(
    (state) => state.propertyDetails
  );
  const tenancyDetails = usePropertyDetailsStore(
    (state) => state.tenancyDetails
  );

  console.log(propertyDetails);
  console.log(tenancyDetails);

  return (
    <div>
      <ListingTab isPreview={true} />
      <h2>This is Preview Listing page</h2>
    </div>
  );
};

export default page;
