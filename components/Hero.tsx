import { MdLocationPin } from "react-icons/md";

const Hero = () => {
  return (
    <section className="w-full relative bg:trnsparent" id="home">
      {/* Video and Overlay */}
      <div className="absolute h-full w-full top-0 bottom-0">
        <div className="absolute h-full w-full bg-[rgba(0,0,0,0.4)] z-10"></div>
        <video
          src={"./video.mp4"}
          muted
          loop
          autoPlay
        
          className="absolute h-full w-full object-cover z-0"
        ></video>
      </div>

      {/* Content */}
      <div
        className="w-full h-max pt-28 pb-12 flex gap-y-3 flex-col justify-center m-auto relative z-30
        lg:pt-64 lg:pb-24"
      >
        <div className="px-0 py-8 text-white bg-transparent">
          <span className="uppercase regular-18">TRAVEL TO ANY CORNER OF TIGRAY</span>
          <h2 className="h2 max-w-[777px]">Make Your Tour Amazing With Us</h2>
        </div>
        {/* Form */}
        <div>
          <div className="text-center">
            <span
              className="bg-white text-tertiary medium-16 px-12 py-4 rounded-l-xl rounded-r-xl"
            >
              Search For Your Trip
            </span>
          </div>
          <div
            className="max_padd_container flex flex-col md:flex-row gap-6 px-8 py-10 md:px-12
            bg-white rounded-xl shadow-lg"
          >
            <div className="flex flex-col w-full xl:px-6">
              <label htmlFor="city" className="block text-black pb-2 ">
                Search your destination:
              </label>
              <div className="flexCenter h-10 px-4 bg-primary rounded-full w-full">
                <input
                  type="text"
                  placeholder="Enter name here..."
                  className="bg-transparent border-none outline-none w-full regular-14"
                />
                <MdLocationPin className="text-lg" />
              </div>
            </div>
            <div className="flex flex-col w-full xl:px-6">
              <label htmlFor="date" className="block text-black pb-2 ">
                Select your date:
              </label>
              <div className="flexCenter h-10 px-4 bg-primary rounded-full w-full">
                <input
                  type="date"
                  className="bg-transparent border-none outline-none w-full regular-14"
                />
              </div>
            </div>
            <div className="flex flex-col w-full xl:px-6">
              <div className="flexBetween items-center">
                <label htmlFor="price" className="block text-black pb-2 ">
                  Max price:
                </label>
                <h4>3000ETB</h4>
              </div>
              <div className="flexCenter h-10 px-4 bg-primary rounded-full w-full">
                <input
                  type="range"
                  max={"3000"}
                  min={"500"}
                  className="border-none outline-none w-full regular-14"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
