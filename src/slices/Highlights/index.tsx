import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Highlights`.
 */
export type HighlightsProps = SliceComponentProps<Content.HighlightsSlice>;

/**
 * Component for "Highlights" Slices.
 */
const Highlights = ({ slice }: HighlightsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      
    </section>
  );
};

export default Highlights;
