

const Hero = () => {
  return (
  //   <div className="bg-[url('/bg3.jpg')] bg-no-repeat bg-cover bg-center relative z-10 pb-32 overflow-x-hidden">
  //   <div className="lg:flex max-w-[1400px] mx-auto justify-between items-center px-3 pt-12">
      
  //     {/* Left Section - Text */}
  //     <div className="lg:w-2/5">
  //       <h2 className="xl:text-[4rem] lg:text-5xl text-4xl lg:text-left text-center font-bold leading-snug mb-5">
  //         It's a Big World Out There, Go Explore
  //       </h2>
  //       <p className="text-gray-700 leading-normal mb-8">
  //         Conveniently customize proactive web services for leveraged without 
  //         continually aggregate frictionless ou wellies richard and very customize continually.
  //       </p>
  //       <div className="flex flex-1 gap-5">
  //         <button className="bg-primary rounded transition-bg shadow h-16 lg:px-10 lg:w-auto w-full outline-none text-white hover:bg-white hover:text-primary">
  //           Get Exploration
  //         </button>
  //         <button className="bg-white rounded transition-bg shadow h-16 lg:px-10 lg:w-auto w-full outline-none text-primary hover:bg-primary hover:text-white">
  //           Read More
  //         </button>
  //       </div>
  //     </div>
      
  //     {/* Right Section - Image */}
  //     <div className="lg:w-3/5 flex items-center justify-end lg:pt-0 pt-10 lg:mr-28">
  //       <img src="/img2.jpgj" alt="Exploration" className="w-[45rem] h-full" />
  //     </div>

  //   </div>
  // </div>
  <div className="relative z-10  pb-32 overflow-x-hidden">
  {/* Background Video */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
    src="/bgv2.mp4"
    autoPlay
    loop
    muted
  ></video>

  {/* Overlay for dimming the video */}
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-1"></div>

  <div className="lg:flex max-w-[1400px] mx-auto justify-between items-center px-3 pt-12 relative z-10">
    {/* Left Section - Text */}
    <div className="lg:w-2/5">
      <h2 className="xl:text-[4rem] lg:text-5xl text-4xl lg:text-left text-center font-bold leading-snug mb-5 text-white">
        It's a Big World Out There, Go Explore
      </h2>
      <p className="text-white leading-normal mb-8">
        Conveniently customize proactive web services for leveraged without
        continually aggregate frictionless ou wellies richard and very customize continually.
      </p>
      <div className="flex flex-1 gap-5">
        <button className="bg-primary rounded transition-bg shadow h-16 lg:px-10 lg:w-auto w-full outline-none text-white hover:bg-white hover:text-primary">
          Get Exploration
        </button>
        <button className="bg-white rounded transition-bg shadow h-16 lg:px-10 lg:w-auto w-full outline-none text-primary hover:bg-primary hover:text-white">
          Read More
        </button>
      </div>
    </div>

    {/* Right Section - Image */}
    {/* <div className="lg:w-3/5 flex items-center justify-end lg:pt-0 pt-10 lg:mr-28">
      <img src="/img1.png" alt="Exploration" className="w-[45rem] h-full" />
    </div> */}
  </div>
</div>

  )
}

export default Hero