import { CheckCircle, CrossIcon } from "@/assets/icons/icons";

const ItemChecked = ({
  isChecked,
  item,
}: {
  isChecked: boolean;
  item: string;
}) => {
  return (
    <div className="inline-flex items-center rounded-[32px] bg-[#EEF8EB] gap-2 p-2 w-fit">
      {isChecked ? (
        <CheckCircle width={24} height={25} fill="#50B533" />
      ) : (
        <CrossIcon width={24} height={25} fill="#FF0000" />
      )}
      <p className="text-lg text-colorTextPrimary leading-[150%]">{item}</p>
    </div>
  );
};

export default ItemChecked;
