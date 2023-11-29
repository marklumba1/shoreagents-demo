export default interface JumbotronInterface {
  images: string[];
  duration: number;
  heading: string;
  subHeading: string;
  buttons: { title: string; variant: string }[];
  slider: { image: string; label: string }[];
}
