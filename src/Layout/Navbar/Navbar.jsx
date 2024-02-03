import { FiShoppingCart } from "react-icons/fi"
import "./Navbar.css"
import { useState } from "react"
import { TbMenu } from "react-icons/tb"
import { IoMdClose } from "react-icons/io"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignUpButton, setShowSignUpButton] = useState(true);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (window.innerWidth <= 640) {
      setShowSignUpButton(!isOpen);
    }
  };
  
  return (
    <nav className="main">
      <button className="mobile-menu-icon" onClick={toggleMenu}>
  {isOpen ? (
    <IoMdClose className="close"></IoMdClose>
  ) : (
    <TbMenu className="open"></TbMenu>
  )}
</button>

      <div className="titleNavbar">
        <img src="https://i.ibb.co/x1H40ZN/Taste-now.png" alt="" />
      </div>
      <div className="position">
        <div className="navbar">
          <ul
            className={isOpen ? "nav-link-mobile" : "route"}
            onClick={() => setIsOpen(false)}
          >
            <li className="home">Home</li>
            <li>About us</li>
            <li>Blog</li>
            <li>Contact us</li>
            {isOpen && (
              <li>
                <button className="signUp">Sign up</button>
              </li>
            )}
          </ul>
        </div>

        <div className="signButt">
  <FiShoppingCart className="Shopping" />
  {!isOpen && showSignUpButton && window.innerWidth > 640 && (
  <button className="signUp">Sign up</button>
)}

</div>

      </div>
    </nav>
  )
}

export default Navbar