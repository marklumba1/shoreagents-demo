import UserInterface from "../../features/user/userInterface";
type UserCardType = {
  user: UserInterface;
};
const UserCard: React.FC<UserCardType> = ({ user }) => {
  console.log(`useerrr`, user);
  return <div></div>;
};

export default UserCard;
