import { Button } from "@/components/ui/button";
import landlordAboutHouse from "../../../../../../assets/images/landlord-about-house.jpg";
import Image from "next/image";
import Link from "next/link";
import landlordWhyAdvertise from "../../../../../../assets/images/landlord-why-advertise.png";
import TrustPilot from "../../../Shared/TrustPilot";
import Reviews from "../../../Shared/Reviews";

const Landlords = () => {
  return (
    <div>
      {/* rental property */}
      <section className="bg-[rgba(238,248,235,0.78)]">
        <div className="w-[1216px] h-[540px] flex py-[80px] justify-center items-start gap-8 flex-shrink-0 m-auto">
          {/* property */}
          <div className="w-[592px] h-[380px] flex-shrink-0 rounded-lg bg-[rgba(213,237,206,0.6)] pl-10 pt-10 pr-[37px] pb-[36px]">
            <h2 className="self-stretch text-colorTextPrimary text-5xl font-bold leading-[60px]">
              List Your Rental Property!
            </h2>
            <p className="self-stretch text-colorTextSecondary text-base leading-[24px] mt-6">
              Once you create your first letting advert on Verv, we will review
              it and share it on Rightmove, Zoopla, Prime Location, and other
              major property portals.
            </p>
            <Button className="flex w-[272px] h-[56px] px-4 py-2 justify-center items-center gap-2 rounded-[32px] bg-colorButton text-lg font-semibold mt-8">
              Create Your Advert
            </Button>
          </div>
          {/* image */}
          <div className="w-[592px] h-[380px] flex-shrink-0 rounded-lg bg-[rgba(213,237,206,0.6)] relative">
            <Image
              src={landlordAboutHouse}
              alt="landlord-about-image"
              fill
              sizes="592px"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
      {/* trust pilot */}
      <div>
        <TrustPilot showTrustPilot={true} />
      </div>
      {/* perfect package */}
      <section className="w-[1216px] flex flex-col items-center gap-12 m-auto mt-16">
        <h2 className="text-3xl text-colorTextPrimary font-semibold leading-[38px]">
          Choose the perfect package for you
        </h2>
        <div className="flex items-center gap-8 self-stretch h-[452px]">
          {/* listing only */}
          <div className="flex flex-col w-[384px] h-full p-[48px_62px] justify-center items-center rounded-[24px] border border-[#EEF1F3] bg-[#F5F5F5]">
            <h3 className="text-colorTextPrimary text-2xl font-semibold leading-[120%] text-center mb-2">
              Listing Only
            </h3>
            <h4 className="text-colorTextPrimary text-lg font-semibold text-center">
              For Landlords & Agents
            </h4>
            <h1 className="text-[64px] text-[#A6AFBB] font-bold leading-[120%] my-[30px] text-center">
              ZERO
            </h1>
            <h3 className="text-colorTextPrimary text-lg font-semibold">
              Looking to List with
            </h3>
            <h3 className="text-colorTextPrimary text-lg font-semibold mb-auto">
              Verv only?
            </h3>
            <Button className="w-full h-[48px] p-2 border border-[#CED3D9] rounded-[8px] bg-white text-colorTextPrimary text-lg font-semibold hover:text-white">
              Add Listing Now for Free
            </Button>
          </div>
          {/* ultimate */}
          <div className="flex flex-col w-[384px] h-full p-[48px_55px] justify-center items-center rounded-[24px] border border-[#EEF1F3] bg-[#FAF4FF]">
            <h3 className="text-colorTextPrimary text-2xl font-semibold leading-[120%] text-center mb-2">
              Ultimate Advertising
            </h3>
            <h4 className="text-colorTextPrimary text-lg font-semibold text-center">
              Portal Advertising
            </h4>
            <div className="flex justify-center items-baseline gap-2 my-[30px]">
              <h1 className="text-[64px] text-colorTextPrimary font-bold leading-[120%] text-center">
                &#163;49
              </h1>
              <span className="text-lg text-colorTextPrimary font-medium">
                Inc. VAT
              </span>
            </div>
            <h3 className="text-colorTextPrimary text-lg font-semibold">
              For Landlords that want:
            </h3>
            <h3 className="text-colorTextPrimary text-lg font-semibold mb-auto">
              Portal Advertising (Zoopla etc.)
            </h3>
            <Button className="w-full h-[48px] p-2 border border-[#CED3D9] rounded-[8px] bg-colorTextPrimary text-lg font-semibold">
              Add Listing Now
            </Button>
          </div>
          {/* rent now */}
          <div className="flex flex-col w-[384px] h-full p-[48px_60px] justify-center items-center rounded-[24px] border border-[#EEF1F3] bg-[#EEF8EB]">
            <h3 className="text-colorTextPrimary text-2xl font-semibold leading-[120%] text-center mb-2">
              Rent Now
            </h3>
            <h4 className="text-colorTextPrimary text-lg font-semibold text-center">
              + Ultimate Advertising
            </h4>
            <div className="flex justify-center items-baseline gap-2 my-[30px]">
              <h1 className="text-[64px] text-colorButton font-bold leading-[120%] text-center">
                &#163;49
              </h1>
              <span className="text-lg text-colorTextPrimary font-medium">
                Inc. VAT
              </span>
            </div>
            <h3 className="text-colorTextPrimary text-lg font-semibold">
              For Landlords that want:
            </h3>
            <h3 className="text-colorTextPrimary text-lg font-semibold">
              Advertising + Tenant Creation
            </h3>
            <Link
              href=""
              className="text-colorTextLime text-lg font-medium underline decoration-solid decoration-auto underline-offset-auto mb-auto"
            >
              More Info
            </Link>
            <Button className="w-full h-[48px] p-2 border border-[#CED3D9] rounded-[8px] bg-colorButton text-lg font-semibold">
              Add Listing Now
            </Button>
          </div>
        </div>
      </section>

      {/* new opportunity */}

      <section className="flex flex-col justify-start w-[1216px] items-start gap-[24px] m-auto mt-[100px]">
        <div className="flex flex-col items-start gap-7 self-stretch">
          <p className="text-[#314660] font-semibold text-[30px] leading-[38px]">
            Explore New Opportunities for Landlords!
          </p>
          <p className="text-[#233244] font-normal text-[16px] leading-[24px] w-[833px]">
            Verv offers more than just property ads and listings. We provide a
            comprehensive tenancy creation service called Rent Now, along with
            everything you need to rent your property, including gas &
            electricity safety certificates, inventories, photography,
            insurance, and much more!
          </p>
        </div>
        <Button className="flex w-[262px] h-[52px] p-1.5 justify-center items-center gap-2 rounded-[32px] bg-colorButton">
          <span className="text-white font-medium text-[16px] leading-[24px]">
            See All OpenRent Products{" "}
          </span>
        </Button>
      </section>

      {/* Why Advertise with Verve? */}
      <section className="mt-[100px] py-20 bg-[#EEF1F3] shadow-[0_4px_200px_0_rgba(232,249,247,0.2)]">
        <div className="w-[1009px] h-[270px] flex items-center flex-shrink-0 gap-20 m-auto">
          {/* why advertise image */}
          <div className="w-[295px] h-full">
            <Image
              src={landlordWhyAdvertise}
              alt="why advertise with us image"
              width={295}
              height={270}
            />
          </div>
          <div className="flex flex-col items-start flex-shrink-0 w-[634.741px] h-full gap-[31.837px]">
            <h1 className="text-colorTextPrimary text-[47px] font-bold leading-[60px]">
              Why Advertise with Verve?
            </h1>
            <p className="font-semibold leading-[24px] text-colorTextSecondary">
              Verve is the cheapest and best way to advertise your rental
              property on the UK&apos;s major property websites. You&apos;ll
              save over <span className="text-colorButton">&#163;1,853</span>{" "}
              per property and find a tenant in 6 days on average. You&apos;ll
              get unbeatable coverage on Right-move, Zoopla and dozens more
              sites for just <span className="text-colorButton">&#163;49</span>.
            </p>
            <Button className="flex w-[168.137px] h-[51.734px] px-[15.918px] py-[5.969px] justify-center items-center gap-[7.959px] rounded-[31.837px] bg-colorButton font-medium leading-[24px]">
              Advertise Now
            </Button>
          </div>
        </div>
      </section>

      {/* what landlords saying */}
      <section className="mt-[100px]">
        <div className="w-[1216px] h-[425px] m-auto flex flex-col items-start gap-7">
          <h1 className="text-colorTextPrimary text-[30px] font-semibold leading-[38px] w-full text-center">
            What our landlords are saying:
          </h1>
          {/* landlord review carousel */}
          <Reviews />
        </div>
      </section>
    </div>
  );
};

export default Landlords;
