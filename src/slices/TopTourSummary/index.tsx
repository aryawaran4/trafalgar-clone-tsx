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
        <div className="aspect-[25/22] w-full overflow-hidden lg:aspect-[171/187] lg:w-6/12 2xl:aspect-[924/697]">
          <PrismicNextImage
            className="h-full w-full object-cover object-center"
            field={slice.primary.hero_image}
          />
        </div>

        <div className="max-w-[868px] px-4 pb-6 pt-4 lg:w-6/12 lg:pb-[1.125rem] lg:pl-0 lg:pr-12 lg:pt-8">
          <div className="mb-8 flex items-center justify-between lg:justify-start lg:gap-5">
            <div className="flex items-center gap-[0.6rem]">
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

          <div className="mb-6 mt-[0.8rem] grid grid-cols-[repeat(2,1fr)] gap-[2rem_2rem] lg:mb-6 lg:mt-3.5">
            {slice.primary.tour_info.map((item) => {
              return (
                <div>
                  <PrismicRichText
                    field={item.title_tour}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="font-noto-sans font-semibold text-gray">
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
                        // Safely check if the target exists
                        const url = node.data.url;
                        // Only FilledLinkToWebField or FilledLinkToMediaField may have a target
                        const target = (node.data as any)?.target || "_self";
                        const rel =
                          target === "_blank"
                            ? "noopener noreferrer"
                            : undefined;

                        return (
                          <a
                            href={url}
                            target={target}
                            className="inline border-b border-dotted border-[#e02044] text-sm font-bold leading-[150%] text-light-gray lg:text-base"
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

          <div className="mb-6 flex w-full cursor-pointer items-center justify-between gap-4 rounded-md border border-solid border-[#e6e6e6] bg-transparent p-4 no-underline">
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

          <div className="border-b border-solid border-b-[#d9d9d9] pb-5 lg:border-none">
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

      <div className="flex flex-wrap justify-center gap-[1.5rem] py-[1.5rem] lg:py-[3rem]">
        {slice.primary.benefit_list.map((item) => {
          return (
            <div>
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

      <div className="pl-[clamp(0.5rem,(100vw-1380px)/2,100vw)] pr-[clamp(0.5rem,(100vw-1380px)/2,100vw)]">
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
              // Safely check if the target exists
              const url = node.data.url;
              // Only FilledLinkToWebField or FilledLinkToMediaField may have a target
              const target = (node.data as any)?.target || "_self";
              const rel =
                target === "_blank" ? "noopener noreferrer" : undefined;

              return (
                <a
                  href={url}
                  target={target}
                  className="inline border-b border-dotted border-[#e02044]"
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
};

export default TopTourSummary;
