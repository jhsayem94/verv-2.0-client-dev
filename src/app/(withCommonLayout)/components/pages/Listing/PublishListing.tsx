import { CheckCircle } from "@/assets/icons/icons";
import { Button } from "@/components/ui/button";
import logo from "../../../../../assets/images/logo.png";
import Image from "next/image";

const PublishListing = () => {
  return (
    <section className="w-[1216px] m-auto mt-14">
      {/* first */}
      <div className="flex justify-end items-center gap-[98px] bg-[#F5F5F5] pl-[98px] border border-solid border-[#EEF1F3] rounded-3xl shadow-custom">
        {/* listing only */}
        <div className="flex flex-col items-center gap-6 my-10 text-center">
          <div className="space-y-2">
            <h4 className="text-2xl text-colorTextPrimary font-semibold leading-[120%]">
              Listing Only
            </h4>
            <p className="text-lg text-colorTextPrimary font-semibold">
              For Landlords & Agents
            </p>
          </div>
          <h2 className="text-5xl text-[#A6AFBB] font-bold leading-[120%]">
            ZERO
          </h2>
          <div className="space-y-2">
            <p className="text-sm text-colorTextPrimary font-semibold">
              Looking to List with Verv only?
            </p>
            <Button className="px-4 py-3 border border-solid border-[#CED3D9] rounded-[8px] bg-white text-lg text-colorTextPrimary font-semibold">
              Add Listing Now for Free
            </Button>
          </div>
        </div>

        {/* active listing on */}
        <div className="flex items-center pl-8 pt-6 pr-[188px] pb-[232px] border-r border-solid border-[#314660] bg-white">
          <div className="flex flex-col items-start gap-4">
            <h5>Active Listings on:</h5>
            <div className="flex justify-center items-start gap-2">
              <CheckCircle width={24} height={24} fill="#50B533" />
              <Image src={logo} width={61} height={24} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublishListing;
