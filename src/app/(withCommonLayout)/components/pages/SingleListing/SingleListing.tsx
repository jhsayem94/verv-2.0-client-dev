import {
  CalendarIcon,
  FacebookShare,
  HomeFill,
  InstagramShare,
  LinkedinShare,
  LocationIcon,
  ReportIcon,
  TweeterShare,
  WhatsappShare,
  YouTubeShare,
} from "@/assets/icons/icons";
import VerticalCarousel from "./VerticalCarousel";

const SingleListing = () => {
  return (
    <section className="h-[917px] bg-[#EEF1F3] py-14">
      <div className="w-[1216px] h-[786px] m-auto bg-red-300">
        {/* basic property information */}
        <div className="mb-6">
          <p className="text-colorTextSecondary text-lg font-medium mb-6">
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

        {/* share property */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-6">
            <p>Share Property</p>
            <div className="flex items-center gap-4">
              <FacebookShare width={40} height={40} fill="#1877F2" />
              <TweeterShare width={40} height={40} fill="##1DA1F2" />
              <LinkedinShare width={40} height={40} fill="#2867B2" />
              <YouTubeShare width={40} height={40} fill="#FF0000" />
              <InstagramShare width={40} height={40} fill="#F00073" />
              <WhatsappShare width={40} height={40} fill="#25D366" />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <ReportIcon width={16} height={14} fill="#56677D" />
            <p className="text-colorTextSecondary leading-[150%]">
              Report Listing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleListing;
