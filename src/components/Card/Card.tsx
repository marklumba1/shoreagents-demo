import CardInterface from "./CardInterface";
import { AiOutlineIdcard, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import Avatar from "react-avatar";
const Card: React.FC<CardInterface> = ({ id, username, name, email }) => {
  return (
    <div className="border rounded p-5 shadow-lg group flex items-center gap-5 hover:animate-pulse">
      <Avatar name={name} className="rounded-full" />
      <div>
        <div className="flex items-center w-full justify-between">
          <p className="text-2xl font-semibold">{name}</p>
        </div>
        <p className="flex items-center gap-2">
          <AiOutlineUser />
          {username}
        </p>
        <p className="flex items-center gap-2">
          <AiOutlineMail />
          {email}
        </p>
        <p className="flex items-center gap-2">
          <AiOutlineIdcard />
          {id}
        </p>
      </div>
    </div>
  );
};

export default Card;
