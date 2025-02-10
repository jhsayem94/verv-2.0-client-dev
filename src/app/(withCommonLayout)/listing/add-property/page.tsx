import PropertyOptions from "../../components/pages/Listing/PropertyOptions";
import ListingTab from "../../components/Shared/Tabs/ListingTab";

const page = () => {
  return (
    <>
      <ListingTab isRoom={true} />
      <PropertyOptions />
    </>
  );
};

export default page;
