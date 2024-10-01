import Accordion from "@/components/ui/accordion";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FrequentlyAskedQuestions`.
 */
export type FrequentlyAskedQuestionsProps =
  SliceComponentProps<Content.FrequentlyAskedQuestionsSlice>;

/**
 * Component for "FrequentlyAskedQuestions" Slices.
 */
const FrequentlyAskedQuestions = ({
  slice,
}: FrequentlyAskedQuestionsProps): JSX.Element => {
  const items = slice.primary.qna.map((item) => ({
    question: <PrismicRichText field={item.question} />,
    answer: <PrismicRichText field={item.answer} />,
  }));

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
              <h2 className="mb-2 font-source-serif text-[22px] font-bold text-gray lg:text-[28px] xl:text-[32px]">
                {children}
              </h2>
            ),
          }}
        />
        <Accordion items={items} />
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
