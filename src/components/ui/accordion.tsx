"use client";
import { useState } from "react";
import Image from "next/image";
import Chevron from "../icons/ico-chevron.svg";
import Minus from "../icons/ico-minus.svg";
import Add from "../icons/ico-add.svg";
import { formatAnswer } from "../utils/formatAnswer";

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
            ? "opacity-100" // Adjust max height as needed
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
