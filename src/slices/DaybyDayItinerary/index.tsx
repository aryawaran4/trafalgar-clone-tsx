import Accordion from "@/components/ui/itenary/accordion";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `DaybyDayItinerary`.
 */
export type DaybyDayItineraryProps =
  SliceComponentProps<Content.DaybyDayItinerarySlice>;

/**
 * Component for "DaybyDayItinerary" Slices.
 */
const DaybyDayItinerary = ({ slice }: DaybyDayItineraryProps): JSX.Element => {
  const items = slice.primary.cards.map((item) => ({
    banner: <PrismicNextImage className="object-cover w-full h-full" field={item.banner_card} />,
    day: <PrismicRichText field={item.day} />,
    title: <PrismicRichText field={item.title_card} />,
    location: item.location,
    label: item.label_format,
    benefit: item.list_benefit,
    description: <PrismicRichText field={item.description_card} />,
    image: <PrismicNextImage className="w-full h-full object-cover object-center" field={item.image_card} />,
    benefitList: {
      arrival: <PrismicRichText field={item.benefit_arrival_transfer} />,
      departure: <PrismicRichText field={item.benefit_departure_transfer} />,
      welcome: <PrismicRichText field={item.benefit_welcome} />,
      accommodation: {
        text: <PrismicRichText field={item.benefit_accommodation} />,
        notes: <PrismicRichText field={item.benefit_accommodation_notes} />,
      },
      meals: <PrismicRichText field={item.benefit_meals} />,
    },
  }));

  const downloadLink =
    slice.primary.download && "url" in slice.primary.download
      ? slice.primary.download.url
      : "";
  const printLink =
    slice.primary.print && "url" in slice.primary.print
      ? slice.primary.print.url
      : "";

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="px-4 py-6 lg:px-[clamp(0.5rem,(100vw_-_1380px)/2,100vw)] lg:py-12">
        <PrismicRichText
          field={slice.primary.heading}
          components={{
            heading2: ({ children }) => (
              <h2 className="mb-2 text-center font-source-serif text-[22px] font-bold leading-[125%] text-gray lg:text-left lg:text-[28px] lg:leading-[125%] xl:text-[32px]">
                {children}
              </h2>
            ),
          }}
        />
        <PrismicRichText
          field={slice.primary.description}
          components={{
            paragraph: ({ children }) => (
              <p className="text-center font-sans text-sm leading-[150%] text-light-gray lg:text-left">
                {children}
              </p>
            ),
          }}
        />
        <Accordion
          items={items}
          downloadLink={downloadLink}
          printLink={printLink}
        />
      </div>
    </section>
  );
};

export default DaybyDayItinerary;
