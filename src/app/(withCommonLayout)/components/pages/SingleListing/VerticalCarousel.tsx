import {
  Carousel,
  CarouselMainContainer,
  CarouselThumbsContainer,
  SliderMainItem,
  SliderThumbItem,
} from "@/components/extension/embala-carousel";

const VerticalCarousel = () => {
  return (
    <Carousel orientation="vertical" className="flex items-center gap-[32px]">
      {/* <CarouselNext />
      <CarouselPrevious /> */}
      <div className="relative w-[904px]">
        <CarouselMainContainer className="h-[528px]">
          {Array.from({ length: 10 }).map((_, index) => (
            <SliderMainItem
              key={index}
              className="border border-muted flex items-center justify-center h-[528px] rounded-md"
            >
              Slide {index + 1}
            </SliderMainItem>
          ))}
        </CarouselMainContainer>
      </div>
      <CarouselThumbsContainer className="h-[528px]">
        {Array.from({ length: 10 }).map((_, index) => (
          <SliderThumbItem
            key={index}
            index={index}
            className="rounded-md bg-transparent"
          >
            <span className="border border-muted flex items-center justify-center h-[160px] w-[280px] rounded-md cursor-pointer bg-background">
              Slide {index + 1}
            </span>
          </SliderThumbItem>
        ))}
      </CarouselThumbsContainer>
    </Carousel>
  );
};

export default VerticalCarousel;
