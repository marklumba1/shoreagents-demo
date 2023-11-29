import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useAxios from "../hooks/useAxios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Login = () => {
  const [userID, setUserID] = useState("");
  const { loading, error, data, fetchData } = useAxios({
    url: `https://jsonplaceholder.typicode.com/users/${userID}`,
    method: "GET",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (data?.id) {
      navigate(`/profile/${data?.id}`);
    }
  }, [data]);

  return (
    <div className="relative h-[100vh] w-[100vw] border border-red-500 flex justify-center items-center">
      <div className=" absolute top-0 left-0 z-[-10]  [clip-path:polygon(0_0,100%_0,100%_50%,0%_100%)] h-2/3 w-full bg-lime-600 "></div>
      <div className=" absolute bottom-0 left-0 z-[-10]  [clip-path:polygon(0_50%,100%_0,100%_100%,0%_100%)] h-2/3 w-full bg-lime-700 "></div>
      <div className=" bg-white gap-6 p-3 rounded-xl flex flex-col w-[30vw]">
        <Link to="/" className="text-3xl font-bold text-lime-600">
          SHOREAGENTS
        </Link>
        <div className=" flex flex-col gap-2">
          <p className="text-2xl font-bold">Login</p>
          <p className="text-xl">Login using your user id.</p>
        </div>

        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="User ID"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
          />
          {error && <p className="text-red-500">{"User not found."}</p>}
        </div>

        <button
          className="btn btn-primary rounded-xl text-2xl font-semibold flex items-center gap-2"
          onClick={fetchData}
          disabled={!userID || loading}
        >
          {loading && <AiOutlineLoading3Quarters className=" animate-spin" />}
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;
