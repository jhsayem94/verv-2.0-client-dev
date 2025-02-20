import { Button } from "@/components/ui/button";

const PublishListing = () => {
  return (
    <section className="w-[1216px] m-auto mt-14">
      {/* listing only */}
      <div className="flex justify-end items-center gap-[98px] bg-[#F5F5F5] pl-[98px] border border-solid border-[#EEF1F3] rounded-3xl shadow-custom">
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
      </div>
    </section>
  );
};

export default PublishListing;
