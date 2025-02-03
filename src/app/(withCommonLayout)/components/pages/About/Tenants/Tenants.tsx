import { Button } from "@/components/ui/button";
import tenantWhyVerb from "../../../../../../assets/images/tenant-why-verb.png";

import PropertyDetailsCard from "./PropertyDetailsCard";
import Image from "next/image";
import TrustPilot from "../../../Shared/TrustPilot";
import { CircleFull, DownArrow } from "@/assets/icons/icons";

const Tenants = () => {
  return (
    <div>
      {/* Rent From Private Landlords */}
      <section className="py-[95px] bg-[#EEF1F3]">
        <div className="flex flex-col items-center gap-[40px] w-[885px] flex-shrink-0 m-auto">
          <div className="flex flex-col items-center gap-[28px] self-stretch">
            <div className="w-[885px]">
              <p className="text-[48px] font-bold leading-[60px] text-[#233244]">
                Rent from Private Landlords in the UK
              </p>
            </div>
            <div className="w-[724px]">
              <p className="text-center text-[18px] font-normal leading-[28px] text-[#233244]">
                Verve lets you deal directly with private landlords, with no
                admin fees. We’ve put the whole process online to save you time,
                effort and frustration!
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[8px]">
            <Button className="flex w-[245px] h-[56px] px-[12px] py-[8px] pl-[16px] justify-center items-center gap-[8px] rounded-[32px] bg-[#50B533]">
              <span className="text-[#FFF] text-lg font-medium leading-[28px]">
                Begin search now
              </span>
              <DownArrow width={29} height={28} stroke="white" />
            </Button>
            <Button className="flex w-[245px] h-[56px] px-[12px] py-[8px] pl-[16px] justify-center items-center gap-[8px] rounded-[32px] bg-[#50B533]">
              <span className="text-[#FFF] text-lg font-medium leading-[28px]">
                How it works
              </span>
              <DownArrow width={29} height={28} stroke="white" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why use verv */}
      <section className="m-auto  w-[733px] h-[373px] rounded-[28px] mt-[100px] p-[60px] bg-[rgba(238,248,235,0.7)]">
        <div className="w-[613px] flex items-center gap-[101.702px]">
          <div className="w-[272.201px] flex flex-col items-start gap-[31.906px] flex-shrink-0 ">
            <p className="self-stretch text-[#233244] text-[30px] font-semibold leading-[38px]">
              Why use Verve?
            </p>
            <div className="flex flex-col items-start gap-[19.941px] self-stretch">
              <div className="flex items-center gap-[11.965px]">
                <CircleFull width={20} height={21} fill="#50B533" />

                <span className="text-[#314660] text-[19.941px] font-medium leading-[19.941px]">
                  No Admin Fees
                </span>
              </div>
              <div className="flex items-center gap-[11.965px]">
                <CircleFull width={20} height={21} fill="#50B533" />
                <span className="text-[#314660] text-[19.941px] font-medium leading-[19.941px]">
                  No Dead Listings
                </span>
              </div>
              <div className="flex items-center gap-[11.965px]">
                <CircleFull width={20} height={21} fill="#50B533" />

                <span className="text-[#314660] text-[19.941px] font-medium leading-[19.941px]">
                  Rent & Deposit Protected
                </span>
              </div>
              <div className="flex items-center gap-[11.965px]">
                <CircleFull width={20} height={21} fill="#50B533" />
                <span className="text-[#314660] text-[19.941px] font-medium leading-[19.941px]">
                  All Online & Transparent
                </span>
              </div>
            </div>
          </div>
          <div className="w-[239.298px] h-[239.298px]">
            <Image
              src={tenantWhyVerb}
              alt="tenant-why-verb"
              width={239.298}
              height={239.298}
            />
          </div>
        </div>
      </section>

      {/* How verve works */}
      <section className="w-[1168px] m-auto mt-[78px]">
        <p className="text-colorTextPrimary text-center text-[30px] font-semibold leading-[38px] mb-[60px]">
          How Verve Works For Tenants
        </p>

        {/* design path */}
        <div>
          {/* first section */}
          <div className="flex justify-start items-center gap-[60px]">
            <div className="flex items-end">
              <PropertyDetailsCard
                header_text="Save Time by Filtering out Unsuitable Properties"
                middle_text="You'll only see properties that are available now, with no fees, appropriate pictures, and all the details up front. We have thousands of properties all over the UK."
                lower_text="As soon as a property isn't available, we take it offline. If you've already enquired about a property that gets taken, we'll email you right away. If you only want to see properties suitable for pets, DSS, students or families, then just tick a box and that's all you'll see."
              />

              <div className="relative">
                {/* circle */}
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 rounded-full bg-colorButton absolute -top-4">
                  <span className="text-white font-semibold leading-[20px]">
                    1
                  </span>
                </div>

                {/* path */}
                <div className="w-[291px] h-[170px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="292"
                    height="171"
                    viewBox="0 0 292 171"
                    fill="none"
                  >
                    <path
                      d="M0.5 1H275C283.837 1 291 8.16344 291 17V170.5"
                      stroke="#CED3D9"
                      strokeWidth="2"
                      strokeDasharray="8 5"
                    />
                  </svg>
                </div>

                {/* circle */}
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 rounded-full bg-colorButton absolute -right-4 bottom-0">
                  <span className="text-white font-semibold leading-[20px]">
                    2
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* second section */}
          <div className="flex justify-end items-center gap-[60px]">
            <div className="flex items-end">
              <div className="relative">
                {/* path */}
                <div className="w-[296px] h-[169px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="297"
                    height="170"
                    viewBox="0 0 297 170"
                    fill="none"
                  >
                    <path
                      d="M297 1H17C8.16345 1 1 8.16345 1 17L1.00003 170"
                      stroke="#CED3D9"
                      strokeWidth="2"
                      strokeDasharray="8 5"
                    />
                  </svg>
                </div>

                {/* circle */}
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 rounded-full bg-colorButton absolute -left-4 bottom-0">
                  <span className="text-white font-semibold leading-[20px]">
                    3
                  </span>
                </div>
              </div>
              <PropertyDetailsCard
                header_text="Save Time by Filtering out Unsuitable Properties"
                middle_text="You'll only see properties that are available now, with no fees, appropriate pictures, and all the details up front. We have thousands of properties all over the UK."
                lower_text="As soon as a property isn't available, we take it offline. If you've already enquired about a property that gets taken, we'll email you right away. If you only want to see properties suitable for pets, DSS, students or families, then just tick a box and that's all you'll see."
              />
            </div>
          </div>

          {/* third section */}
          <div className="flex justify-start items-center gap-[60px]">
            <div className="flex items-end">
              <PropertyDetailsCard
                header_text="Save Time by Filtering out Unsuitable Properties"
                middle_text="You'll only see properties that are available now, with no fees, appropriate pictures, and all the details up front. We have thousands of properties all over the UK."
                lower_text="As soon as a property isn't available, we take it offline. If you've already enquired about a property that gets taken, we'll email you right away. If you only want to see properties suitable for pets, DSS, students or families, then just tick a box and that's all you'll see."
              />

              <div className="relative">
                {/* path */}
                <div className="w-[291px] h-[170px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="292"
                    height="171"
                    viewBox="0 0 292 171"
                    fill="none"
                  >
                    <path
                      d="M0.5 1H275C283.837 1 291 8.16344 291 17V170.5"
                      stroke="#CED3D9"
                      strokeWidth="2"
                      strokeDasharray="8 5"
                    />
                  </svg>
                </div>

                {/* circle */}
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 rounded-full bg-colorButton absolute -right-4 bottom-0">
                  <span className="text-white font-semibold leading-[20px]">
                    4
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* fourth section */}
          <div className="flex justify-end items-center gap-[60px]">
            <div className="flex items-end">
              <div className="relative">
                {/* path */}
                <div className="w-[296px] h-[169px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="297"
                    height="170"
                    viewBox="0 0 297 170"
                    fill="none"
                  >
                    <path
                      d="M297 1H17C8.16345 1 1 8.16345 1 17L1.00003 170"
                      stroke="#CED3D9"
                      strokeWidth="2"
                      strokeDasharray="8 5"
                    />
                  </svg>
                </div>

                {/* circle */}
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 rounded-full bg-colorButton absolute -left-4 bottom-0">
                  <span className="text-white font-semibold leading-[20px]">
                    5
                  </span>
                </div>
              </div>
              <PropertyDetailsCard
                header_text="Save Time by Filtering out Unsuitable Properties"
                middle_text="You'll only see properties that are available now, with no fees, appropriate pictures, and all the details up front. We have thousands of properties all over the UK."
                lower_text="As soon as a property isn't available, we take it offline. If you've already enquired about a property that gets taken, we'll email you right away. If you only want to see properties suitable for pets, DSS, students or families, then just tick a box and that's all you'll see."
              />
            </div>
          </div>

          {/* fifth section */}
          <div className="flex justify-start items-center gap-[60px]">
            <div className="flex items-end">
              <PropertyDetailsCard
                header_text="Save Time by Filtering out Unsuitable Properties"
                middle_text="You'll only see properties that are available now, with no fees, appropriate pictures, and all the details up front. We have thousands of properties all over the UK."
                lower_text="As soon as a property isn't available, we take it offline. If you've already enquired about a property that gets taken, we'll email you right away. If you only want to see properties suitable for pets, DSS, students or families, then just tick a box and that's all you'll see."
              />

              <div className="relative">
                {/* path */}
                <div className="w-[291px] h-[170px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="292"
                    height="171"
                    viewBox="0 0 292 171"
                    fill="none"
                  >
                    <path
                      d="M0.5 1H275C283.837 1 291 8.16344 291 17V170.5"
                      stroke="#CED3D9"
                      strokeWidth="2"
                      strokeDasharray="8 5"
                    />
                  </svg>
                </div>

                {/* circle */}
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 rounded-full bg-colorButton absolute -right-4 bottom-0">
                  <span className="text-white font-semibold leading-[20px]">
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* sixth section */}
          <div className="flex justify-end items-center gap-[60px]">
            <div className="flex items-end">
              <div className="relative">
                {/* path */}
                <div className="w-[296px] h-[169px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="297"
                    height="170"
                    viewBox="0 0 297 170"
                    fill="none"
                  >
                    <path
                      d="M297 1H17C8.16345 1 1 8.16345 1 17L1.00003 170"
                      stroke="#CED3D9"
                      strokeWidth="2"
                      strokeDasharray="8 5"
                    />
                  </svg>
                </div>

                {/* circle */}
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 rounded-full bg-colorButton absolute -left-4 bottom-0">
                  <span className="text-white font-semibold leading-[20px]">
                    7
                  </span>
                </div>
              </div>
              <PropertyDetailsCard
                header_text="Save Time by Filtering out Unsuitable Properties"
                middle_text="You'll only see properties that are available now, with no fees, appropriate pictures, and all the details up front. We have thousands of properties all over the UK."
                lower_text="As soon as a property isn't available, we take it offline. If you've already enquired about a property that gets taken, we'll email you right away. If you only want to see properties suitable for pets, DSS, students or families, then just tick a box and that's all you'll see."
              />
            </div>
          </div>

          {/* seventh section */}
          <div className="flex justify-start items-center gap-[60px]">
            <div className="flex items-end">
              <PropertyDetailsCard
                header_text="Save Time by Filtering out Unsuitable Properties"
                middle_text="You'll only see properties that are available now, with no fees, appropriate pictures, and all the details up front. We have thousands of properties all over the UK."
                lower_text="As soon as a property isn't available, we take it offline. If you've already enquired about a property that gets taken, we'll email you right away. If you only want to see properties suitable for pets, DSS, students or families, then just tick a box and that's all you'll see."
              />
            </div>
          </div>
        </div>
      </section>

      {/* grow with verv */}
      <div className="mt-[78px]">
        <TrustPilot showGrow={true} />
      </div>
    </div>
  );
};

export default Tenants;
