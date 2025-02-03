import { Button } from "@/components/ui/button";
import vervAbout from "../../../../../../assets/images/verv-about.jpg";
import vervHouse from "../../../../../../assets/images/verv-house.png";
import vervDoll from "../../../../../../assets/images/verv-doll.png";
import Image from "next/image";
import VervAccordion from "./VervAccordion";
import Reviews from "../../../Shared/Reviews";
import AreLandlord from "../../../Shared/AreLandlord";
import { CalendarIcon, HomeFill } from "@/assets/icons/icons";

const Verv = () => {
  return (
    <div>
      {/* hero section */}
      <section className="py-20 bg-[#EEF1F3] mb-[100px]">
        <div className="w-[1216px] m-auto flex justify-between items-center gap-8">
          <div
            className="w-[600px] h-[395px] rounded-[40px] bg-gray-300 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${vervAbout.src})` }}
          ></div>
          <div className="w-[600px] h-[395px] flex flex-col gap-6 justify-center">
            <h1 className="text-colorTextPrimary text-[48px] font-bold leading-[60px]">
              Find the perfect match between Landlords and Tenants!
            </h1>
            <p className="text-colorTextSecondary text-lg leading-[28px]">
              Since its founding in 2018, Verv has grown to become the UK’s
              largest letting agent, with one clear mission: to make renting
              fairer, safer, and more affordable for everyone.
            </p>
            <Button className="font-semibold text-sm flex w-[147px] h-[40px] px-[16px] py-[8px] justify-center items-center gap-[8px] rounded-[32px] bg-colorButton">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* tailored for property */}
      <section className="w-[1216px] h-[811px] m-auto flex justify-between items-start gap-[33px] mb-[100px]">
        <div className="w-[489px] flex flex-col items-start gap-[50px] self-stretch">
          <div className="flex flex-col items-start gap-6 self-stretch">
            <h2 className="text-colorTextPrimary text-4xl font-bold leading-[44px]">
              Tailored for Property Owners and Renters
            </h2>
            <p className="text-colorTextSecondary leading-[24px]">
              Welcome to Verv, where we transform the rental experience for both
              landlords and tenants. Say goodbye to hidden fees, outdated
              listings, and the expensive 10% commissions landlords once paid.
              The future of renting is here—more transparent, efficient, and
              cost-effective than ever!
            </p>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {/* first box */}
            <div className="inline-flex items-center p-[20px_47px_20px_20px] rounded-[12px] bg-[var(--secondary-1,#EEF1F3)]">
              <div className="flex flex-col items-start gap-[4px]">
                <div className="flex items-center gap-[6px]">
                  <CalendarIcon width={16} height={18} fill="#50B533" />
                  <p className="text-[var(--secondary-8,#233244)] text-center font-inter text-[18px] font-bold leading-[28px]">
                    6 Days
                  </p>
                </div>
                <p className="w-[98px] text-[var(--secondary-5,#56677D)] font-inter text-[14px] font-medium leading-[20px]">
                  Average to Let
                </p>
              </div>
            </div>
            {/* second box */}
            <div className="inline-flex p-[20px_54px_20px_20px] items-center rounded-[12px] bg-[var(--secondary-1,#EEF1F3)]">
              <div className="flex flex-col items-start gap-[4px]">
                <div className="flex items-center gap-[6px]">
                  <HomeFill width={20} height={20} fill="#50B533" />
                  <p className="text-[var(--secondary-8,#233244)] text-center font-inter text-[18px] font-bold leading-[28px]">
                    1,269,346
                  </p>
                </div>
                <p className="text-[var(--secondary-5,#56677D)] font-inter text-[14px] font-medium leading-[20px]">
                  Properties Let On Verve
                </p>
              </div>
            </div>
            {/* third */}
            <div className="inline-flex p-[20px_10px_20px_20px] items-center rounded-[12px] bg-[var(--secondary-1,#EEF1F3)]">
              <div className="flex flex-col items-start gap-[4px]">
                <div className="flex items-center gap-[6px]">
                  <CalendarIcon width={16} height={18} fill="#50B533" />
                  <p className="text-[var(--secondary-8,#233244)] text-center font-inter text-[18px] font-bold leading-[28px]">
                    7,078,438
                  </p>
                </div>
                <p className="text-[var(--secondary-5,#56677D)] font-inter text-[14px] font-medium leading-[20px]">
                  Registered Landlords & Te..
                </p>
              </div>
            </div>
            {/* fourth */}
            <div className="inline-flex p-[20px] items-center rounded-[12px] bg-[var(--secondary-1,#EEF1F3)]">
              <div className="flex flex-col items-start gap-[4px]">
                <div className="flex items-center gap-[6px]">
                  <CalendarIcon width={16} height={18} fill="#50B533" />
                  <p className="text-[var(--secondary-8,#233244)] text-center font-inter text-[18px] font-bold leading-[28px]">
                    No Admin Fee
                  </p>
                </div>
                <p className="w-[98px] text-[var(--secondary-5,#56677D)] font-inter text-[14px] font-medium leading-[20px]">
                  Since 2012
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[694px] flex flex-col items-start gap-[16px]">
          {/* first part */}
          <div className="relative h-[399px] self-stretch rounded-[16px] border border-[#CED3D9] bg-[#FCFCFC]">
            <p className="text-[#398124] text-[24px] font-semibold leading-[32px] pl-[28px] pt-[28px] mb-[16px]">
              Landlords
            </p>
            <div className="absolute top-[28px] right-[28px]">
              <Image
                src={vervHouse}
                alt="house Image"
                height={112}
                width={139}
              />
            </div>
            <div className="flex flex-col w-[596px] h-[224px] shrink-0 pl-[28px] gap-[16px]">
              <p className="w-[476px] text-colorTextPrimary leading-[24px]">
                You want renting out your property or room to be cheap, painless
                and risk-free. So did we, and in 2012 we fixed it. We now let
                more properties than anyone else in the UK.
              </p>
              <p className="w-[596px] text-colorTextPrimary leading-[24px]">
                Our prices are totally transparent. Starting from a totally free
                service, ranging up to a £69 service for our full tenant-find
                package which includes advertising on Rightmove, Zoopla and
                other major property portals.
              </p>
              <p className="w-[596px] text-colorTextPrimary leading-[24px]">
                We&apos;ll guide you through every step, from creating your
                advert to finding the perfect tenant and handling everything
                needed to set up the tenancy.
              </p>
            </div>

            <div className="pl-[28px] pt-[16px]">
              <Button className="text-[16px] font-medium leading-[24px] flex w-[168px] h-[44px] p-[6px_16px] justify-center items-center gap-[8px] shrink-0 rounded-[32px] bg-[#50B533]">
                Find Out More
              </Button>
            </div>
          </div>
          {/* second part */}
          <div className="relative h-[396px] self-stretch rounded-[16px] border border-[#CED3D9] bg-[#FCFCFC]">
            <p className="text-[#398124] text-[24px] font-semibold leading-[32px] pl-[28px] pt-[28px] mb-[16px]">
              Tenants
            </p>
            <div className="absolute top-[28px] right-[28px]">
              <Image src={vervDoll} alt="verv doll" height={128} width={139} />
            </div>
            <div className="flex flex-col w-[596px] h-[224px] shrink-0 pl-[28px] gap-[16px] mb-[24px]">
              <p className="w-[476px] text-colorTextPrimary leading-[24px]">
                At Verv, we believe everyone should be able to find their dream
                home while feeling safe and in control.
              </p>
              <p className="w-[596px] text-colorTextPrimary leading-[24px]">
                We were the pioneers in banning tenant fees, and we continue to
                offer the best experience for tenants. Say goodbye to fake
                listings, pushy agents, and unnecessary trips to the office.
              </p>
              <p className="w-[596px] text-colorTextPrimary leading-[24px]">
                We make it simple to find the perfect landlord with filters for
                DSS, pets, students, and other groups often overlooked by the
                market. No matter what you&apos;re looking for, finding a new
                home has never been easier.
              </p>
            </div>

            <div className="pl-[28px]">
              <Button className="text-[16px] font-medium leading-[24px] flex w-[168px] h-[44px] p-[6px_16px] justify-center items-center gap-[8px] shrink-0 rounded-[32px] bg-[#50B533]">
                Find Out More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* frequent questions */}
      <section className="w-[1009px] m-auto">
        <h2 className="text-colorTextPrimary text-4xl font-bold leading-[44px] text-center mb-[60px]">
          Frequently Asked Questions
        </h2>
        {/* accordion */}
        <VervAccordion />
      </section>

      {/* our happy clients */}
      <section className="mt-[100px]">
        <div className="w-[1216px] h-[425px] m-auto flex flex-col items-start gap-7">
          <h1 className="text-colorTextPrimary text-[30px] font-semibold leading-[38px] w-full text-center">
            Our happy clients
          </h1>
          {/* clients review carousel */}
          <Reviews />
        </div>
      </section>
      <AreLandlord />
    </div>
  );
};

export default Verv;
