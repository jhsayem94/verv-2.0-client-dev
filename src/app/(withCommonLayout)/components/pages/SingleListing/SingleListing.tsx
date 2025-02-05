import {
  CalendarIcon,
  CheckCircle,
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
import { Button } from "@/components/ui/button";

const SingleListing = () => {
  return (
    <>
      <section className="h-[973px] bg-[#EEF1F3] py-14">
        <div className="w-[1216px] h-[786px] m-auto">
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
                <TweeterShare width={40} height={40} fill="#1DA1F2" />
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
      <section className="w-[1216px] h-[182px] m-auto py-6 px-[35px] bg-white rounded-[24px] shadow-[0px_4px_20px_rgba(0,0,0,0.10)] -mt-[91px]">
        <div className="flex justify-center items-center gap-10">
          {/* amount */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-6">
              {/* per month */}
              <div className="flex flex-col items-center -gap-1">
                <h2 className="text-colorButton text-5xl font-bold leading-[120%]">
                  &#163;950
                </h2>
                <p className="text-lg text-colorTextSecondary leading-[150%]">
                  per month
                </p>
              </div>
              <p className="text-lg text-colorTextSecondary leading-[150%]">
                or
              </p>
              {/* week month */}
              <div className="flex flex-col items-center -gap-1">
                <h2 className="text-[24px] text-colorTextSecondary font-semibold leading-[120%]">
                  &#163;219.23
                </h2>
                <p className="text-lg text-colorTextSecondary leading-[150%]">
                  per week
                </p>
              </div>
            </div>

            {/* about fees */}
            <div className="flex items-center gap-4">
              {/* extra fees */}
              <div className="flex items-center gap-1 p-2 rounded-[32px] bg-[#EEF8EB]">
                <CheckCircle width={20} height={21} fill="#50B533" />
                <p className="text-sm text-colorTextPrimary leading-[150%]">
                  No extra fees
                </p>
              </div>

              {/* transparent pricing */}
              <div className="flex items-center gap-1 p-2 rounded-[32px] bg-[#EEF8EB]">
                <CheckCircle width={20} height={21} fill="#50B533" />
                <p className="text-sm text-colorTextPrimary leading-[150%]">
                  Transparent pricing
                </p>
              </div>
            </div>
          </div>
          {/* separator */}
          <div className="w-[1.5px] h-[120px] bg-colorTextPrimary opacity-10"></div>

          {/* rent */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-lg text-colorTextSecondary font-semibold">
              Proceed to Rent
            </h3>
            <Button className="py-[17px] px-[126px] rounded-[32px] bg-colorButton">
              Rent Now
            </Button>
          </div>
          {/* separator */}
          <div className="w-[1.5px] h-[120px] bg-colorTextPrimary opacity-10"></div>

          {/* viewing */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-lg text-colorTextSecondary font-semibold">
              Want to arrange a viewing?
            </h3>
            <Button className="py-[17px] px-[92.5px] rounded-[32px] bg-colorTextPrimary">
              Contact Landlord
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleListing;
