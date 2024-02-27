import React from "react";
import TwitterImg from '/src/assets/images/twitter.svg'
import TelegramImg from '/src/assets/images/telegram.svg'


const Footer = () => {
  return (
    <div className="pt-[102px] pb-[36px] ">
      <div className="py-[36px] w-full flex justify-between items-center text-lightText text-sm" style={{borderTop:'1px solid #798da3'}}>
        <div>Copyright © 2024.</div>
        <div className="flex justify-end items-center">
            <a className="rounded-full mx-1 p-2" href="https://twitter.com/babypepe_onsol" style={{border:'1px solid #798da3'}}>
                <img src={TwitterImg} alt="" />
            </a>
            <a className="rounded-full mx-1 p-2" href="https://t.me/babypepe_onsol" style={{border:'1px solid #798da3'}}>
                <img src={TelegramImg} alt="" />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
