import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeroSection`.
 */
export type HeroSectionProps = SliceComponentProps<Content.HeroSectionSlice>;

/**
 * Component for "HeroSection" Slices.
 */
const HeroSection = ({ slice }: HeroSectionProps): JSX.Element => {
  return (
    <section
      className="flex flex-col lg:flex-row lg:gap-[4.5rem]"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="w-full aspect-[25/22] overflow-hidden lg:aspect-[171/187] lg:w-6/12 2xl:aspect-[924/697]">
        <PrismicNextImage className="w-full h-full object-cover object-center" field={slice.primary.hero_image} />
      </div>
      <div className="max-w-[868px] pt-4 pb-6 px-4 lg:w-6/12 lg:pl-0 lg:pr-12 lg:pt-8 lg:pb-[1.125rem]">
        <div className="trip-year-wrapper">
          <div className="trip-year-title">
            <PrismicNextImage field={slice.primary.icon_trip} />
            <PrismicRichText field={slice.primary.title_trip_year} />
          </div>
          <div className="trip-year-date-picker">
            {slice.primary.date_picker_trip_year.map((item) => {
              return (
                <div className="date-picker">
                  {item.date_picker}
                </div>
              )
            })}
          </div>
        </div>
        <PrismicRichText field={slice.primary.title_trip_year} />
        <PrismicRichText field={slice.primary.description_hero} />
        <div className="tour-info-list">
          {slice.primary.tour_info.map((item) => {
            return (
              <div className="tour-info">
                <PrismicNextImage field={item.icon_tour} />
                <PrismicRichText field={item.title_tour} />
                <PrismicRichText field={item.description_tour} />
                {/* <PrismicNextImage field={item.icon_tour_info} /> */}
                <PrismicRichText field={item.hover_tour_info} />
                <PrismicNextLink field={item.cta_tour}>
                  Link
                </PrismicNextLink>
              </div>
            )
          })}
        </div>
        <div className="booking-wrapper">
          <PrismicNextLink field={slice.primary.cta_booking}>
            <PrismicRichText field={slice.primary.title_booking} />
            <PrismicRichText
              field={slice.primary.description_booking}
            />
          </PrismicNextLink>
        </div>
        <div className="trip-code">
          <PrismicRichText field={slice.primary.title_trip_code} />
          <PrismicRichText field={slice.primary.trip_code} />
        </div>
      </div>


    </section>
  );
};

export default HeroSection;
