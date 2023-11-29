import Jumbotron from "../components/Jumbotron/Jumbotron";

const Home = () => {
  const images = ["https://picsum.photos/id/1/600/300"];
  return (
    <div>
      <Jumbotron images={images} duration={200} />
    </div>
  );
};

export default Home;
