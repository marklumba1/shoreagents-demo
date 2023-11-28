interface NavbarInterface{
    brand: String,
    options: {
        title: String,
        subTitles?: String[]
    }[],
}
export default NavbarInterface