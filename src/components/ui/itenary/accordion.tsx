"use client";
import { useState } from "react";
import Image from "next/image";
import Chevron from "@/components/icons/ico-chevron.svg";
import Download from "@/components/icons/ico-download.svg";
import Print from "@/components/icons/ico-print.svg";
import AccordionItem from "./accordionItem";
import { ItenaryType } from "@/type/itenary.type";
import { handlePrint } from "@/components/utils/handlePrint";

interface AccordionProps {
  items: ItenaryType[];
  downloadLink: any;
  printLink: any;
}

export default function Accordion({
  items,
  downloadLink,
  printLink,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prevOpenItems) => {
      if (prevOpenItems.includes(index)) {
        // Close the item with a delay to match animation
        setTimeout(() => {
          setOpenItems((currentOpenItems) =>
            currentOpenItems.filter((item) => item !== index),
          );
        }, 300);
        return prevOpenItems;
      } else {
        // Open the item immediately
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

  // Download handler (could be a PDF or another file)
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = downloadLink;
    link.download = "itenary.pdf"; // You can change the filename
    link.click();
  };

  return (
    <div className="mx-auto my-8 w-full">
      <div className="mb-4 flex justify-between gap-2">
        <div className="flex items-center gap-4">
          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 font-noto-sans text-sm font-semibold text-[#2d5a7b] lg:text-base"
          >
            <Image src={Download} alt="Download" width={18} height={24} />
            Download itinerary
          </button>

          {/* Print Button */}
          <button
            onClick={() => handlePrint(printLink)}
            className="flex items-center gap-2 font-noto-sans text-sm font-semibold text-[#2d5a7b] lg:text-base"
          >
            <Image src={Print} alt="Print" width={24} height={24} />
            Print itinerary
          </button>
        </div>
        <button
          onClick={toggleExpandCollapseAll}
          className="flex items-center gap-2 py-[calc(1rem_-_1px)] font-noto-sans text-sm font-bold text-gray lg:text-base"
        >
          {areAllExpanded ? "Collapse All Days" : "Expand All Days"}
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
            item={item}
          />
        ))}
      </div>
    </div>
  );
}
