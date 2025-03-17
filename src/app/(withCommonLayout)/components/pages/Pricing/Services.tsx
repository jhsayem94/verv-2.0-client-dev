import { TAdditionalService } from "./pricingConstants";

const Services = ({ service }: { service: TAdditionalService }) => {
  return (
    <div
      key={service.id}
      className="border border-[#EEF1F3]  rounded-lg min-w-[370px]"
    >
      <div className="grid grid-cols-1 content-between p-5 h-[165px]">
        <div className="flex justify-between ">
          <h3 className="text-[#30455f] pr-4 w-[230px] text-[20px] font-semibold font-['Inter'] leading-normal ">
            {service.title}
          </h3>
          <div className="">
            <h4 className="text-[#56677d] text-[14px] font-normal font-['Inter'] leading-normal">
              From
            </h4>
            <h6 className="text-center text-[#50b533] text-[24px] font-semibold font-['Inter'] leading-[28.80px]">
              {service.price}
            </h6>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <a
            href="#"
            className="min-w-[230px] h-12 p-2 bg-[#30455f] rounded-lg justify-center items-center gap-2 inline-flex text-white text-[18px] font-semibold font-['Inter']"
          >
            Order
          </a>
          <div className="pb-2">
            <a
              href="#"
              className="text-[#56677d] text-[18px] font-medium font-['Inter'] underline"
            >
              More info
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
