import React from "react";
import Banner from "/src/assets/images/hero.jpg";
import Logo from "/src/assets/images/heroAnimate.png";
import { Link } from "react-scroll";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Hero = () => {

    const TOP_OFFSET_B = 200;
    const TOP_OFFSET = 300;
    const [showBackground, setShowBackground] = React.useState(false)
    const [addPadding, setAddPadding] = React.useState(false)
  
    React.useEffect(() => {
      const handleScroll = () => {
        console.log(window.scrollY)
        if (window.scrollY >= TOP_OFFSET_B) {
            setAddPadding(true)
        } else {
            setAddPadding(false)
        }
      }
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, []);
    React.useEffect(() => {
      const handleScroll = () => {
        console.log(window.scrollY)
        if (window.scrollY >= TOP_OFFSET) {
          setShowBackground(true)
        } else {
          setShowBackground(false)
        }
      }
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, []);
  

  return (
    <div>
      <div className="overlay h-[100%] lg:h-[61vw]" >
        <img src={Banner} />
      </div>
      <div
        className={` pb-[154px] flex flex-col lg:flex-row justify-center lg:justify-start items-start lg:items-center text-white font-bold relative ${addPadding?'pt-[272px]':'pt-[162px]'}`}
        id="home"
      >
        <div className="flex flex-1 flex-col justify-start items-start mr-[50px]">
          <div className="text-[40px] md:text-[48px] lg:text-[72px]">
            Baby Pepe coin on Solana
          </div>
          <div className="text-sm md:text-[17px]">
            At PepeCoin, we`re pioneering the next chapter in cryptocurrency,
            boldly positioning ourselves as the &quot;Doge Killer&quot; with a
            clear mission to dethrone Dogecoin from its current pedestal. Our
            innovative approach, driven by a commitmen`t to efficiency, speed,
            and community engagement, sets us apart in the digital currency
            landscape. We`re not just creating a cryptocurrency; we`re building
            a movement. With PepeCoin, we`re offering more than just an
            alternative - we`re providing a superior choice that redefines the
            future of digital transactions. Join us as we embark on this journey
            to revolutionize the crypto space, making Doge watch from the
            sidelines as PepeCoin takes the lead.
          </div>
          <div className="text-sm md:text-[17px] mt-[28px] lg:mt-[40px]">
            Contact Address
          </div>
          <div className="text-sm md:text-[17px] mb-[28px] lg:mb-[40px]">
            5CeDboRoW9S2kd4qUegrB6tFfxHRiY9kRuTQfVukSohZ
          </div>
          <a
            href="https://twitter.com/babypepe_onsol"
            target="_blank"
            className="m-[10px] px-[25] lg:px-[30px] py-3 lg:py-4 bg-themeGreen text-white font-bold text-[15px] lg:text-base rounded-lg no-underline"
          >
            Telegram
          </a>
        </div>
        <div className="flex flex-1 flex-col justify-start items-start md:items-center w-full lg:w-1/2">
          <img
            src={Logo}
            alt=""
            className="imageAnimate m-0 lg:mr-[-38px] w-[300px] md:w-full z-10"
          />
        </div>
      </div>

      <Link
        to="home"
        smooth={true}
        offset={200}
        duration={2000}
        className={`bg-themeGreen flex justify-center items-center h-[50px] w-[50px] rounded-full ${showBackground?'fixed bottom-[23px] right-[23px]':'hidden'}`}
      >
        <KeyboardArrowUpIcon />
      </Link>
    </div>
  );
};

export default Hero;
