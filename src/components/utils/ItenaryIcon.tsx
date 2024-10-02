// Importing icons
import Arrival from "@/components/icons/ico-arrival.svg";
import Departure from "@/components/icons/ico-departure.svg";
import Welcome from "@/components/icons/ico-welcome.svg";
import Accommodation from "@/components/icons/ico-accommodation-moon.svg";
import Meals from "@/components/icons/ico-meals-complete.svg";
import { StaticImageData } from "next/image";
import { ItenaryType } from "@/type/itenary.type";

// Define the BenefitType interface
export interface BenefitType {
  [key: string]: {
    type: string;
    title: string;
    icon: StaticImageData;
    description?: JSX.Element;
    notes?: JSX.Element;
  };
}

// Define benefitTypes
const benefitTypes: BenefitType = {
  arrival: {
    type: "arrival",
    title: "Arrival Transfer",
    icon: Arrival,
  },
  departure: {
    type: "departure",
    title: "Departure Transfer",
    icon: Departure,
  },
  welcome: {
    type: "welcome",
    title: "Welcome",
    icon: Welcome,
  },
  accommodation: {
    type: "accommodation",
    title: "Accommodation",
    icon: Accommodation,
  },
  meals: {
    type: "meals",
    title: "Included Meals",
    icon: Meals,
  },
};

// Function to create the type objects based on input string
export const createTypeObjects = (
  inputString: string,
  benefitList: ItenaryType["benefitList"],
) => {
  // Split the string by comma and trim whitespace
  const inputTypes = inputString.split(",").map((item) => item.trim());

  // Set descriptions based on benefitList
  benefitTypes.arrival.description = benefitList.arrival;
  benefitTypes.departure.description = benefitList.departure;
  benefitTypes.welcome.description = benefitList.welcome;
  benefitTypes.accommodation.description = benefitList.accommodation.text; // Assuming you want the text part
  benefitTypes.accommodation.notes = benefitList.accommodation.notes;
  benefitTypes.meals.description = benefitList.meals;

  return inputTypes
    .map((input) => benefitTypes[input as keyof BenefitType]) // Cast to keyof BenefitType
    .filter(Boolean) as Array<{
    type: string;
    title: string;
    icon: StaticImageData;
    description?: JSX.Element;
    notes?: JSX.Element;
  }>;
};
