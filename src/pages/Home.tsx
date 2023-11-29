import Card from "../components/Card/Card";
import CardInterface from "../components/Card/CardInterface";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import useAxios from "../hooks/useAxios";
import Loader from "../components/Loader/Loader";
import Footer from "../components/Footer/Footer";
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

  const { data, loading, error } = useAxios({
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

      <div className="flex justify-center py-32">
        <div className="container flex flex-col justify-center items-center">
          <p className="py-8 text-3xl">Members</p>
          {data && !loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-5">
              {data.map((data: CardInterface, index) => (
                <Card
                  key={index}
                  name={data.name}
                  email={data.email}
                  username={data.username}
                />
              ))}
            </div>
          )}
          {loading && <Loader title="loading users" />}
        </div>
      </div>

      <Footer title="This is a sample footer" />
    </div>
  );
};

export default Home;
