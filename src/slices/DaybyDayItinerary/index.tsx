import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `DaybyDayItinerary`.
 */
export type DaybyDayItineraryProps =
  SliceComponentProps<Content.DaybyDayItinerarySlice>;

/**
 * Component for "DaybyDayItinerary" Slices.
 */
const DaybyDayItinerary = ({ slice }: DaybyDayItineraryProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for dayby_day_itinerary (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default DaybyDayItinerary;
