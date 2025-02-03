const PropertyDetailsCard = ({
  header_text,
  middle_text,
  lower_text,
}: {
  header_text: string;
  middle_text: string;
  lower_text: string;
}) => {
  return (
    <div className="flex w-[584px] p-[32px] pb-[40px] justify-center items-center rounded-[12px] bg-[#FCFCFC] shadow-[0px_1px_4px_0px_rgba(16,24,40,0.10),0px_1px_4px_0px_rgba(16,24,40,0.06)]">
      <div className="flex w-[520px] flex-col items-start gap-[16px] flex-shrink-0">
        <p className="self-stretch text-colorTextPrimary text-[30px] font-semibold leading-[38px]">
          {header_text}
        </p>
        <div className="flex flex-col items-start gap-[16px] self-stretch">
          <p className="self-stretch text-[#233244] text-[16px] font-normal leading-[24px]">
            {middle_text}
          </p>
          <p className="self-stretch text-[#233244] text-[16px] font-normal leading-[24px]">
            {lower_text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsCard;
