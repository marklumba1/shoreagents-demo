import CardInterface from "./CardInterface";
import { AiOutlineUser } from "react-icons/ai";
const Card: React.FC<CardInterface> = ({ username, name, email }) => {
  return (
    <div className="border rounded p-2 shadow group flex items-center gap-2 hover:animate-pulse">
      <AiOutlineUser className="text-8xl" />
      <div>
        <div className="flex items-center w-full justify-between border">
          <p className="text-2xl">{name}</p>
        </div>

        <p>{username}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
