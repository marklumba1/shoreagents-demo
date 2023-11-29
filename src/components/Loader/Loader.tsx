import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loader = ({ title }: { title: string }) => {
  return (
    <div className="text-white bg-lime-600 w-fit flex gap-3 p-3 rounded-lg items-center animate-bounce">
      <AiOutlineLoading3Quarters className=" animate-spin" />
      {title}
    </div>
  );
};

export default Loader;
