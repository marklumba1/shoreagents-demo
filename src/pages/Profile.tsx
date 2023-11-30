import { useSelector } from "react-redux";
import UserInterface from "../features/user/userInterface";

const Profile = () => {
  const { user } = useSelector((state: { user: UserInterface }) => state);
  console.log(user);
  return (
    <div className="flex justify-center">
      <div className="container border">asdfsdfsdf</div>
    </div>
  );
};

export default Profile;
