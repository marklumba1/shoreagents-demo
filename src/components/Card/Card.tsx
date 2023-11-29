import CardInterface from "./CardInterface";

const Card: React.FC<CardInterface> = ({ image, title, subTitle }) => {
  return (
    <div className="border rounded p-4 flex flex-col gap-2 group hover:-translate-y-9 hover:cursor-pointer transition-[500ms]">
      <img src={image} className="rounded max-h-[200px] object-cover" />
      <p className="text-gray-500 group-hover:text-lime-500 font-semibold font-serif">
        {title}
      </p>
      <p className="text-sm">{subTitle}</p>
    </div>
  );
};

export default Card;
