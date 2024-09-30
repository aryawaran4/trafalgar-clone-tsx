import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Highlights`.
 */
export type HighlightsProps = SliceComponentProps<Content.HighlightsSlice> & {
  slices: Content.HighlightsSlice[]; // All slices in the document
};

/**
 * Component for "Highlights" Slices.
 */
const Highlights = ({ slice, index, slices }: HighlightsProps): JSX.Element => {
  // Determine if this is the last slice of this type
  const isLastOfType = slices
    .slice(index + 1)
    .every((s) => s.slice_type !== slice.slice_type);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col gap-4 px-4 py-6 lg:gap-0 lg:px-[clamp(0.5rem,(100vw_-_1380px)/2,100vw)] lg:py-12"
    >
      <PrismicRichText
        field={slice.primary.heading}
        components={{
          heading2: ({ children }) => (
            <h2 className="pb-0 pt-5 text-center font-source-serif text-[28px] font-bold leading-[125%] text-gray lg:py-6 lg:text-left xl:py-8 xl:text-3xl">
              {children}
            </h2>
          ),
        }}
      />

      <div className="flex flex-col lg:flex-row lg:gap-4">
        <div className="pb-6 lg:w-[30%] lg:p-0">
          <PrismicRichText
            field={slice.primary.title_section}
            components={{
              heading2: ({ children }) => (
                <p
                  className="text-center font-source-serif text-2xl font-bold leading-[125%] lg:text-left lg:text-lg xl:text-2xl"
                  style={{
                    color:
                      slice.primary.type === "travel" ? "#4B6B35" : "#6b6b6b",
                  }}
                >
                  {children}
                </p>
              ),
            }}
          />

          <PrismicRichText
            field={slice.primary.description_section}
            components={{
              paragraph: ({ children }) => (
                <p className="mt-2 text-center font-noto-sans text-sm text-light-gray lg:text-left">
                  {children}
                </p>
              ),
            }}
          />

          {isFilled.link(slice.primary.button) && (
            <PrismicNextLink
              className="mt-6 hidden w-fit bg-[#a7282e] px-[calc(2rem_-_1px)] py-[calc(1rem_-_1px)] text-center font-noto-sans text-base font-bold text-white lg:block"
              field={slice.primary.button}
            >
              Airport Transfers
            </PrismicNextLink>
          )}
        </div>

        <div className="flex flex-col lg:w-[70%] lg:flex-row lg:gap-6">
          {(() => {
            const totalItems = slice.primary.lists.length;
            const leftColumnCount = Math.ceil(totalItems / 2);
            const rightColumnCount = Math.floor(totalItems / 2);

            return (
              <>
                {/* Left column */}
                <div className="mt-6 flex flex-col gap-6 lg:mt-0 lg:w-6/12">
                  {slice.primary.lists
                    .slice(0, leftColumnCount)
                    .map((item, index) => (
                      <div className="flex gap-6" key={index}>
                        <div className="h-10 w-10 flex-none overflow-hidden">
                          <PrismicNextImage
                            field={slice.primary.icon_for_lists}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <PrismicRichText
                          field={item.detail}
                          components={{
                            paragraph: ({ children }) => (
                              <p className="font-noto-sans text-sm leading-[150%] text-gray lg:text-sm">
                                {children}
                              </p>
                            ),
                          }}
                        />
                      </div>
                    ))}
                </div>

                {/* Right column */}
                <div className="mt-6 flex flex-col gap-6 lg:mt-0 lg:w-6/12">
                  {slice.primary.lists
                    .slice(leftColumnCount, leftColumnCount + rightColumnCount)
                    .map((item, index) => (
                      <div className="flex gap-6" key={index}>
                        <div className="h-10 w-10 flex-none overflow-hidden">
                          <PrismicNextImage
                            field={slice.primary.icon_for_lists}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <PrismicRichText
                          field={item.detail}
                          components={{
                            paragraph: ({ children }) => (
                              <p className="font-noto-sans text-sm leading-[150%] text-gray lg:text-sm">
                                {children}
                              </p>
                            ),
                          }}
                        />
                      </div>
                    ))}
                </div>
              </>
            );
          })()}
        </div>

        {isFilled.link(slice.primary.button) && (
          <PrismicNextLink
            className="mx-auto mt-6 block w-fit bg-[#a7282e] px-[calc(2rem_-_1px)] py-[calc(1rem_-_1px)] text-center font-noto-sans text-base font-bold text-white lg:hidden"
            field={slice.primary.button}
          >
            Airport Transfers
          </PrismicNextLink>
        )}
      </div>

      {/* Render the border with padding only if this is NOT the last slice of its type */}
      {!isLastOfType && (
        <div
          style={{
            borderBottom: "1px solid #d9d9d9",
            paddingBottom: "3rem",
          }}
        />
      )}
    </section>
  );
};

export default Highlights;
