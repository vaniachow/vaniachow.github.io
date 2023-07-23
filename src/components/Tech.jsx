import React from 'react'; // Import React
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants/constants";

const Tech = () => {
  return (
    <div className='flex flex-row justify-center overflow-x-auto'>
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className='flex flex-col items-center group mr-10' // Adjust the spacing between balls with the 'mr-10' class
          style={{ minWidth: '100px' }} // Set a fixed width for each ball container
        >
          <BallCanvas icon={technology.icon} />
          <p className='transition-colors duration-300 group-hover:text-blue-500'>
            {technology.name}
          </p>
        </div>
      ))}
    </div>
  );
};


export default SectionWrapper(Tech, "");
