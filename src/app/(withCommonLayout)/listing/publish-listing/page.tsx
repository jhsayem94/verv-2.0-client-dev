import PublishListing from "../../components/pages/Listing/PublishListing";
import ListingTab from "../../components/Shared/Tabs/ListingTab";

const page = () => {
  return (
    <div>
      <ListingTab isPublish={true} />
      <PublishListing />
    </div>
  );
};

export default page;
