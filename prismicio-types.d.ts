// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type ToursDocumentDataSlicesSlice =
  | DaybyDayItinerarySlice
  | FrequentlyAskedQuestionsSlice
  | HighlightsSlice
  | HeroSectionSlice;

/**
 * Content for Tours documents
 */
interface ToursDocumentData {
  /**
   * Slice Zone field in *Tours*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: tours.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ToursDocumentDataSlicesSlice> /**
   * Meta Title field in *Tours*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: tours.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Tours*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: tours.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Tours*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: tours.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Tours document from Prismic
 *
 * - **API ID**: `tours`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ToursDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<ToursDocumentData>, "tours", Lang>;

export type AllDocumentTypes = ToursDocument;

/**
 * Item in *DaybyDayItinerary → Default → Primary → Cards*
 */
export interface DaybyDayItinerarySliceDefaultPrimaryCardsItem {
  /**
   * Card Id field in *DaybyDayItinerary → Default → Primary → Cards*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dayby_day_itinerary.default.primary.cards[].card_id
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  card_id: prismic.KeyTextField;

  /**
   * Banner Card field in *DaybyDayItinerary → Default → Primary → Cards*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: dayby_day_itinerary.default.primary.cards[].banner_card
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  banner_card: prismic.ImageField<never>;

  /**
   * Day field in *DaybyDayItinerary → Default → Primary → Cards*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dayby_day_itinerary.default.primary.cards[].day
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  day: prismic.RichTextField;

  /**
   * Title Card field in *DaybyDayItinerary → Default → Primary → Cards*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dayby_day_itinerary.default.primary.cards[].title_card
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title_card: prismic.RichTextField;

  /**
   * Location field in *DaybyDayItinerary → Default → Primary → Cards*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dayby_day_itinerary.default.primary.cards[].location
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  location: prismic.KeyTextField;

  /**
   * Description Card field in *DaybyDayItinerary → Default → Primary → Cards*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dayby_day_itinerary.default.primary.cards[].description_card
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description_card: prismic.RichTextField;

  /**
   * Label Text field in *DaybyDayItinerary → Default → Primary → Cards*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dayby_day_itinerary.default.primary.cards[].label_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  label_text: prismic.RichTextField;

  /**
   * Label Color field in *DaybyDayItinerary → Default → Primary → Cards*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dayby_day_itinerary.default.primary.cards[].label_color
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label_color: prismic.KeyTextField;

  /**
   * List Benefit field in *DaybyDayItinerary → Default → Primary → Cards*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dayby_day_itinerary.default.primary.cards[].list_benefit
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  list_benefit: prismic.KeyTextField;

  /**
   * Image Card field in *DaybyDayItinerary → Default → Primary → Cards*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: dayby_day_itinerary.default.primary.cards[].image_card
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_card: prismic.ImageField<never>;

  /**
   * Benefit Arrival Transfer field in *DaybyDayItinerary → Default → Primary → Cards*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dayby_day_itinerary.default.primary.cards[].benefit_arrival_transfer
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  benefit_arrival_transfer: prismic.RichTextField;

  /**
   * Benefit Departure Transfer field in *DaybyDayItinerary → Default → Primary → Cards*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dayby_day_itinerary.default.primary.cards[].benefit_departure_transfer
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  benefit_departure_transfer: prismic.RichTextField;

  /**
   * Benefit Welcome field in *DaybyDayItinerary → Default → Primary → Cards*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dayby_day_itinerary.default.primary.cards[].benefit_welcome
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  benefit_welcome: prismic.RichTextField;

  /**
   * Benefit Accommodation field in *DaybyDayItinerary → Default → Primary → Cards*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dayby_day_itinerary.default.primary.cards[].benefit_accommodation
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  benefit_accommodation: prismic.RichTextField;

  /**
   * Benefit Accommodation Notes field in *DaybyDayItinerary → Default → Primary → Cards*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dayby_day_itinerary.default.primary.cards[].benefit_accommodation_notes
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  benefit_accommodation_notes: prismic.RichTextField;

  /**
   * Benefit Meals field in *DaybyDayItinerary → Default → Primary → Cards*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dayby_day_itinerary.default.primary.cards[].benefit_meals
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  benefit_meals: prismic.RichTextField;

  /**
   * Heading Content Trip field in *DaybyDayItinerary → Default → Primary → Cards*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dayby_day_itinerary.default.primary.cards[].heading_content_trip
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading_content_trip: prismic.RichTextField;
}

/**
 * Item in *DaybyDayItinerary → Default → Primary → Content Trip*
 */
export interface DaybyDayItinerarySliceDefaultPrimaryContentTripItem {
  /**
   * Trip Id field in *DaybyDayItinerary → Default → Primary → Content Trip*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dayby_day_itinerary.default.primary.content_trip[].trip_id
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  trip_id: prismic.KeyTextField;

  /**
   * Label Type field in *DaybyDayItinerary → Default → Primary → Content Trip*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dayby_day_itinerary.default.primary.content_trip[].label_type
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label_type: prismic.KeyTextField;

  /**
   * Banner Trip field in *DaybyDayItinerary → Default → Primary → Content Trip*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: dayby_day_itinerary.default.primary.content_trip[].banner_trip
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  banner_trip: prismic.ImageField<never>;

  /**
   * Title Trip field in *DaybyDayItinerary → Default → Primary → Content Trip*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dayby_day_itinerary.default.primary.content_trip[].title_trip
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title_trip: prismic.RichTextField;

  /**
   * Description Trip field in *DaybyDayItinerary → Default → Primary → Content Trip*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dayby_day_itinerary.default.primary.content_trip[].description_trip
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description_trip: prismic.RichTextField;

  /**
   * Included field in *DaybyDayItinerary → Default → Primary → Content Trip*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dayby_day_itinerary.default.primary.content_trip[].included
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  included: prismic.KeyTextField;
}

/**
 * Primary content in *DaybyDayItinerary → Default → Primary*
 */
export interface DaybyDayItinerarySliceDefaultPrimary {
  /**
   * Heading field in *DaybyDayItinerary → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dayby_day_itinerary.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Description field in *DaybyDayItinerary → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dayby_day_itinerary.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Download field in *DaybyDayItinerary → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: dayby_day_itinerary.default.primary.download
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  download: prismic.LinkField;

  /**
   * Print field in *DaybyDayItinerary → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: dayby_day_itinerary.default.primary.print
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  print: prismic.LinkField;

  /**
   * Cards field in *DaybyDayItinerary → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: dayby_day_itinerary.default.primary.cards[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  cards: prismic.GroupField<
    Simplify<DaybyDayItinerarySliceDefaultPrimaryCardsItem>
  >;

  /**
   * Content Trip field in *DaybyDayItinerary → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: dayby_day_itinerary.default.primary.content_trip[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  content_trip: prismic.GroupField<
    Simplify<DaybyDayItinerarySliceDefaultPrimaryContentTripItem>
  >;
}

/**
 * Default variation for DaybyDayItinerary Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DaybyDayItinerarySliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<DaybyDayItinerarySliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *DaybyDayItinerary*
 */
type DaybyDayItinerarySliceVariation = DaybyDayItinerarySliceDefault;

/**
 * DaybyDayItinerary Shared Slice
 *
 * - **API ID**: `dayby_day_itinerary`
 * - **Description**: DaybyDayItinerary
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DaybyDayItinerarySlice = prismic.SharedSlice<
  "dayby_day_itinerary",
  DaybyDayItinerarySliceVariation
>;

/**
 * Item in *FrequentlyAskedQuestions → Default → Primary → QnA*
 */
export interface FrequentlyAskedQuestionsSliceDefaultPrimaryQnaItem {
  /**
   * Question field in *FrequentlyAskedQuestions → Default → Primary → QnA*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: frequently_asked_questions.default.primary.qna[].question
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  question: prismic.RichTextField;

  /**
   * Answer field in *FrequentlyAskedQuestions → Default → Primary → QnA*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: frequently_asked_questions.default.primary.qna[].answer
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  answer: prismic.RichTextField;
}

/**
 * Primary content in *FrequentlyAskedQuestions → Default → Primary*
 */
export interface FrequentlyAskedQuestionsSliceDefaultPrimary {
  /**
   * Heading field in *FrequentlyAskedQuestions → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: frequently_asked_questions.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * QnA field in *FrequentlyAskedQuestions → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: frequently_asked_questions.default.primary.qna[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  qna: prismic.GroupField<
    Simplify<FrequentlyAskedQuestionsSliceDefaultPrimaryQnaItem>
  >;
}

/**
 * Default variation for FrequentlyAskedQuestions Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FrequentlyAskedQuestionsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FrequentlyAskedQuestionsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *FrequentlyAskedQuestions*
 */
type FrequentlyAskedQuestionsSliceVariation =
  FrequentlyAskedQuestionsSliceDefault;

/**
 * FrequentlyAskedQuestions Shared Slice
 *
 * - **API ID**: `frequently_asked_questions`
 * - **Description**: FrequentlyAskedQuestions
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FrequentlyAskedQuestionsSlice = prismic.SharedSlice<
  "frequently_asked_questions",
  FrequentlyAskedQuestionsSliceVariation
>;

/**
 * Item in *TopTourSummary → Default → Primary → Date Picker Trip Year*
 */
export interface HeroSectionSliceDefaultPrimaryDatePickerTripYearItem {
  /**
   * Date Picker field in *TopTourSummary → Default → Primary → Date Picker Trip Year*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.date_picker_trip_year[].date_picker
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date_picker: prismic.DateField;
}

/**
 * Item in *TopTourSummary → Default → Primary → Tour Infos*
 */
export interface HeroSectionSliceDefaultPrimaryTourInfoItem {
  /**
   * Type Tour field in *TopTourSummary → Default → Primary → Tour Infos*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.tour_info[].type_tour
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  type_tour: prismic.KeyTextField;

  /**
   * Title Tour field in *TopTourSummary → Default → Primary → Tour Infos*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.tour_info[].title_tour
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title_tour: prismic.RichTextField;

  /**
   * Description Tour field in *TopTourSummary → Default → Primary → Tour Infos*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.tour_info[].description_tour
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description_tour: prismic.RichTextField;

  /**
   * Hover Tour Info field in *TopTourSummary → Default → Primary → Tour Infos*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.tour_info[].hover_tour_info
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  hover_tour_info: prismic.RichTextField;
}

/**
 * Item in *TopTourSummary → Default → Primary → Benefit List*
 */
export interface HeroSectionSliceDefaultPrimaryBenefitListItem {
  /**
   * Type Benefit field in *TopTourSummary → Default → Primary → Benefit List*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.benefit_list[].type_benefit
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  type_benefit: prismic.KeyTextField;

  /**
   * Title Benefit field in *TopTourSummary → Default → Primary → Benefit List*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.benefit_list[].title_benefit
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title_benefit: prismic.RichTextField;
}

/**
 * Primary content in *TopTourSummary → Default → Primary*
 */
export interface HeroSectionSliceDefaultPrimary {
  /**
   * Hero Image field in *TopTourSummary → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.hero_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero_image: prismic.ImageField<never>;

  /**
   * Title Trip Year field in *TopTourSummary → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.title_trip_year
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title_trip_year: prismic.RichTextField;

  /**
   * Date Picker Trip Year field in *TopTourSummary → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.date_picker_trip_year[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  date_picker_trip_year: prismic.GroupField<
    Simplify<HeroSectionSliceDefaultPrimaryDatePickerTripYearItem>
  >;

  /**
   * Title Hero field in *TopTourSummary → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.title_hero
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title_hero: prismic.RichTextField;

  /**
   * Description Hero field in *TopTourSummary → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.description_hero
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description_hero: prismic.RichTextField;

  /**
   * Tour Infos field in *TopTourSummary → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.tour_info[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  tour_info: prismic.GroupField<
    Simplify<HeroSectionSliceDefaultPrimaryTourInfoItem>
  >;

  /**
   * CTA Booking field in *TopTourSummary → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.cta_booking
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_booking: prismic.LinkField;

  /**
   * Title Booking field in *TopTourSummary → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.title_booking
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title_booking: prismic.RichTextField;

  /**
   * Description Booking field in *TopTourSummary → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.description_booking
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description_booking: prismic.RichTextField;

  /**
   * Title Trip Code field in *TopTourSummary → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.title_trip_code
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title_trip_code: prismic.RichTextField;

  /**
   * Trip Code field in *TopTourSummary → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.trip_code
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  trip_code: prismic.RichTextField;

  /**
   * Benefit List field in *TopTourSummary → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.benefit_list[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  benefit_list: prismic.GroupField<
    Simplify<HeroSectionSliceDefaultPrimaryBenefitListItem>
  >;

  /**
   * Marketing Message field in *TopTourSummary → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.marketing_message
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  marketing_message: prismic.RichTextField;
}

/**
 * Default variation for TopTourSummary Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TopTourSummary*
 */
type HeroSectionSliceVariation = HeroSectionSliceDefault;

/**
 * TopTourSummary Shared Slice
 *
 * - **API ID**: `hero_section`
 * - **Description**: HeroSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSectionSlice = prismic.SharedSlice<
  "hero_section",
  HeroSectionSliceVariation
>;

/**
 * Item in *Highlights → Default → Primary → Lists*
 */
export interface HighlightsSliceDefaultPrimaryListsItem {
  /**
   * Detail field in *Highlights → Default → Primary → Lists*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: highlights.default.primary.lists[].detail
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  detail: prismic.RichTextField;
}

/**
 * Primary content in *Highlights → Default → Primary*
 */
export interface HighlightsSliceDefaultPrimary {
  /**
   * Type field in *Highlights → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: highlights.default.primary.type
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  type: prismic.KeyTextField;

  /**
   * Heading field in *Highlights → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: highlights.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Title Section field in *Highlights → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: highlights.default.primary.title_section
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title_section: prismic.RichTextField;

  /**
   * Description Section field in *Highlights → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: highlights.default.primary.description_section
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description_section: prismic.RichTextField;

  /**
   * Button field in *Highlights → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: highlights.default.primary.button
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button: prismic.LinkField;

  /**
   * Lists field in *Highlights → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: highlights.default.primary.lists[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  lists: prismic.GroupField<Simplify<HighlightsSliceDefaultPrimaryListsItem>>;

  /**
   * Icon for Lists field in *Highlights → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: highlights.default.primary.icon_for_lists
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon_for_lists: prismic.ImageField<never>;
}

/**
 * Default variation for Highlights Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HighlightsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HighlightsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Highlights*
 */
type HighlightsSliceVariation = HighlightsSliceDefault;

/**
 * Highlights Shared Slice
 *
 * - **API ID**: `highlights`
 * - **Description**: Highlights
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HighlightsSlice = prismic.SharedSlice<
  "highlights",
  HighlightsSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ToursDocument,
      ToursDocumentData,
      ToursDocumentDataSlicesSlice,
      AllDocumentTypes,
      DaybyDayItinerarySlice,
      DaybyDayItinerarySliceDefaultPrimaryCardsItem,
      DaybyDayItinerarySliceDefaultPrimaryContentTripItem,
      DaybyDayItinerarySliceDefaultPrimary,
      DaybyDayItinerarySliceVariation,
      DaybyDayItinerarySliceDefault,
      FrequentlyAskedQuestionsSlice,
      FrequentlyAskedQuestionsSliceDefaultPrimaryQnaItem,
      FrequentlyAskedQuestionsSliceDefaultPrimary,
      FrequentlyAskedQuestionsSliceVariation,
      FrequentlyAskedQuestionsSliceDefault,
      HeroSectionSlice,
      HeroSectionSliceDefaultPrimaryDatePickerTripYearItem,
      HeroSectionSliceDefaultPrimaryTourInfoItem,
      HeroSectionSliceDefaultPrimaryBenefitListItem,
      HeroSectionSliceDefaultPrimary,
      HeroSectionSliceVariation,
      HeroSectionSliceDefault,
      HighlightsSlice,
      HighlightsSliceDefaultPrimaryListsItem,
      HighlightsSliceDefaultPrimary,
      HighlightsSliceVariation,
      HighlightsSliceDefault,
    };
  }
}
