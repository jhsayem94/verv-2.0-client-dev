/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useFileStore, usePropertyDetailsStore } from "@/store/store";
import ListingTab from "../../components/Shared/Tabs/ListingTab";
import SingleListing from "../../components/pages/SingleListing/SingleListing";
import { Button } from "@/components/ui/button";

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
    <section>
      <ListingTab isPreview={true} />
      <div className="w-[1216px] m-auto flex items-center justify-center py-10 mt-14 mb-10 shadow-custom">
        <div className="flex flex-col items-center gap-6 shrink-0">
          <h2 className="text-2xl text-colorTextSecondary font-semibold leading-[120%]">
            Publish Listing
          </h2>
          <p className="text-lg text-colorTextPrimary font-semibold">
            To publish this property onto Verv, click the button below:
          </p>
          <Button className="bg-colorButton px-8 py-5 font-semibold">
            Save & Continue
          </Button>
          <p className="text-lg text-colorTextSecondary font-medium italic">
            You can still make changes after publishing
          </p>
        </div>
      </div>
      <SingleListing />
    </section>
  );
};

export default page;
