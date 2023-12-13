import { BottomBar } from '../';
import { productCards } from '../../constants';

function formatTitles(param) {
   return param.replace(/\s+/g, '-').toLowerCase();
}

const DriftToSleep = () => {
   return (
      <main>
         <section className="custom-container mx-auto pt-20">
            <header>
               <h1 className="text-4xl font-poppins font-bold capitalize text-primaryGreen">drift to sleep</h1>
            </header>
            <div className="w-full my-4 border border-t-primaryBlue"></div>
            {
               productCards[1].categories.map((product, indexOne) => (
                  <div key={indexOne}>
                     <section aria-labelledby={formatTitles(product.title) + '-section'} className="mt-10">
                        <h2 id={formatTitles(product.title) + '-section'} className="text-5xl font-poppins font-bold uppercase text-center text-primaryBlue mb-10">{product.title}</h2>
                        <div className="flex flex-row justify-center space-x-10">
                           {
                              product.types.map((type, indexTwo) => (
                                 <div key={indexTwo}>
                                    <div className={`grid col-1 place-items-center ${type.amazonLink ? '' : 'mb-20'}`}>
                                       {type.imageOne ? <img src={type.imageOne} alt={'imageOneOf' + indexTwo} className="mb-5 sm:w-full md:w-1/2 border-2 rounded-lg" /> : null}
                                       {type.imageTwo ? <img src={type.imageTwo} alt={'imageTwoOf' + indexTwo} className="mb-5 sm:w-full md:w-1/2 border-2 rounded-lg" /> : null}
                                       {type.imageThree ? <img src={type.imageThree} alt={'imageThreeOf' + indexTwo} className="mb-5 sm:w-full md:w-1/2 border-2 rounded-lg" /> : null}
                                    </div>
                                    {
                                       type.amazonLink ?
                                          <div className="my-10 text-center">
                                             <a href={type.amazonLink} aria-label={formatTitles(product.title) + '-order-on-amazon-' + indexTwo} title={'amazon order link for ' + product.title + ' ' + indexTwo} target="_blank"
                                                className="font-poppins uppercase font-semibold text-white text-xl rounded-xl px-5 py-2 bg-primaryGreen hover:bg-primaryBlue transition-all"
                                                accesskey="e">order on amazon</a>
                                          </div> : null
                                    }
                                    {
                                       type.subTypes ?
                                          <div className="block md:flex md:flex-row md:space-x-10">
                                             {
                                                type.subTypes.map((sType, indexThree) => (
                                                   <div key={indexThree} className="mb-10 md:mb-0">
                                                      <img src={sType.image} alt={'image' + indexThree} className="w-full border rounded-lg" />
                                                      <div className="mt-10 mb-5 text-center text-white font-bold uppercase">
                                                         Order on Amazon as
                                                      </div>
                                                      <div className="flex flex-row space-x-3 justify-center items-center">
                                                         {
                                                            sType.pieces.map((piece, indexFour) => (
                                                               <a href={piece.url} aria-label={indexThree + '-select-pair-amount-' + indexFour} title={'Link for order number of pairs from amazon ' + indexThree + '-' + indexFour} target="_blank" key={indexFour} accesskey="f">
                                                                  <span className="bg-primaryBlue hover:bg-primaryGreen rounded-lg px-2 py-1 font-poppins text-white">{piece.pair}</span>
                                                               </a>
                                                            ))
                                                         }
                                                      </div>
                                                   </div>
                                                ))
                                             }
                                          </div> : null
                                    }
                                 </div>
                              ))
                           }
                        </div>
                     </section>
                     {
                        indexOne < productCards[0].categories.length - 1 ? <div className="w-full my-16 border border-primaryBlue"></div> : null
                     }
                  </div>
               ))
            }
         </section>
         <BottomBar />
      </main>
   );
}

export default DriftToSleep;