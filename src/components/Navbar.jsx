import * as React from "react";
import Logo from "/src/assets/images/headlogo.png";
import { Link } from "react-scroll";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const TOP_OFFSET = 200;
  const [showBackground, setShowBackground] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  React.useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`hidden lg:flex items-center justify-start  py-7 gap-32 w-full top-0 left-0  ${
          showBackground
            ? "bg-theme navScroll py-[13px] lg:px-[150px]"
            : "bg-transparent relative"
        } `}
        style={{ zIndex: "100" }}
      >
        <div>
          <img src={Logo} />
        </div>
        {/* <div className="text-[50px] font-extrabold text-themeGreen font-custom">
        BABY PEPE COIN
      </div> */}
        <div className="flex justify-start items-center gap-7 font-custom font-bold text-base">
          <Link
            to="home"
            smooth={true}
            offset={200}
            duration={1000}
            className="text-themeGreen text-base flex justify-start items-center gap-2"
          >
            <div>Home</div>
            <div className="pt-2">
              <KeyboardArrowDownIcon />
            </div>
          </Link>
          <a
            href="https://t.me/babypepe_onsol"
            target="_blank"
            className="text-white"
          >
            Telegram
          </a>
          <a
            href="https://twitter.com/babypepe_onsol"
            target="_blank"
            className="text-white"
          >
            Twitter
          </a>
        </div>
      </header>

      <header
        className={`w-full flex items-center justify-between  py-7 gap-32 top-0 left-0  ${
          showBackground
            ? "bg-theme navScroll py-[13px] lg:px-[150px]"
            : "bg-transparent relative"
        } lg:hidden`}
        style={{ zIndex: "100" }}
      >
        <div>
          <img src={Logo} />
        </div>
        <div onClick={toggleMenu}>
          {showMenu && (
            <CloseIcon
              sx={{
                fontSize: "40px",
                color: "#fff",
                background: "transparent",
              }}
            />
          )}
          {!showMenu && (
            <MenuIcon
              sx={{
                fontSize: "40px",
                color: "#fff",
                background: "transparent",
              }}
            />
          )}
        </div>

        <div className="absolute top-[110px] left-0 w-full flex flex-col ">
          <div className="flex justify-center items-center gap-7 font-custom font-bold text-base bg-white  flex-col">
            <Link
              to="home"
              smooth={true}
              offset={200}
              duration={1000}
              className="text-themeGreen text-base flex justify-start items-center gap-2 pt-6 w-full pl-[25px] align-middle" style={{borderBottom:'1px solid #798da3'}}
            >
              <div>Home</div>
            </Link>
            <a
              href="https://t.me/babypepe_onsol"
              target="_blank"
              className="text-black w-full no-underline pl-[25px] align-middle"
              style={{borderBottom:'1px solid #798da3'}}
            >
              Telegram
            </a>
            <a
              href="https://twitter.com/babypepe_onsol"
              target="_blank"
              className="text-black w-full no-underline pl-[25px] align-middle"
              style={{borderBottom:'1px solid #798da3'}}
            >
              Twitter
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
