import UserInterface from "../../features/user/userInterface";

type UserCardType = {
  user: UserInterface;
};
const UserCard: React.FC<UserCardType> = ({ user }) => {
  const { address, company, email, name, phone, website } = user;
  const tags = company.bs.split(" ") || [];
  console.log(tags);
  return (
    <div className="cst-user grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-5">
      <div className="col-span-1 p-4 row-span-2 border  rounded-3xl shadow-lg">
        <h1 className="font-bold text-2xl border-b-2 pb-2 border-b-lime-600">
          PROFILE
        </h1>

        <p className="mt-2">Name: {name}</p>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>Website: {website}</p>
      </div>
      <div className="border rounded-3xl p-4 shadow-lg">
        <h1 className="font-bold text-xl border-b-2 pb-2 border-b-lime-600">
          ADDRESS
        </h1>
        <p className="mt-2">
          {address.street} {address.suite} {address.city}
        </p>
      </div>
      <div className="border rounded-3xl p-4 shadow-lg">
        <h1 className="font-bold text-xl border-b-2 pb-2 border-b-lime-600">
          COMPANY
        </h1>
        <p className="mt-2">{company.name}</p>
        <p>{company.catchPhrase}</p>
        <div className="flex gap-3 mt-1">
          {tags.map((tag, index) => (
            <p
              key={index}
              className="text-white text-sm rounded-2xl bg-lime-800 px-2"
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
