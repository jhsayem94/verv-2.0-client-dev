import Image from "next/image";
import logo from "../../../../../assets/images/logo.png";
import {
  EmailIcon,
  FacebookIcon,
  InstIcon,
  LinkedinIcon,
  LocationWhite,
  PhoneIcon,
  TweeterIcon,
} from "@/assets/icons/icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="w-[1216px] m-auto flex items-start py-20">
        {/* first col */}
        <div className="w-[284px] mr-[120px]">
          <Image alt="Verv Logo" src={logo} width={137.951} height={56} />
          <div className="w-[284px] h-[2px] bg-[#EAECEE] my-6"></div>

          {/* location */}
          <div className="flex items-start gap-2">
            <LocationWhite width={24} height={24} />
            <p className="text-colorTextSecondary text-lg leading-[150%]">
              35A Highbury Corner, N5 1RA
            </p>
          </div>
          {/* contact */}
          <div className="flex items-start gap-2 my-6">
            <PhoneIcon width={24} height={24} />
            <p className="text-colorTextSecondary text-lg leading-[150%]">
              0207 170 8030
            </p>
          </div>

          {/* email */}
          <div className="flex items-start gap-2">
            <EmailIcon width={24} height={24} />
            <p className="text-colorTextSecondary text-lg leading-[150%]">
              hello@verv.org
            </p>
          </div>
        </div>

        {/* second col: about*/}
        <div className="w-[111px] mr-[80px]">
          <h3 className="text-colorTextPrimary text-sm font-semibold mb-4">
            ABOUT
          </h3>
          <p className="text-colorTextSecondary text-lg leading-[27px] mb-2">
            Company
          </p>
          <p className="text-colorTextSecondary text-lg leading-[27px] mb-2 w-[111px]">
            How it works
          </p>
          <p className="text-colorTextSecondary text-lg leading-[27px] mb-2">
            Contact
          </p>
          <p className="text-colorTextSecondary text-lg leading-[27px]">
            Investors
          </p>
        </div>

        {/* third col: rent*/}
        <div className="w-[142px] mr-[80px]">
          <h3 className="text-colorTextPrimary text-sm font-semibold mb-4">
            RENT
          </h3>
          <p className="text-colorTextSecondary text-lg leading-[27px] mb-2">
            Rent Properties
          </p>
          <p className="text-colorTextSecondary text-lg leading-[27px] mb-2">
            Reference Tenant
          </p>
          <p className="text-colorTextSecondary text-lg leading-[27px]">
            Landlord Hub
          </p>
        </div>

        {/* forth col: TERMS & PRIVACY*/}
        <div className="w-[144px] mr-[80px]">
          <h3 className="text-colorTextPrimary text-sm font-semibold mb-4">
            TERMS & PRIVACY
          </h3>
          <p className="text-colorTextSecondary text-lg leading-[27px] mb-2">
            Trust & Safety
          </p>
          <p className="text-colorTextSecondary text-lg leading-[27px] mb-2">
            Terms of Service
          </p>
          <p className="text-colorTextSecondary text-lg leading-[27px]">
            Privacy Policy
          </p>
        </div>

        {/* fifth col: TERMS & PRIVACY*/}
        <div className="w-[144px] mr-[80px]">
          <h3 className="text-colorTextPrimary text-sm font-semibold mb-4">
            RESOURCES
          </h3>
          <p className="text-colorTextSecondary text-lg leading-[27px] mb-2">
            Blog
          </p>
          <p className="text-colorTextSecondary text-lg leading-[27px] mb-2">
            Guides
          </p>
          <p className="text-colorTextSecondary text-lg leading-[27px] mb-2">
            FAQ
          </p>
          <p className="text-colorTextSecondary text-lg leading-[27px]">
            Help Center
          </p>
        </div>
      </div>
      <div className="w-full h-[1.5px] bg-[#E8E6F9]"></div>
      <div className="w-[1216px] m-auto flex justify-between items-center py-10">
        <p className="text-colorTextSecondary leading-[24px]">
          Copyright &copy; {currentYear} Verv. All rights reserved
        </p>
        <div className="flex items-start gap-10">
          <FacebookIcon width={24} height={24} />
          <InstIcon width={24} height={24} />
          <TweeterIcon width={24} height={24} />
          <LinkedinIcon width={24} height={24} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
