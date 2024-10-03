import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import ArrowIcon from "@/components/icons/ico-next.svg";
import CheckIcon from "@/components/icons/ico-check.svg";
import QuestionIcon from "@/components/icons/ico-question.svg";
import { TripType } from "@/type/itenary.type";

const options: EmblaOptionsType = {
  loop: false,
  align: "start",
  slidesToScroll: 1,
  breakpoints: {
    768: {
      slidesToScroll: 1,
      dragFree: true,
      containScroll: "trimSnaps",
    },
  },
};

interface CarouselProps {
  trips: TripType[];
  title: any;
  idCard: any;
}

export const Carousel = ({ trips, title, idCard }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div className="text-center font-source-serif text-[22px] font-bold text-gray lg:text-left lg:text-[28px] lg:leading-[125%]">
          {title}
        </div>
        <div className="false hidden items-center gap-6 lg:flex">
          <button
            className="flex h-[47px] w-[47px] items-center justify-center rounded-full bg-[#e6e6e6] disabled:bg-[#F2F2F2]"
            onClick={scrollPrev}
          >
            <Image
              className="rotate-180"
              src={ArrowIcon}
              alt="Previous"
              width={24}
              height={24}
            />
          </button>
          <button
            className="flex h-[47px] w-[47px] items-center justify-center rounded-full bg-[#e6e6e6] disabled:bg-[#F2F2F2]"
            onClick={scrollNext}
          >
            <Image src={ArrowIcon} alt="Next" width={24} height={24} />
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="embla__viewport overflow-hidden" ref={emblaRef}>
          <div className="-ml-4 flex">
            {trips.map((trip) => (
              <div
                key={trip.id}
                className="min-w-0 shrink-0 grow-0 basis-full pl-4 lg:basis-1/2 xl:basis-1/3"
              >
                <div className="relative flex h-full w-full flex-col overflow-hidden rounded-md border border-[#e6e6e6] lg:rounded-lg">
                  <div
                    className={`absolute z-[2] m-2 rounded px-2 py-1 font-noto-sans text-sm font-bold leading-4 ${trip.label === "iconic" ? "bg-[#503454] text-white" : "bg-[#f5f5f5] text-gray"}`}
                  >
                    {trip.label === "iconic"
                      ? "Iconic Experience"
                      : "Optional Experience"}
                  </div>

                  <div className="aspect-[309/154] w-full overflow-hidden">
                    {trip.image}
                  </div>
                  <div className="flex flex-grow flex-col justify-between px-4">
                    <div className="py-4">
                      <p className="mb-2 font-source-serif text-sm font-bold text-gray lg:text-lg">
                        {trip.title}
                      </p>
                      <p className="line-clamp-3 font-noto-sans text-sm text-light-gray">
                        {trip.description}
                      </p>
                    </div>
                    {/* Conditional rendering based on trip.include */}
                    {trip.included === "true" && (
                      <div className="pb-4">
                        <div className="flex items-center gap-2">
                          <Image
                            src={CheckIcon}
                            alt=""
                            width={24}
                            height={24}
                          />
                          <span className="font-noto-sans text-xs font-bold text-[#503454] lg:text-sm">
                            Included with trip
                          </span>
                        </div>
                      </div>
                    )}

                    {trip.included === "false" && (
                      <div className="pb-4">
                        <a
                          target="_blank"
                          className="mb-4 block font-noto-sans text-sm font-bold text-gray"
                          rel="noreferrer"
                          href="www.google.com"
                        >
                          See more
                        </a>
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-noto-sans text-xs font-bold text-gray lg:text-sm">
                            Additional Cost Applies
                          </span>
                          <button>
                            <Image
                              src={QuestionIcon}
                              alt=""
                              width={24}
                              height={24}
                            />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Navigation - Visible only on screens smaller than 768px */}
        <div className="mt-4 flex justify-center sm:hidden">
          {/* Render dots based on the number of slides */}
          {trips.map((_, index) => (
            <button
              key={index}
              className="dot bg-gray-500 mx-1 h-3 w-3 rounded-full"
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
