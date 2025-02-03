import Image from "next/image";
import digitalBridge from "../../../../../assets/images/digital-bridge.png";
import { HexagonPerson, PentagonWifi } from "@/assets/icons/icons";

const HowItWork = () => {
  return (
    <section className="w-[345px] md:w-[1216px] mt-10 md:mt-[100px] m-auto flex justify-between items-center sm:flex-col md:flex-row">
      <div className="w-[345px] md:w-[520px]">
        <header className="text-center md:text-left">
          <h2 className="text-colorTextLime text-lg md:text-[20px] font-semibold leading-[120%] mb-4">
            HOW IT WORKS
          </h2>
          <h1 className="text-colorTextPrimary text-[28px] md:text-[32px] font-semibold leading-[1.2]">
            A Digital Bridge Between Landlords & Tenants
          </h1>
        </header>
        <div className="flex justify-center items-center self-stretch gap-6 sm:p-6 md:p-[41px_32px] rounded-[32px] bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.08)] mt-8">
          {/* Streamlined */}
          <div>
            <HexagonPerson width={48} height={48} />
          </div>
          <div>
            <h2 className="text-colorTextLime text-lg md:text-2xl font-semibold leading-[1.2]">
              Streamlined for Landlords
            </h2>
            <p className="text-colorTextSecondary text-sm md:text-lg leading-[1.5] mt-2">
              Manage listings, message tenants, see reviews, reference check,
              and create a tenancy from a simple dashboard.
            </p>
          </div>
        </div>

        {/* Empowered tenant */}
        <div className="flex justify-center items-center self-stretch gap-6 p-[41px_32px] rounded-[32px] bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.08)] mt-8">
          <div>
            <PentagonWifi width={40} height={41} />
          </div>
          <div>
            <h2 className="text-colorTextLime text-lg md:text-2xl font-semibold leading-[1.2]">
              Empowered Tenants
            </h2>
            <p className="text-colorTextSecondary text-sm md:text-lg leading-[1.5] mt-2">
              Access verified listings, view Landlord reviews, directly contact
              Landlords, enjoy transparent terms, and make secure payments all
              in one place.
            </p>
          </div>
        </div>
      </div>
      <Image
        src={digitalBridge}
        alt="Illustration of digital bridge between landlords and tenants"
        className="w-[345px] md:w-[603px] mt-10 md:mt-0"
      />
    </section>
  );
};

export default HowItWork;
