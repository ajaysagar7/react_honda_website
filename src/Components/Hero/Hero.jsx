import React from 'react'
import Car from "../../assets/car.png";
import { GrLinkNext } from "react-icons/gr";


const Hero = () => {
  return (
    // HERO SECTION
    <section className='h-[70%]   text-white  flex flex-col-reverse lg:flex-row items-between justify-between  overflow-hidden container'>
      {/* HERO CONTENT */}
      <div className="contentdiv flex flex-col justify-center items-start gap-y-2">
        <h1 className='text-4xl lg:text-5xl'>HONDA <br />Sports EV</h1>
       
       <div className="btndiv group">
       <button className='border-2 border-white rounded-lg px-4 py-1 md:mt-4' >Explore <span><GrLinkNext className='text-white inline-block group-hover:translate-x-2 duration-150 ease-in' />
</span></button>
       </div>

       <div className="carfeatures bg-lightGrey/80 p-5 my-5 flex flex-col gap-y-2">
        <h3 className='uppercase text-xl'>Vehicle Features</h3>
        <p className='text-sm'>The car features rear-hinged suicide doors. Yuki Terai is credited with the exterior design. The interior fits four adults, with the front passengers seated on a single bench seat. The dashboard is decorated in wood trim with a long digital screen as the instrument and infotainment panel</p>
       </div>
      </div>
      {/* HERO IMAGE */}
      <img src={Car } alt="Car place-item-center" />


      
     

    </section>
  )
}

export default Hero