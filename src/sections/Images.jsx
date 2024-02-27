import React from 'react'
import Img1 from '/src/assets/images/j1.webp'
import Img2 from '/src/assets/images/j2.jpg'
import Img3 from '/src/assets/images/j3.jpg'
import Img4 from '/src/assets/images/j4.jpg'

const Images = () => {
  return (
    <div className='w-full flex flex-col justify-start items-start gap-[100px] my-[100px] pb-[80px] lg:pb-[100px]'>
        <img src={Img1} alt=''/>
        <img src={Img2} alt=''/>
        <img src={Img3} alt=''/>
        <img src={Img4} alt=''/>
    </div>
  )
}

export default Images