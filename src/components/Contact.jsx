import { location, email, phoneCall } from "./../assets";
import contactImg from './../assets/img/contact-us.webp';

const Contact = () => {
    return (
        <>
            <header className="invisible">
                <h1 title='Contact us page'>Contact us page</h1>
            </header>
            <main className="custom-container mx-auto py-20">
                <div className="grid sm:grid-col-1 md:grid-cols-2 gap-20 place-items-center">
                    <section aria-labelledby="contact-us-form-section">
                        <h2 id="contact-us-form-section" className="text-5xl md:text-7xl font-poppins font-bold uppercase text-primaryGreen mb-5">contact us</h2>
                        <p className="text-3xl md:text-5xl font-poppins font-semibold uppercase text-primaryBlue">feel free to get in touch with us</p>
                        <div className="font-poppins pt-5 pb-10">
                            <form aria-label="contact-us-form">
                                <label for="fullname" className="uppercase font-semibold">
                                    Full Name
                                </label>
                                <input id="fullname" type="text" name="fullname" className="border rounded-xl w-full px-5 py-2 mb-3 font-semibold bg-primaryGreen" required="true" />
                                <label for="contact-email" className="uppercase font-semibold">
                                    Email
                                </label>
                                <input id="contact-email" name="contact-email" type="email" className="border rounded-xl w-full px-5 py-2 mb-3 font-semibold bg-primaryGreen" required="true" />
                                <label for="contact-message" className="uppercase font-semibold">
                                    Message
                                </label>
                                <textarea id="contact-message" name="contact-message" rows="4" className="border rounded-xl w-full px-5 py-2 mb-3 font-semibold bg-primaryGreen" required="true"></textarea>
                                <button type="submit" title="Contact us form submit" aria-label="send-the-message"
                                    className="float-right px-10 py-2 rounded-3xl text-white uppercase bg-primaryBlue"
                                    value="Submit" id="contact-us-form-submit-button" accesskey="h">Send the Message</button>
                            </form>
                        </div>
                        <div className="font-poppins mt-20">
                            <div className="flex items-center space-x-2 mb-2.5">
                                <img src={location} alt="location" />
                                <span>4630, Leahy St. Culver City, CA, 90232 USA.</span>
                            </div>
                            <div className="flex items-center space-x-3 ml-1 mb-2.5">
                                <img src={email} alt="email" className="w-5" />
                                <span className="text-primaryBlue hover:underline underline-offset-4">
                                    <a href="mailto:info@metricproducts.com" aria-label="contact-metric-company-by-sending-an-email" title="Contact us email" accesskey="a">info@metricproducts.com</a>
                                </span>
                            </div>
                            <div className="flex items-center space-x-3 ml-1">
                                <img src={phoneCall} alt="phone-call" className="w-5" />
                                <span>
                                    <a href="tel:+13108159000" aria-label="contact-metric-company-by-direct-dialing" title="Contact us phone number"
                                        className="text-primaryBlue hover:underline underline-offset-4" accesskey="b">1.310.815.9000</a>
                                </span>
                            </div>
                        </div>
                    </section>
                    <div>
                        <img src={contactImg} alt="contact image" />
                    </div>
                </div>
            </main>
        </>
    );
}

export default Contact;