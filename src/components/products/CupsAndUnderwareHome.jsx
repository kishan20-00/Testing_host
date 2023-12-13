import { Link } from 'react-router-dom';
import { BottomBar } from '../';
import { productCards } from '../../constants';

function formatTitles(param) {
   return param.replace(/\s+/g, '-').toLowerCase();
}

const CupsAndUnderwareHome = () => {
   return (
      <main>
         <section className="custom-container mx-auto pt-20">
            <header>
               <h1 className="text-4xl font-poppins font-bold capitalize text-primaryGreen text-center md:text-left">cups and underwires for<br />intimate apparel</h1>
            </header>
            <div className="w-full my-4 border border-t-primaryBlue"></div>
            <div className="block md:flex md:flex-row justify-around">
               {
                  productCards[2].categories.map((product, index) => (
                     <section aria-labelledby={formatTitles(product.title) + '-section'} className="mt-10 mb-32 md:mb-0" key={index}>
                        <h2 id={formatTitles(product.title) + '-section'} className="text-4xl md:text-5xl font-poppins font-bold uppercase text-center text-primaryBlue mb-10">{product.title}</h2>
                        <div className="relative w-4/5 mx-auto rounded-6xl overflow-hidden green-shadow">
                           <img src={product.image} alt={`image-${index}`} className="w-full" />
                        </div>
                        <div className="text-center my-14">
                           <span className="text-center">
                              <Link to={product.path} role="link" aria-label={formatTitles(product.title) + '-see-all-products-' + index} title={'Link to view product.title all products ' + index}
                                 className="px-10 py-5 rounded-4xl font-poppins font-semibold text-white uppercase bg-primaryBlue hover:bg-primaryGreen transition-all">See all products</Link>
                           </span>
                        </div>
                        <div className="mt-10 text-center">
                           <a href="mailto:info@metricproducts.com" aria-label={'contact-metric-company-by-sending-an-email-' + index} title={'Contact us email on cups and underware products page ' + index} className="uppercase font-poppins font-semibold text-white bg-primaryGreen hover:bg-primaryBlue transition-all rounded-3xl px-5 py-2" accesskey="d">contact us</a>
                        </div>
                     </section>
                  ))
               }
            </div>
         </section>
         <BottomBar />
      </main>
   );
}

export default CupsAndUnderwareHome;