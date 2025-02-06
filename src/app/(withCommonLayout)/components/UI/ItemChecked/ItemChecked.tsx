import { CheckCircle, CrossIcon } from "@/assets/icons/icons";
import clsx from "clsx";

const ItemChecked = ({
  isChecked,
  item,
}: {
  isChecked: boolean;
  item: string;
}) => {
  return (
    <div
      className={clsx(
        "inline-flex items-center rounded-[32px] gap-2 p-2 w-fit",
        isChecked ? "bg-[#EEF8EB]" : "bg-[#FF00001A]"
      )}
    >
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
