import { CalendarIcon, HomeFill, LocationIcon } from "@/assets/icons/icons";
import VerticalCarousel from "./VerticalCarousel";

const SingleListing = () => {
  return (
    <section className="h-[973px] bg-[#EEF1F3]">
      <div className="w-[1216px] h-[786px] bg-blue-300 m-auto">
        {/* basic property information */}
        <div className="mb-6">
          <p className="text-colorTextSecondary text-lg font-medium mb-[32px]">
            Home / Birmingham / Houses / Grange Road
          </p>
          <div className="flex items-center gap-4">
            <h1 className="text-colorTextPrimary text-[32px] font-semibold leading-[120%]">
              6 Bed, 3 Bath house{" "}
            </h1>
            <p className="text-colorTextPrimary text-sm font-semibold leading-[120%] w-[160px] px-[20.5px] py-[7.5px] rounded-[32px] bg-[#B4DFA7]">
              6 rooms available
            </p>
          </div>
          {/*  */}
          <div className="flex flex-col gap-2 mt-6">
            <div className="flex gap-8 h-[27px]">
              <div className="flex items-center gap-2">
                <LocationIcon width={18} height={20} />
                <p className="text-lg leading-[150%] text-colorTextSecondary">
                  Grange Road, Selly Oak, Birmingham, B296AP{" "}
                  <span className="font-semibold text-colorButton">
                    Show on map
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <CalendarIcon width={18} height={20} fill="#50B533" />
                <p className="text-lg leading-[150%] text-colorTextSecondary">
                  Property Reference:{" "}
                  <span className="font-semibold">2191292</span>
                </p>
              </div>
            </div>

            <div className="flex gap-8 h-[27px]">
              <div className="flex items-center gap-2">
                <CalendarIcon width={18} height={20} fill="#50B533" />
                <p className="text-lg leading-[150%] text-colorTextSecondary">
                  Available from:{" "}
                  <span className="font-semibold ">1st January 2025</span>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <HomeFill width={24} height={24} fill="#50B533" />
                <p className="text-lg leading-[150%] text-colorTextSecondary">
                  Letting agent
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* carousel */}
        <VerticalCarousel />
      </div>
    </section>
  );
};

export default SingleListing;
