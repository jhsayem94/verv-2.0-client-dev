// import { Button } from "@/components/ui/button";
// import heroImage from "../../../../../assets/images/hero-image.png";
// import { LocationIcon, SearchIcon } from "@/assets/icons/icons";
// import SearchBar from "./SearchBar";
"use client"
import SearchBar from "./SearchBar";

const Hero = () => {
 
  return (
    // <header
    //   style={backgroundImageStyle}
    //   className="w-[393px] h-[600px] md:w-[1216px] md:h-[528px] m-auto md:rounded-[40px] mt-9 flex justify-center items-center"
    // >
    //   <div>
    //     <h1 className="text-colorTextPrimary text-center font-inter text-[48px] font-bold leading-[120%] sm:w-[345px] md:w-auto">
    //       Rent Smarter with Verified Reviews
    //     </h1>

    //     {/* search location */}
    //     <div className="w-[345px] md:w-[788px] flex justify-center items-center sm:flex-col md:flex-row gap-4 p-4 bg-colorTextPrimary rounded-lg m-auto mt-14 mb-6">
    //       {/* dropdown input field */}
    //       <select
    //         defaultValue="rent"
    //         className="w-[313px] md:w-36 h-14 py-2 pr-2 pl-4 text-colorTextPrimary rounded-[8px] bg-[#F6FFF4] text-lg font-medium leading-normal"
    //       >
    //         <option value="rent">Rent</option>
    //         <option value="buy">Buy</option>
    //       </select>

    //       {/* Location input field */}
    //       <div className="flex w-[313px] md:w-[400px] h-14 px-4 py-0 items-center gap-2 rounded-[8px] bg-white">
    //         <LocationIcon width={18} height={21} />

    //         <input type="text" placeholder="e.g. Oxford or NW3" />
    //       </div>
    //       <Button className="w-[313px] md:w-[180px] h-14 px-4 py-2 rounded-[8px] bg-colorButton text-lg font-semibold leading-normal">
    //         <SearchIcon width={25} height={25} />
    //         Search
    //       </Button>
    //     </div>
    //     <p className="text-lg text-white text-center leading-[150%]">
    //       Want more visibility?{" "}
    //       <span className="text-[#50B533] font-semibold leading-normal">
    //         List with Verv.
    //       </span>
    //     </p>
    //   </div>
    // </header>

     <div className=' bg-[#50B533]'>
      <div className='lg:w-[900px] mx-auto py-20 h-[450px]'>
        <h1 className="text-center justify-start text-white text-5xl [#50B533]" >Rent Smarter with Verified Reviews</h1>
        <SearchBar></SearchBar>
        <h4 className="text-center justify-start mt-6"><span className="text-white text-[18px] font-normal ">Want more visibility? </span><span className="text-white text-[18px] font-semibold">List with Verv.</span></h4>
      </div>
    </div>
 


  );
};

export default Hero;
