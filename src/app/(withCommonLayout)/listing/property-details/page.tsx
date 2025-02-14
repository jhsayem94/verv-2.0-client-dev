"use client";

import PropertyDetails from "../../components/pages/Listing/PropertyDetails";
import ListingTab from "../../components/Shared/Tabs/ListingTab";

const page = () => {
  return (
    <>
      <ListingTab isDetails={true} />
      <PropertyDetails />
    </>
  );
};

export default page;
