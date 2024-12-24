export enum Pages {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = 'ourclasses',
  ContactUs = 'contactus'
}

export interface Context {
  selectedPage: string;
  setSelectedPage: React.Dispatch<React.SetStateAction<Pages>>;
}