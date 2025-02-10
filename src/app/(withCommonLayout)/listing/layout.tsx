import { ReactNode } from "react";
import ListingHero from "../components/pages/Listing/ListingHero";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ListingHero />
      <section>{children}</section>
    </>
  );
};

export default layout;
