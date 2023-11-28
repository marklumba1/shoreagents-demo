import NavbarInterface from "./NavbarInterface"
const Navbar = ({brand, options}: NavbarInterface) => {
    return ( 
        <div className="p-3 border border-red-500 flex justify-between items-center">
            <p>{brand}</p>
            <ul className="flex gap-2">
            {options.map((option, index) => {
                return <li key={index}>{option}</li>
            })}
            </ul>
        </div>
     );
}
 
export default Navbar;