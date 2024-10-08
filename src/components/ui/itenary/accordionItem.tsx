"use client";
import Chevron from "@/components/icons/ico-chevron.svg";
import Image from "next/image";
import { ItenaryType, TripType } from "@/type/itenary.type";
import { createTypeObjects } from "@/components/utils/ItenaryIcon";
import Arrow from "@/components/icons/ico-arrow.svg";
import Carousel from "@/components/ui/itenary/carousel";

interface AccordionItemProps {
  isOpen: boolean;
  onClick: () => void;
  item: ItenaryType;
  trips: TripType[];
}

const AccordionItem = ({
  isOpen,
  onClick,
  item,
  trips,
}: AccordionItemProps) => {
  const typeObjects = createTypeObjects(item.benefit, item.benefitList);

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    onClick();
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`relative flex w-full items-center justify-between overflow-hidden rounded-t-[.375rem] border border-[#e6e6e6] text-gray transition-all duration-500 ${
          isOpen ? "rounded-b-0 bg-[#f5f5f5]" : "rounded-b-[.375rem] bg-white"
        }`}
      >
        <div
          className={`absolute hidden h-full transition-all duration-500 md:block md:w-[200px] ${
            isOpen ? "left-[-999px]" : "left-0"
          }`}
        >
          {item.banner}
        </div>
        <div
          className={`flex w-full flex-col items-start gap-3 p-4 transition-all duration-500 md:px-6 md:py-5 ${
            isOpen ? "ml-0" : "md:ml-[200px]"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="font-noto-sans text-xs font-semibold text-light-gray lg:text-base">
              {item.day}
            </div>
            <div
              className="rounded-md px-2 py-1 font-noto-sans text-[10px] font-bold text-white lg:text-sm"
              style={{ backgroundColor: item.labelColor }}
            >
              {item.labelText}
            </div>
          </div>

          <div className="flex flex-col items-start gap-[.625rem] lg:flex-row lg:items-center lg:gap-[1rem]">
            <div className="text-left font-source-serif font-bold text-gray md:text-lg">
              {item.title}
            </div>
            <div className="flex items-center font-noto-sans text-sm font-normal text-light-gray">
              {item.location
                .split(",")
                .map((location: string, index: number, array: any) => (
                  <span key={index} className="flex items-center">
                    {location.trim()}
                    {index < array.length - 1 && (
                      <Image
                        src={Arrow}
                        alt={Arrow}
                        width={9}
                        height={9}
                        className="mx-1.5"
                      />
                    )}
                  </span>
                ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            {typeObjects
              .filter(
                (e) =>
                  e.type === "arrival" ||
                  e.type === "departure" ||
                  e.type === "welcome",
              )
              .map(({ type, title, icon }) => (
                <div key={type} className="flex items-center gap-2">
                  <Image src={icon} alt={title} width={24} />
                  <p className="font-noto-sans text-sm text-light-gray">
                    {title}
                  </p>
                </div>
              ))}
          </div>
        </div>

        <div className="flex gap-[.5rem] pr-[1rem] md:min-w-[115px]">
          <p className="hidden font-noto-sans text-base font-bold text-gray md:block">
            {isOpen ? "See less" : "See more"}
          </p>
          <Image
            src={Chevron}
            alt="Chevron"
            width={16}
            height={16}
            className={`transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded border border-[#e6e6e6] px-[0.8em] pb-[2.5em] pt-6 transition-opacity duration-500 lg:p-10">
          <div className="flex flex-col justify-between gap-4 md:flex-row lg:gap-14">
            <div className="opacity-1 flex-grow translate-y-0 transition-all duration-500 lg:w-1/2">
              <div className="mb-2 hidden font-noto-sans text-base font-semibold text-light-gray lg:block">
                {item.day}
              </div>
              <div className="mb-6 font-source-serif text-lg font-bold text-gray lg:mb-2 lg:text-[28px]">
                {item.title}
              </div>
              <div className="mb-4 font-noto-sans text-sm leading-[150%] text-light-gray lg:text-base lg:leading-[170%]">
                {item.description}
              </div>
              <div className="flex flex-col gap-5">
                {typeObjects.map(
                  ({ type, title, icon, description, notes }) => (
                    <div key={type}>
                      <div className="flex items-center gap-4">
                        <div className="p-1">
                          <Image src={icon} alt={title} width={24} />
                        </div>
                        <div className="flex items-start gap-1">
                          <span className="flex-shrink-0 font-noto-sans text-sm font-semibold text-gray lg:text-base">
                            {title}
                            <span className="font-noto-sans text-sm font-normal text-light-gray lg:text-base">
                              {description}
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="ml-[48px] font-noto-sans text-xs text-light-gray">
                        {notes}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="opacity-1 hidden aspect-video h-fit w-full translate-y-0 overflow-hidden rounded transition-all duration-500 md:block lg:max-w-[40%]">
              {item.image}
            </div>
          </div>

          <div className="mt-8">
            <Carousel idCard={item.id} title={item.titleTrip} trips={trips} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
