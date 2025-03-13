/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { usePropertyDetailsStore } from "@/store/store";
import ListingTab from "../../components/Shared/Tabs/ListingTab";
import SingleListing from "../../components/pages/SingleListing/SingleListing";
import { Button } from "@/components/ui/button";
import useFileStore from "@/store/fileStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IStoredFile } from "@/types";

const page = () => {
  const router = useRouter();

  const propertyOption = usePropertyDetailsStore(
    (state) => state.propertyOption
  );

  const remoteVideoViewing = usePropertyDetailsStore(
    (state) => state.remoteVideoViewing
  );

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

  const termsAgreed = usePropertyDetailsStore((state) => state.termsAgreed);
  const youtubeUrl = usePropertyDetailsStore((state) => state.youtubeUrl);

  // create an array of image urls
  const [propertyImages, setPropertyImages] = useState<string[]>([]);

  const files: IStoredFile[] = useFileStore((state) => state.files);
  const loadFiles = useFileStore((state) => state.loadFiles);
  // const clearFiles = useFileStore((state) => state.clearFiles);

  // Load files from IndexedDB when page loads
  useEffect(() => {
    loadFiles();
  }, [loadFiles]);

  useEffect(() => {
    if (Array.isArray(files) && files.length > 0) {
      setPropertyImages(files.map((fileData) => fileData?.fileURL as string));
    }
  }, [files]);

  if (files.length === 0) {
    return (
      <p>
        No files found. Please <a href="/upload">upload again</a>.
      </p>
    );
  }

  // create property listing data
  const listingData = {
    propertyOption,
    remoteVideoViewing,
    ...propertyDetails,
    propertyImages,
    youtubeUrl,
    tenancyDetails,
    tenantPreferences,
    features,
    termsAgreed,
  };

  const handleClick = () => {
    console.log("Clicked handler");
    router.push("publish-listing");
  };

  return (
    <section>
      <div>
        <h1>File Preview</h1>
        {files.map((fileData, index) => (
          <div key={index}>
            {/* <p>File Name: {fileData.file.name}</p> */}
            <img src={fileData.fileURL} alt="Preview" width="300" />
          </div>
        ))}
      </div>

      <ListingTab isPreview={true} />
      <div className="w-[1216px] m-auto flex items-center justify-center py-10 mt-14 mb-10 shadow-custom">
        <div className="flex flex-col items-center gap-6 shrink-0">
          <h2 className="text-2xl text-colorTextSecondary font-semibold leading-[120%]">
            Publish Listing
          </h2>
          <p className="text-lg text-colorTextPrimary font-semibold">
            To publish this property onto Verv, click the button below:
          </p>
          <Button
            className="bg-colorButton px-8 py-5 font-semibold"
            onClick={handleClick}
          >
            Save & Continue
          </Button>
          <p className="text-lg text-colorTextSecondary font-medium italic">
            You can still make changes after publishing
          </p>
        </div>
      </div>
      <SingleListing listingData={listingData} />
    </section>
  );
};

export default page;
