import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TopTourSummary`.
 */
export type TopTourSummaryProps = SliceComponentProps<Content.HeroSectionSlice>;

/**
 * Component for "TopTourSummary" Slices.
 */
const TopTourSummary = ({ slice }: TopTourSummaryProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col lg:flex-row lg:gap-[4.5rem]">
        <div className="w-full aspect-[25/22] overflow-hidden lg:aspect-[171/187] lg:w-6/12 2xl:aspect-[924/697]">
          <PrismicNextImage className="w-full h-full object-cover object-center" field={slice.primary.hero_image} />
        </div>
        <div className="max-w-[868px] pt-4 pb-6 px-4 lg:w-6/12 lg:pl-0 lg:pr-12 lg:pt-8 lg:pb-[1.125rem]">
          <div className="flex items-center justify-between mb-8 lg:justify-start lg:gap-5">
            <div className="flex items-center gap-[0.6rem]">
              <PrismicRichText
                field={slice.primary.title_trip_year}
                components={{
                  paragraph: ({ children }) => (
                    <p className="font-noto-sans text-gray font-semibold">
                      {children}
                    </p>
                  ),
                }}
              />
            </div>
          </div>

          <PrismicRichText
            field={slice.primary.title_hero}
            components={{
              heading2: ({ children }) => (
                <h2 className="text-[22px] leading-tight font-bold font-source-serif mb-2 text-gray lg:text-[32px] lg:mb-5">
                  {children}
                </h2>
              ),
            }}
          />

          <PrismicRichText
            field={slice.primary.description_hero}
            components={{
              paragraph: ({ children }) => (
                <p className="font-noto-sans text-gray text-sm leading-tight mb-8 mt-3.5 lg:text-base lg:my-3 lg:leading-[170%]">
                  {children}
                </p>
              ),
            }}
          />

          <div className="grid grid-cols-[repeat(2,1fr)] gap-[2rem_2rem] mt-[0.8rem] mb-6 lg:mt-3.5 lg:mb-6">
            {slice.primary.tour_info.map((item) => {
              return (
                <div>
                  <PrismicRichText
                    field={item.title_tour}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="text-gray font-semibold font-noto-sans">
                          {children}
                        </p>
                      ),
                    }}
                  />

                  <PrismicRichText
                    field={item.description_tour}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="text-sm text-gray leading-[150%] lg:text-base">
                          {children}
                        </p>
                      ),

                      hyperlink: ({ children, node }) => {
                        // Safely check if the target exists
                        const url = node.data.url;
                        // Only FilledLinkToWebField or FilledLinkToMediaField may have a target
                        const target = (node.data as any)?.target || "_self";
                        const rel = target === "_blank" ? "noopener noreferrer" : undefined;

                        return (
                          <a href={url} target={target} className="text-sm text-light-gray font-bold leading-[150%] lg:text-base border-b border-dotted border-[#e02044] inline" rel={rel}>
                            {children}
                          </a>
                        );
                      },
                    }}
                  />

                </div>
              )
            })}
          </div>
          <div className="w-full flex justify-between items-center gap-4 mb-6 border bg-transparent cursor-pointer no-underline p-4 rounded-md border-solid border-[#e6e6e6]">
            <PrismicNextLink field={slice.primary.cta_booking}>
              <PrismicRichText
                field={slice.primary.title_booking}
                components={{
                  heading2: ({ children }) => (
                    <h2 className="font-source-serif font-bold tracking-[-0.4px] text-lg mb-2 text-gray">
                      {children}
                    </h2>
                  ),
                }}
              />

              <PrismicRichText
                field={slice.primary.description_booking}
                components={{
                  paragraph: ({ children }) => (
                    <p className="font-noto-sans text-sm leading-tight text-light-gray tracking-[-0.1px]">
                      {children}
                    </p>
                  ),
                }}
              />
            </PrismicNextLink>
          </div>

          <div className="border-b-[#d9d9d9] border-b border-solid lg:border-none pb-5">
            <div className="flex">
              <PrismicRichText
                field={slice.primary.title_trip_code}
                components={{
                  paragraph: ({ children }) => (
                    <p className="font-semibold text-gray">
                      {children}
                    </p>
                  ),
                }}
              />

              <PrismicRichText
                field={slice.primary.trip_code}
                components={{
                  paragraph: ({ children }) => (
                    <p className="font-noto-sans text-light-gray">
                      {children}
                    </p>
                  ),
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-[1.5rem] py-[1.5rem] lg:py-[3rem]">
        {slice.primary.benefit_list.map((item) => {
          return (
            <div>
              <PrismicRichText
                field={item.title_benefit}
                components={{
                  paragraph: ({ children }) => (
                    <p className="font-noto-sans text-xs text-gray leading-[125%] lg:text-base font-semibold">
                      {children}
                    </p>
                  ),
                }}
              />
            </div>
          )
        })}
      </div>

      <div className="pl-[clamp(0.5rem,(100vw-1380px)/2,100vw)] pr-[clamp(0.5rem,(100vw-1380px)/2,100vw)]">
        <PrismicRichText
          field={slice.primary.marketing_message}
          components={{
            paragraph: ({ children }) => (
              <p className="text-white text-sm leading-[150%] bg-[#125A55] p-6 text-center rounded-md lg:text-base">
                {children}
              </p>
            ),

            strong: ({ children }) => (
              <strong className="font-bold text-white">
                {children}
              </strong>
            ),

            hyperlink: ({ children, node }) => {
              // Safely check if the target exists
              const url = node.data.url;
              // Only FilledLinkToWebField or FilledLinkToMediaField may have a target
              const target = (node.data as any)?.target || "_self";
              const rel = target === "_blank" ? "noopener noreferrer" : undefined;

              return (
                <a href={url} target={target} className="border-b border-dotted border-[#e02044] inline" rel={rel}>
                  {children}
                </a>
              );
            },
          }}
        />
      </div>


    </section>
  );
};

export default TopTourSummary;
