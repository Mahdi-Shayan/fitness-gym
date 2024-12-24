import { useEffect, useState } from "react";

// Logo
import logo from "../../assets/images/Logo.png";

// Style
import "./nav.scss";

// Components
import Menu from "./Menu";

// Types
import ActionButton from "../../components/ActionButton";

function Nav() {
  const [open, setOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY !== 0) {
        setIsScrolled(true);
      } else if (window.scrollY === 0) {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handelScroll);

    return () => window.removeEventListener("scroll", handelScroll);
  }, []);

  return (
    <>
      <nav className={isScrolled ? "active" : ""}>
        <div
          className="nav-container"
        >
          {/* LEFT SIDE */}
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          {/* RIGHT SIDE DESKTOP*/}
          <div className="desktop">
            <Menu />
            <div
              style={{
                display: "flex",
                gap: "25px",
                alignItems: "center",
              }}
            >
              <p className="sign-in">Sign in</p>
              <ActionButton>Become a Member</ActionButton>
            </div>
          </div>

          {/* RIGHT SIDE MOBILE*/}
          <div className="mobile">
            <div className="menu-btn" onClick={() => setOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="23px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="undefined"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </div>
            {open && (
              <div className="menu">
                <div className="close-btn" onClick={() => setOpen(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#999999"
                  >
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                </div>
                <Menu />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
