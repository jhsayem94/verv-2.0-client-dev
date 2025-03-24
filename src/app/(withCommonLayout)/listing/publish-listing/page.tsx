/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useRouter } from "next/navigation";
import PublishListing from "../../components/pages/Listing/PublishListing";
import ListingTab from "../../components/Shared/Tabs/ListingTab";
import { usePropertyDetailsStore } from "@/store/store";
import { useEffect } from "react";

const page = () => {
  const router = useRouter();

  const hasHydrated = usePropertyDetailsStore((state) => state.hasHydrated);
  const propertyDetails = usePropertyDetailsStore(
    (state) => state.propertyDetails
  );
  const tenancyDetails = usePropertyDetailsStore(
    (state) => state.tenancyDetails
  );
  const tenantPreferences = usePropertyDetailsStore(
    (state) => state.tenantPreferences
  );
  const features = usePropertyDetailsStore((state) => state.features);

  useEffect(() => {
    if (!hasHydrated) return; // Wait for hydration before checking state

    console.log("Hydration complete. Checking property details:");

    if (
      !propertyDetails ||
      !tenancyDetails ||
      !tenantPreferences ||
      !features
    ) {
      router.push("/listing/property-details");
    }
  }, [
    hasHydrated,
    propertyDetails,
    tenancyDetails,
    tenantPreferences,
    features,
    router,
  ]);

  return (
    <div>
      <ListingTab isPublish={true} />
      <PublishListing />
    </div>
  );
};

export default page;
