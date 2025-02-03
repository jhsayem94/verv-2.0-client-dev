import { FullStar } from "@/assets/icons/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Reviews = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[1152px] h-[364px] m-auto flex justify-center items-center"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/2 flex justify-center items-center"
          >
            <div className="w-[488px] h-[268px] px-[21px] py-[24px] rounded-[20px] border border-[rgba(196,198,201,0.6)] bg-white flex-shrink-0">
              <div className="flex flex-col items-start gap-7">
                {/* header */}
                <div className="flex justify-between items-start self-stretch">
                  {/* avatar */}
                  <div className="w-[208px] h-[48px] flex items-center gap-4">
                    <Avatar className="w-[48px] h-[48px]">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-colorTextPrimary font-semibold leading-[24px]">
                        David&apos;s Properties
                      </h3>
                      <p className="text-colorTextSecondary text-sm leading-[20px]">
                        13 November, 2024
                      </p>
                    </div>
                  </div>
                  {/* ratings */}
                  <div className="w-[98px] h-[22.615px]">
                    <FullStar width={98} height={23} fill="#FABA1D" />
                  </div>
                </div>
                {/* body */}
                <p className="text-colorTextPrimary leading-[24px]">
                  Happy to recommend OpenRent - smart, responsive, seamless
                  service. I was able to be a lot more flexible when negotiating
                  the rent because of using OpenRent and instead of paying lots
                  to an agent I was able to pay for a cooker and extra
                  plumbing/electrical work when I was right at the very end of
                  my renovation budget.
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-4 bg-colorButton" />
      <CarouselNext className="mr-4 bg-colorButton" />
    </Carousel>
  );
};

export default Reviews;
