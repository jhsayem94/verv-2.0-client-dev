import Image from "next/image";
import logo from "../../../../../assets/images/logo.png";
import rightMove from "../../../../../assets/images/right-move.png";
import zoopla from "../../../../../assets/images/zoopla.png";
import { Check } from "lucide-react";
import { TPricingPlan } from "./pricingConstants";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const PricingCard = ({ data }: { data: TPricingPlan }) => {
  const router = useRouter();
  return (
    <div
      className={`${data.bgClr}  rounded-3xl shadow-custom border border-[#eef1f3]  grid lg:grid-cols-3 grid-cols-1`}
    >
      <div className="flex justify-center lg:col-span-1  ">
        <div className=" grid grid-cols-1 gap-y-5 py-10 ">
          <div className="grid grid-cols-1 gap-y-5">
            <div className="">
              <h2 className="text-center text-[#30455f] text-[24px] font-semibold font-['Inter']  mb-3">
                {data.pricingTitle}
              </h2>
              <p className="text-[#30455f] text-center text-[18px] font-semibold font-['Inter']">
                For Landlords & Agents
              </p>
            </div>
            {data.price ? (
              <div className="justify-center items-baseline gap-2 inline-flex">
                <h1 className="text-center text-[#30455f] text-5xl font-bold font-['Inter'] leading-[57.60px]">
                  {data.price}
                </h1>
                <span className="text-[#30455f] text-lg font-medium font-['Inter']">
                  Inc. VAT
                </span>
              </div>
            ) : (
              <div className="text-center text-[#a6afbb] text-5xl font-bold font-['Inter'] leading-[57.60px]">
                ZERO
              </div>
            )}
          </div>
          <div className="self-stretch flex-col justify-start items-center gap-2 flex">
            <p className="w-[250px] text-center text-[#30455f] text-[14px] font-semibold font-['Inter'] leading-[21px]">
              {!data.price
                ? "Looking to List with Verv only?"
                : "Looking for more exposure? List with Zoopla & Rightmove!"}
            </p>
            <Button
              className={`w-auto  py-2 px-3 ${data.buttonColor} rounded-lg justify-center items-center gap-2 inline-flex`}
              onClick={() => router.push(`/checkout?planId=${data.planId}`)}
            >
              <span
                className={`${data.buttonText} text-[18px] font-semibold font-['Inter']`}
              >
                {data.buttonName}
              </span>
            </Button>
          </div>
        </div>
      </div>
      <div className="self-stretch lg:col-span-2 grid lg:grid-cols-2">
        <div className="lg:col-span-1 px-8 lg:pr-[143px] pt-6 lg:h-full pb-6 bg-white border-r border-[#30455f]/10 justify-start items-center ">
          <div className="grid grid-cols-1 gap-y-4 ">
            <h3 className="text-[#30455f] text-lg font-semibold font-['Inter']">
              {data.advertTitle}:
            </h3>
            <div className="grid grid-cols-1 gap-y-4 ">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="relative">
                  <Check
                    strokeWidth={2.5}
                    className="h-[17px] w-[17px] text-[#FFFFFF] bg-[#50B533] rounded-full p-1"
                  />
                </div>
                <Image alt="test" className="w-[61px] h-6" src={logo} />
              </div>
              {data.advertTitle !== "Active Listing on" && (
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="relative">
                    <Check
                      strokeWidth={2.5}
                      className="h-[17px] w-[17px] text-[#FFFFFF] bg-[#50B533] rounded-full p-1"
                    />
                  </div>
                  <Image
                    alt="test"
                    className="w-[132px] h-[24px]"
                    src={zoopla}
                  />
                </div>
              )}
              {data.advertTitle !== "Active Listing on" && (
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="relative">
                    <Check
                      strokeWidth={2.5}
                      className="h-[17px] w-[17px] text-[#FFFFFF] bg-[#50B533] rounded-full p-1"
                    />
                  </div>
                  <Image
                    alt="test"
                    className="w-[117px] h-[24px]"
                    src={rightMove}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="lg:col-span-1  px-8  py-5 lg:h-full bg-white flex-col justify-start items-start lg:rounded-r-3xl rounded-b-3xl lg:rounded-bl-none rounded-bl-3xl ">
          <div className="flex-col justify-start items-start gap-4 flex">
            <h3 className="text-[#30455f] text-[18px] font-semibold font-['Inter']">
              What’s included:
            </h3>
            <div className="flex-col justify-start items-start gap-2 flex">
              {data.offers.map((offer, i) => (
                <div
                  key={i}
                  className="p-2 bg-[#eef1f3] rounded-[32px] flex-col justify-start items-start gap-1 flex"
                >
                  <div className="self-stretch justify-start items-center gap-1 inline-flex">
                    <Check
                      strokeWidth={2.5}
                      className="h-[17px] w-[17px] text-[#FFFFFF] bg-[#50B533] rounded-full p-1"
                    />
                    <p className="text-[#30455f] text-[14px] font-normal font-['Inter'] leading-[21px]">
                      {offer.item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button className=" py-2 px-6 bg-white rounded-[32px] border-2 border-[#50B533] flex-col justify-center items-center gap-1 flex">
              <span className="text-[#50b533] text-[14px] font-semibold font-['Inter']">
                Show more
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
