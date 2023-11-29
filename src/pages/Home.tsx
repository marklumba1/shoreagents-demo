import Card from "../components/Card/Card";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import useAxios from "../hooks/useAxios";
const Home = () => {
  const sampleJumbotronProps = {
    images: [
      "https://picsum.photos/id/1/600/300",
      "https://picsum.photos/id/2/600/300",
    ],
    duration: 5000,
    heading: "This is an example of a jumbotron component",
    subHeading: "With a slider component displayed below",
    buttons: [
      { title: "SECONDARY", variant: "btn-secondary" },
      { title: "PRIMARY", variant: "btn-primary" },
    ],
    slider: [
      { image: "https://picsum.photos/id/3/600/300", label: "Test 1" },
      { image: "https://picsum.photos/id/4/600/300", label: "Test 2" },
      {
        image: "https://picsum.photos/id/5/600/300",
        label: "Test 3",
      },
    ],
    reviews: "End of Jumbotron Component",
  };
  const cardsComponentProps = [
    {
      image: "https://placebear.com/200/300",
      title: "Sample Title",
      subTitle: "This is a sample of a subtitle",
    },
    {
      image: "https://placebear.com/200/300",
      title: "Sample Title",
      subTitle: "This is a sample of a subtitle",
    },
    {
      image: "https://placebear.com/200/300",
      title: "Sample Title",
      subTitle: "This is a sample of a subtitle",
    },
    {
      image: "https://placebear.com/200/300",
      title: "Sample Title",
      subTitle: "This is a sample of a subtitle",
    },
  ];
  const requestUsers = useAxios({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
  });

  return (
    <div>
      <Jumbotron
        images={sampleJumbotronProps.images}
        duration={sampleJumbotronProps.duration}
        heading={sampleJumbotronProps.heading}
        subHeading={sampleJumbotronProps.subHeading}
        buttons={sampleJumbotronProps.buttons}
        slider={sampleJumbotronProps.slider}
      />

      <div className="flex justify-center gap-10 ">
        {cardsComponentProps.map(({ image, title, subTitle }, index) => (
          <Card key={index} image={image} title={title} subTitle={subTitle} />
        ))}
      </div>
    </div>
  );
};

export default Home;
