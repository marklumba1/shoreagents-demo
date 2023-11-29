import CardInterface from "./CardInterface";

const Card: React.FC<CardInterface> = ({ id, username, name, email }) => {
  console.log(id);
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{username}</p>
      <p>{email}</p>
    </div>
  );
};

export default Card;
