import React from "react";


const Vedio = () => {
  return (
    <div className="w-full">
      <video
        autoPlay='true'
        controls
        playsInline
        loop='true'
        width='100%'      
        height='100%'      >
        <source src='/src/assets/images/yt.mp4' type="video/mp4" />
      </video>
    </div>
  );
};

export default Vedio;
