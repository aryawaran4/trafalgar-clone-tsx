export interface ItenaryType {
  banner: any;
  day: JSX.Element;
  title: JSX.Element;
  location: any;
  label: any;
  benefit: any;
  description: JSX.Element;
  image: JSX.Element;
  benefitList: {
    arrival: JSX.Element;
    departure: JSX.Element;
    welcome: JSX.Element;
    accommodation: { text: JSX.Element; notes: JSX.Element },
    meals: JSX.Element;
  };
}