import React from "react";
import HeroVedio from '/src/assets/images/yt.webm'

const Vedio = () => {
  return (
    <div className="w-full">
      <video
        autoPlay
        controls
        playsInline
        loop='true'
        width='100%'      
        height='100%'      >
        <source src={HeroVedio} type="video/mp4" />
      </video>
    </div>
  );
};

export default Vedio;
