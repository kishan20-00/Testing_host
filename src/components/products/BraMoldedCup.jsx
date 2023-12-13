import { BottomBar } from '../';
import { productCards } from '../../constants';

function renderCardName(param) {
   switch (param) {
      case 'push-up cups':
         return <span>push-up<br />cups</span>;
      case 'strapless cups':
         return <span>strapless<br />cups</span>;
      case 'bando shapes cups':
         return <span>bando shapes<br />cups</span>;
      default:
         return <span>triangular<br />cups</span>;
   }
}

const BraMoldedCup = () => {
   return (
      <main>
         <section className="custom-container mx-auto pt-20">
            <header>
               <h1 className="text-4xl font-poppins font-bold capitalize text-primaryGreen text-center md:text-left">cups and underwires for<br />intimate apparel</h1>
            </header>
            <div className="w-full my-4 border border-t-primaryBlue"></div>
            <section aria-labelledby="bra-molded-cup-section">
               <h2 id="bra-molded-cup-section" className="text-4xl md:text-5xl font-poppins font-bold uppercase text-center text-primaryBlue mt-14">bra molded cup</h2>
               <div className="block md:flex md:flex-row justify-between md:space-x-10">
                  {
                     productCards[2].categories[0].types.map((type, index) => (
                        <div className="mt-10 mb-24 md:mb-0" key={index}>
                           <h3 className="text-3xl font-poppins font-semibold uppercase text-center text-primaryGreen mb-10">{renderCardName(type.title)}</h3>
                           {
                              type.images.map((img, imgIndex) => (
                                 <div key={imgIndex} className="w-full mx-auto rounded-tr-4xl rounded-bl-4xl overflow-hidden mb-10">
                                    <img src={img} alt={`image-${imgIndex}`} className="w-full" />
                                 </div>
                              ))
                           }
                        </div>
                     ))
                  }
               </div>
            </section>
         </section>
         <BottomBar />
      </main>
   );
}

export default BraMoldedCup;