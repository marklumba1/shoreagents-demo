import JumbotronInterface from "./JumbotronInterface";
const Jumbotron: React.FC<JumbotronInterface> = ({ images, duration }) => {
  return (
    <div>
      {images.map((image, index) => (
        <img src={image} key={index} />
      ))}
    </div>
  );
};

export default Jumbotron;
