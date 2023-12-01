import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useAxios from "../hooks/useAxios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";
import loginImage from "../assets/images/login.svg";
const Login = () => {
  const navigate = useNavigate();
  const [userID, setUserID] = useState("");
  const dispatch = useDispatch();
  const { loading, error, data, fetchData } = useAxios({
    url: `https://jsonplaceholder.typicode.com/users/${userID}`,
    method: "GET",
  });

  useEffect(() => {
    if (data?.id) {
      dispatch(setUser(data));
      navigate(`/profile/${data?.id}`);
    }
  }, [data]);

  return (
    <div className="relative h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="absolute top-0 left-0 right-0 bottom-1/3 z-[-10]  [clip-path:polygon(0_0,100%_0,100%_50%,0%_100%)] bg-lime-600"></div>
      <div className="absolute bottom-0 left-0 right-0 top-1/3 z-[-10]  [clip-path:polygon(0_50%,100%_0,100%_100%,0%_100%)] bg-lime-700"></div>
      <div className=" bg-white p-5 rounded-lg min-w-[30vw] flex gap-5 fade-in-top">
        <img src={loginImage} className="h-[300px]"></img>
        <div className="flex flex-col gap-3 w-full">
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
    </div>
  );
};

export default Login;
