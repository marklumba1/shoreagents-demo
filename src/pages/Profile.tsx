import { useSelector } from "react-redux";
import { RootState } from "../store";
import UserCard from "../components/UserCard/UserCard";

const Profile = () => {
  const { user } = useSelector((state: RootState) => state.user);
  return (
    <div className="flex justify-center">
      <div className="container border">
        <UserCard user={user} />
      </div>
    </div>
  );
};

export default Profile;
