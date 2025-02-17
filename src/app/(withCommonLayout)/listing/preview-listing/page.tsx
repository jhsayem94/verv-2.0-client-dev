/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useFileStore, usePropertyDetailsStore } from "@/store/store";
import ListingTab from "../../components/Shared/Tabs/ListingTab";

const page = () => {
  const propertyDetails = usePropertyDetailsStore(
    (state) => state.propertyDetails
  );
  const tenancyDetails = usePropertyDetailsStore(
    (state) => state.tenancyDetails
  );

  const { files } = useFileStore();

  console.log("Files from preview page", files);
  console.log("PropertyDetails from preview", propertyDetails);
  console.log("TenancyDetails from preview", tenancyDetails);

  return (
    <div>
      <ListingTab isPreview={true} />
      <h2>This is Preview Listing page</h2>
    </div>
  );
};

export default page;
