import { Link } from 'react-router-dom';
import { productCards } from '../../constants';

const FitInstructionsWarmer = () => {
   return (
      <main className="custom-container mx-auto pt-40">
         <header>
            <h1 className="text-4xl font-poppins font-bold capitalize text-primaryGreen text-center md:text-left mb-10">Fit Instructions: Warmer Weather Harness</h1>
         </header>
         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {productCards[0].categories[0].types[1].fitInstructions.map((fit, index) => (
               <div className="w-full text-center mb-16 md:mb-0" key={index}>
                  <div className="flex flex-row space-x-7 items-center">
                     <div className="rounded-2xl overflow-hidden border-2">
                        <img src={fit} alt={"fit instructions" + index} />
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </main>
   )
}

export default FitInstructionsWarmer;