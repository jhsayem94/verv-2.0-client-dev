import { Button } from "@/components/ui/button";
import addListingHero from "../../../../../assets/images/add-listing-hero.jpg";

const ListingHero = () => {
  const imageStyle = {
    backgroundImage: `url(${addListingHero.src})`,
    backgroundColor: "lightcyan",
  };
  return (
    <section className="w-full bg-[#EEF1F3] py-[100px] mb-[100px]">
      <div className="w-[1216px] flex items-center gap-[136px] m-auto">
        {/* description */}
        <div className="w-[488px] flex flex-col items-start gap-[36px]">
          <div className="space-y-6">
            <h2 className="text-5xl text-colorTextPrimary font-bold leading-[125%5]">
              List your property in minutes.
            </h2>
            <p className="text-colorTextPrimary leading-[150%]">
              List your property or rooms and manage everything from one
              powerful dashboard; tenant reviews, references, contracts, and
              deposits, all at your fingertips once a tenant is found. Best of
              all? Listing is 100% free.
            </p>
          </div>
          <Button className="w-[200px] h-[56px] py-2 text-center rounded-[32px] bg-colorButton text-lg text-white font-semibold">
            Start Now
          </Button>
        </div>
        {/* image */}
        <div
          style={imageStyle}
          className="w-[592px] h-[352px] rounded-2xl bg-center bg-no-repeat bg-cover"
        ></div>
      </div>
    </section>
  );
};

export default ListingHero;
