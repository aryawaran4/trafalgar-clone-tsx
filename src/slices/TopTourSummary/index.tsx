import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import LowIcon from "@/components/icons/ico-wallet.svg";
import DepositIcon from "@/components/icons/ico-passport.svg";
import BookingIcon from "@/components/icons/ico-calendar.svg";
import TravelIcon from "@/components/icons/ico-date.svg";
import AccommodationIcon from "@/components/icons/ico-accomodation.svg";
import MealsIcon from "@/components/icons/ico-meals.svg";
import ItineraryIcon from "@/components/icons/ico-location-borderless.svg";
import NextImage from "next/image";

/**
 * Props for `TopTourSummary`.
 */
export type TopTourSummaryProps = SliceComponentProps<Content.HeroSectionSlice>;

/**
 * Helper function to get the correct icon based on the benefit type.
 */
const getBenefitIcon = (type: any) => {
  switch (type) {
    case "low":
      return LowIcon;
    case "deposit":
      return DepositIcon;
    case "booking":
      return BookingIcon;
    default:
      return null;
  }
};

/**
 * Helper function to get the correct tour info icon based on the text.
 */
const getTourInfoIcon = (text: any) => {
  switch (text) {
    case "travel":
      return TravelIcon;
    case "meals":
      return MealsIcon;
    case "accommodation":
      return AccommodationIcon;
    case "itinerary":
      return ItineraryIcon;
    default:
      return null;
  }
};

/**
 * Component for "TopTourSummary" Slices.
 */
const TopTourSummary = ({ slice }: TopTourSummaryProps): JSX.Element => (
  <section
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
  >
    <div className="flex flex-col lg:flex-row lg:gap-[4.5rem]">
      <div className="aspect-[25/22] w-full overflow-hidden lg:aspect-[171/187] lg:w-6/12 2xl:aspect-[924/697]">
        <PrismicNextImage
          className="h-full w-full object-cover object-center"
          field={slice.primary.hero_image}
        />
      </div>

      <div className="max-w-[868px] px-4 pb-6 pt-4 lg:w-6/12 lg:pb-[1.125rem] lg:pl-0 lg:pr-12 lg:pt-8">
        <div className="mb-8 flex items-center gap-[0.6rem] lg:gap-2">
          <NextImage src={TravelIcon} alt="Travel Icon" width={20} />
          <PrismicRichText
            field={slice.primary.title_trip_year}
            components={{
              paragraph: ({ children }) => (
                <p className="font-noto-sans font-semibold text-gray">
                  {children}
                </p>
              ),
            }}
          />
        </div>

        <PrismicRichText
          field={slice.primary.title_hero}
          components={{
            heading2: ({ children }) => (
              <h2 className="mb-2 font-source-serif text-[22px] font-bold leading-tight text-gray lg:mb-5 lg:text-[32px]">
                {children}
              </h2>
            ),
          }}
        />

        <PrismicRichText
          field={slice.primary.description_hero}
          components={{
            paragraph: ({ children }) => (
              <p className="mb-8 mt-3.5 font-noto-sans text-sm leading-tight text-gray lg:my-3 lg:text-base lg:leading-[170%]">
                {children}
              </p>
            ),
          }}
        />

        <div className="mb-6 mt-[0.8rem] grid grid-cols-2 gap-[2rem] lg:mb-6 lg:mt-3.5">
          {slice.primary.tour_info.map((item, index) => {
            const Icon = getTourInfoIcon(item.type_tour);
            return (
              <div key={index}>
                <PrismicRichText
                  field={item.title_tour}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="flex items-center gap-2 font-noto-sans font-semibold text-gray">
                        {Icon && (
                          <NextImage
                            src={Icon}
                            alt="Tour Info Icon"
                            width={20}
                            height={20}
                          />
                        )}
                        {children}
                      </p>
                    ),
                  }}
                />
                <PrismicRichText
                  field={item.description_tour}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="text-sm leading-[150%] text-gray lg:text-base">
                        {children}
                      </p>
                    ),
                    hyperlink: ({ children, node }) => {
                      const url = node.data.url;
                      const target = (node.data as any)?.target || "_self";
                      const rel =
                        target === "_blank" ? "noopener noreferrer" : undefined;

                      return (
                        <a
                          href={url}
                          target={target}
                          className="border-b border-dotted border-[#e02044] text-sm leading-[150%] text-gray hover:border-solid lg:text-base"
                          rel={rel}
                        >
                          {children}
                        </a>
                      );
                    },
                  }}
                />
              </div>
            );
          })}
        </div>

        <div className="mb-6 flex items-center justify-between gap-4 rounded-md border border-[#e6e6e6] p-4">
          <PrismicNextLink field={slice.primary.cta_booking}>
            <PrismicRichText
              field={slice.primary.title_booking}
              components={{
                heading2: ({ children }) => (
                  <h2 className="mb-2 font-source-serif text-lg font-bold tracking-[-0.4px] text-gray">
                    {children}
                  </h2>
                ),
              }}
            />
            <PrismicRichText
              field={slice.primary.description_booking}
              components={{
                paragraph: ({ children }) => (
                  <p className="font-noto-sans text-sm leading-tight tracking-[-0.1px] text-light-gray">
                    {children}
                  </p>
                ),
              }}
            />
          </PrismicNextLink>
        </div>

        <div className="border-b pb-5 lg:border-none">
          <div className="flex">
            <PrismicRichText
              field={slice.primary.title_trip_code}
              components={{
                paragraph: ({ children }) => (
                  <p className="font-semibold text-gray">{children}</p>
                ),
              }}
            />
            <PrismicRichText
              field={slice.primary.trip_code}
              components={{
                paragraph: ({ children }) => (
                  <p className="font-noto-sans text-light-gray">{children}</p>
                ),
              }}
            />
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-wrap justify-center gap-[2rem] py-[1.5rem] lg:py-[3rem]">
      {slice.primary.benefit_list.map((item, index) => {
        const Icon = getBenefitIcon(item.type_benefit);

        return (
          <div key={index} className="flex items-center">
            <div className="mr-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#f2f2f2]">
              {Icon && <NextImage src={Icon} alt="" width={24} height={24} />}
            </div>
            <PrismicRichText
              field={item.title_benefit}
              components={{
                paragraph: ({ children }) => (
                  <p className="font-noto-sans text-xs font-semibold leading-[125%] text-gray lg:text-base">
                    {children}
                  </p>
                ),
              }}
            />
          </div>
        );
      })}
    </div>

    <div className="px-[clamp(0.5rem,(100vw-1380px)/2,100vw)]">
      <PrismicRichText
        field={slice.primary.marketing_message}
        components={{
          paragraph: ({ children }) => (
            <p className="rounded-md bg-[#125A55] p-6 text-center text-sm leading-[150%] text-white lg:text-base">
              {children}
            </p>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-white">{children}</strong>
          ),
          hyperlink: ({ children, node }) => {
            const url = node.data.url;
            const target = (node.data as any)?.target || "_self";
            const rel = target === "_blank" ? "noopener noreferrer" : undefined;

            return (
              <a
                href={url}
                target={target}
                className="border-b border-dotted border-[#e02044] hover:border-solid"
                rel={rel}
              >
                {children}
              </a>
            );
          },
        }}
      />
    </div>
  </section>
);

export default TopTourSummary;
