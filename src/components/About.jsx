import { aboutUsSections } from "../constants";
import { BottomBar } from "./";

const About = () => {
    return (
        <>
            <header className="invisible">
                <h1 title='About us page'>About us page</h1>
            </header>
            <main>
                <div className="custom-container mx-auto pt-20">
                    {
                        aboutUsSections.map((section, index) => (
                            <div key={index}>
                                <section aria-labelledby={'about-us-section-' + index}>
                                    <h2 id={'about-us-section-' + index} className="text-5xl font-poppins font-bold uppercase text-primaryGreen text-center mb-10">{section.title}</h2>
                                    <p className="text-center font-poppins mb-10">{section.description}</p>
                                </section>
                                {
                                    section.hasMedia ?
                                        <>
                                            <div className="mt-14 mb-20 w-full md:w-3/4 lg:w-1/2 mx-auto overflow-hidden">
                                                <div className="grid grid-cols-1 sm:gap-3 lg:gap-10 w-full">
                                                    {
                                                        section.media.map((img, index) => (
                                                            <Media source={img.src} alt={img.id} key={index} />
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </> : null
                                }
                                <BlueBar isDisplay={index < aboutUsSections.length - 1 ? true : false} />
                            </div>
                        ))
                    }
                </div>
                <BottomBar />
            </main>
        </>
    );
}

function BlueBar({ isDisplay }) {
    return (
        isDisplay ? <div className="w-full border border-primaryBlue my-14"></div> : null
    )
}

function Media({ source, id }) {
    return (
        <img src={source} alt={id} className="sm:rounded lg:rounded-3xl border" />
    )
}

export default About;