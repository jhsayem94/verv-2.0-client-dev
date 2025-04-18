"use client"
import { Input } from '@/components/ui/input';
import { MapPin, Search } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import MultiClickFocusInput from './MultiClickFocusInput';
const demoData = {
  Buy: [
    { location: "New York City" },
    { location: "Los Angeles" },
    { location: "Miami" }
  ],
  Rent: [
    { location: "San Francisco" },
    { location: "Chicago" },
    { location: "Austin" }
  ]
};
 

const SearchBar = () => {
    const [toggle, setToggle] = useState("Rent");
    const [query, setQuery] = useState("");
    const inputRef = useRef(null);

  // Track which tags are clicked
  const [clickedTags, setClickedTags] = useState({
    tag1: true,
    tag2: true,
    tag3: true,
    tag4: true,
  });
    useEffect(() => {
      const allClicked = Object.values(clickedTags).every(Boolean);
      if (allClicked) {
        inputRef.current?.focus();
      }
    }, [clickedTags]);
  
    const handleClick = (tag) => {
      setClickedTags((prev) => ({ ...prev, [tag]: true }));
    };
  
    const filteredResults = query? demoData[toggle].filter((item) =>
        item.location.toLowerCase().includes(query.toLowerCase())): [];

    return (
        <div className="lg:w-[630px] w-94  mx-auto p-2 mt-6 rounded-lg relative ">
            <div className="flex justify-center mb-5 ">
              <button
                className={`px-1 w-[70px]  text-[16px] rounded-lg flex justify-evenly items-center ${toggle === "Buy" ? "bg-white text-[#50B533]" : "bg-[#50B533] text-white "}`}
                onClick={() => setToggle("Buy")}
              >
                <div className={`w-2.5 h-2.5 bg-[#50B533] rounded-3xl  ${toggle === "Buy" ? "block" : "hidden"} `} />
                Buy
              </button>
              <button
                className={`px-1 w-[70px]  text-[16px] rounded-lg flex justify-evenly items-center ${toggle === "Rent" ? "bg-white text-[#50B533]" : "bg-[#50B533] text-white"}`}
                onClick={() => setToggle("Rent")}
              >
                <div className="w-2.5 h-2.5 bg-[#50B533] rounded-3xl" />
                Rent
              </button>
            </div>
            <div className='flex bg-white items-center rounded-full justify-between p-4'
            onClick={() => handleClick("tag4")}
            >
              <MapPin className='w-[28px] h-[28px] text-[#A6AFBB]'
              onClick={() => handleClick("tag1")}
              />
              <div className='w-5/6'>
                <p className='text-gray-900 text-lg font-semibold ml-2  '
                onClick={() => handleClick("tag2")}
                >Location</p>
                <Input
                  type="text"
                  placeholder="Where are you looking to rent?"
                  className="w-full p-2 h-[30px]  border-0 shadow-none  focus-visible:outline-none focus-visible:ring-0  "
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <div className="lg:p-4 p-3 bg-slate-700 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] " 
              >
                <Search className='text-white'
                onClick={() => handleClick("tag3")}
                />
              </div>
            </div>
               {/* <div className=' '>
             <div className='relative'>
             <MapPin className='w-[28px] h-[28px] text-[#A6AFBB] absolute z-20 left-3 top-[30px]'  />
                <p className='text-gray-900 text-[18px] font-semibold ml-2 absolute z-20 top-4 left-10 peer-focus:opacity-0'>Location <br />
                <span className='text-[14px] text-[#9CA3AF] font-light peer-focus:opacity-0' >Where are you looking to rent?</span>
                </p>
                <Input
                  type="text"
                  placeholder=""
                  className="w-full pl-12 h-[90px] ring-0 border-0 shadow-none focus:border-none rounded-full focus:outline-hidden absolute z-10 peer"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <div className="z-20 w-[64px] h-[64px] flex justify-center items-center bg-slate-700 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]  absolute right-3 top-[15px]">
                <Search className= 'text-white ' />
              </div>
             </div>
              </div> */}
              

            <ul className='bg-white rounded-bl-lg rounded-br-lg w-4/5 mx-auto overflow-y-auto space-y-2'>
              {filteredResults.map((item, index) => (
                <li key={index} className="p-2   border-gray-200">
                  <div className="text-gray-500 text-sm"> {item.location}</div>
                </li>
              ))}
            </ul>
          </div>
    );
};

export default SearchBar;