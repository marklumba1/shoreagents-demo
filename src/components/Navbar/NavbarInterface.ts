interface NavbarInterface {
  brand: String;
  options: {
    menu: String;
    subMenus?: String[];
  }[];
}
export default NavbarInterface;
