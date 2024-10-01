"use client";
import {
  AwaitedReactNode,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import Image from "next/image";
import Chevron from "../icons/ico-chevron.svg";
import Minus from "../icons/ico-minus.svg";
import Add from "../icons/ico-add.svg";

interface AccordionProps {
  items: { question: any; answer: any }[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prevOpenItems) => {
      if (prevOpenItems.includes(index)) {
        // If the item is already open, we need to close it with a delay
        setTimeout(() => {
          setOpenItems((currentOpenItems) =>
            currentOpenItems.filter((item) => item !== index),
          );
        }, 300); // Delay to match the closing animation duration
        return prevOpenItems; // Return the current state while closing
      } else {
        // If the item is closed, open it immediately
        return [...prevOpenItems, index];
      }
    });
  };

  const expandAll = () => {
    const allIndexes = items.map((_, index) => index);
    setOpenItems(allIndexes);
  };

  const collapseAll = () => {
    setOpenItems([]);
  };

  const areAllExpanded = openItems.length === items.length;

  const toggleExpandCollapseAll = () => {
    if (areAllExpanded) {
      collapseAll();
    } else {
      expandAll();
    }
  };

  return (
    <div className="mx-auto my-8 w-full">
      <div className="mb-4 flex justify-end gap-2">
        <button
          onClick={toggleExpandCollapseAll}
          className="flex items-center gap-2 py-[calc(1rem_-_1px)] font-noto-sans text-sm font-bold text-gray lg:text-base"
        >
          {areAllExpanded ? "Collapse All" : "Expand All"}
          <Image
            src={Chevron}
            alt="Chevron"
            width={16}
            height={16}
            className={`transition-transform duration-500 ${
              areAllExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
      <div className="space-y-2">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            isOpen={openItems.includes(index)}
            onClick={() => toggleItem(index)}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
}

interface AccordionItemProps {
  isOpen: boolean;
  onClick: () => void;
  question: string;
  answer: any[];
}

const AccordionItem = ({
  isOpen,
  onClick,
  question,
  answer,
}: AccordionItemProps) => {
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    onClick();
  };

  // Function to format the answer content
  const formatAnswer = (answer: any[]) => {
    return answer.map((item, index) => {
      // Check if the item type is 'p'
      if (item.type === "p") {
        const content = item.props.children[0][0]; // Access the text content

        // If the content is empty or just <br>, return a <br> element
        if (content.trim() === "") {
          return <br key={index} />;
        }

        // Handle children elements within the <p>
        return (
          <p key={item.key}>
            {item.props.children.map((child: any, childIndex: number) => {
              // Check if the child is an array (which might contain multiple elements)
              if (Array.isArray(child)) {
                return child.map((nestedChild, nestedIndex) => {
                  // Handle string content
                  if (typeof nestedChild === "string") {
                    return nestedChild.trim() !== "" ? (
                      <span key={nestedIndex}>{nestedChild}</span>
                    ) : null; // Skip empty strings
                  }

                  // Handle nested elements like links
                  if (
                    typeof nestedChild === "object" &&
                    nestedChild.type === "a"
                  ) {
                    return (
                      <a
                        key={nestedChild.key}
                        href={nestedChild.props.href}
                        target={nestedChild.props.target}
                        rel={nestedChild.props.rel}
                        className="inline border-b border-dotted border-[#e02044] hover:border-solid"
                      >
                        {nestedChild.props.children}
                      </a>
                    );
                  }

                  return null; // Fallback for any other type
                });
              } else {
                // Handle string content directly
                if (typeof child === "string") {
                  return child.trim() !== "" ? (
                    <span key={childIndex}>{child}</span>
                  ) : null; // Skip empty strings
                }

                // Handle nested elements like links
                if (typeof child === "object" && child.type === "a") {
                  return (
                    <a
                      key={child.key}
                      href={child.props.href}
                      target={child.props.target}
                      rel={child.props.rel}
                      className="inline border-b border-dotted border-[#e02044] hover:border-solid"
                    >
                      {child.props.children}
                    </a>
                  );
                }
              }

              return null; // Fallback for any other types
            })}
          </p>
        );
      }
      return null; // Fallback for any other types
    });
  };

  return (
    <div className="border border-[#e6e6e6]">
      <button
        onClick={handleClick}
        className={`flex w-full items-center justify-between gap-2 border p-3 font-noto-sans text-lg font-bold text-gray transition-all duration-500 lg:px-[1.25em] lg:py-[1em] ${
          isOpen
            ? "border-[#2d5a7b] bg-[#2d5a7b] text-white"
            : "border-[#e6e6e6] bg-white text-gray"
        }`}
      >
        <span className="text-left">{question}</span>
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e6e6e6]">
          <Image
            src={isOpen ? Minus : Add}
            alt={isOpen ? "Minus Icon" : "Add Icon"}
            width={16}
            height={16}
            className="transition-transform duration-500"
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen
            ? "max-h-[1000px] opacity-100" // Adjust max height as needed
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="w-full border border-t-0 border-[#2d5a7b] px-[20px] py-[10px] font-noto-sans text-base leading-6 text-gray transition-opacity duration-500 lg:text-lg">
          {/* Render the formatted answer */}
          {formatAnswer(answer)}
        </div>
      </div>
    </div>
  );
};
