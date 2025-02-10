import {
  ListingArrowTip,
  ListingFullArrow,
  ListingHalfArrow,
} from "@/assets/icons/icons";
import { cn } from "@/lib/utils";

const ListingTab = ({
  isRoom,
  isDetails,
  isPreview,
  isPublish,
}: {
  isRoom?: boolean;
  isDetails?: boolean;
  isPreview?: boolean;
  isPublish?: boolean;
}) => {
  return (
    <div className="flex w-[1100px] m-auto">
      {/* property room */}
      <div className="relative w-[260px] h-[58px] flex justify-center items-center">
        <p className={cn("text-lg", isRoom ? "text-white" : "text-[#314660]")}>
          Add Property or Room
        </p>
        <div className="flex absolute top-0 left-0 -z-10">
          <div>
            <ListingFullArrow
              width={260}
              height={58}
              fill={isRoom ? "#50B533" : "#F5F7F7"}
            />
          </div>
        </div>
      </div>

      <div>
        <ListingArrowTip
          width={23}
          height={58}
          fill={isRoom ? "#50B533" : "#F5F7F7"}
        />
      </div>

      {/* property details */}
      <div className="relative w-[260px] h-[58px] flex justify-center items-center">
        <p
          className={cn("text-lg", isDetails ? "text-white" : "text-[#314660]")}
        >
          Property Details
        </p>
        <div className="flex absolute top-0 left-0 -z-10">
          <div>
            <ListingHalfArrow
              width={259}
              height={58}
              fill={isDetails ? "#50B533" : "#F5F7F7"}
            />
          </div>
        </div>
      </div>
      <div>
        <ListingArrowTip
          width={23}
          height={58}
          fill={isDetails ? "#50B533" : "#F5F7F7"}
        />
      </div>

      {/* Preview Listing */}
      <div className="relative w-[260px] h-[58px] flex justify-center items-center">
        <p
          className={cn("text-lg", isPreview ? "text-white" : "text-[#314660]")}
        >
          Preview Listing
        </p>
        <div className="flex absolute top-0 left-0 -z-10">
          <div>
            <ListingHalfArrow
              width={259}
              height={58}
              fill={isPreview ? "#50B533" : "#F5F7F7"}
            />
          </div>
        </div>
      </div>
      <div>
        <ListingArrowTip
          width={23}
          height={58}
          fill={isPreview ? "#50B533" : "#F5F7F7"}
        />
      </div>

      {/* Publish Listing */}
      <div className="relative w-[260px] h-[58px] flex justify-center items-center">
        <p
          className={cn("text-lg", isPublish ? "text-white" : "text-[#314660]")}
        >
          Publish Listing
        </p>
        <div className="flex absolute top-0 left-0 -z-10">
          <div>
            <ListingHalfArrow
              width={259}
              height={58}
              fill={isPublish ? "#50B533" : "#F5F7F7"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingTab;
