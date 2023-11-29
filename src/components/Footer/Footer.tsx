import FooterInterface from "./FooterInterface";
const Footer: React.FC<FooterInterface> = ({ title }) => {
  return (
    <div className="p-10  flex justify-center bg-slate-300">
      <p>{title}</p>
    </div>
  );
};

export default Footer;
