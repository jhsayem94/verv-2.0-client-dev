import ListingTab from "../../components/Shared/Tabs/ListingTab";

const page = () => {
  return (
    <div>
      <ListingTab
        isRoom={true}
        // isDetails={true}
        // isPreview={true}
        // isPublish={true}
      />
      ;<h2>This is add property page</h2>
    </div>
  );
};

export default page;
