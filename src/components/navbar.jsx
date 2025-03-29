import ButtonContactMe from "./btn-contact-me";
import Menu from "./menu";
import Profile from "./profile";

function Navbar() {
    return (
        <header>
            <nav className="flex items-center justify-between">
                <Profile/>
                <Menu/>
                <ButtonContactMe/>
            </nav>
        </header>
    );
}

export default Navbar;