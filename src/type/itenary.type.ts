export interface ItenaryType {
  id: any;
  banner: any;
  day: JSX.Element;
  title: JSX.Element;
  location: any;
  labelColor: any;
  labelText: any;
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
  titleTrip: JSX.Element
}
export interface TripType {
  id: any;
  label: any
  image: JSX.Element;
  title: JSX.Element
  description: JSX.Element
  included: any
}