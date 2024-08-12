import Head from 'next/head';
import TopNavbar from '@/components/@page-components/top-navbar';
import RotatingText from "@/components/@shared-components/text/rotating-text";

const HomePage = () => {
    return (
        <>
            <div className="font-topBar">
                <Head>
                    <title>Homepage</title>
                    <meta name="description" content="Homepage with a background image" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/static/background.jpg)' }}>
                    <TopNavbar />

                    <div className="flex">
                        <div className=" w-1/2 flex flex-col items-center justify-center min-h-screen text-start ml-20 text-white pt-16">
                            <h1 className="text-6xl font-bold mb-4">VAMPIRES ANIMATION STUDIO</h1>
                            <p className="text-6xl font-bold mb-8">
                                WE DON'T SUCK BLOOD WE SUCK <RotatingText />
                            </p>
                            <div className="flex space-x-12 font-4xl font-bold">
                                <a
                                    href="/services"
                                    className="bg-primary text-menuBar py-2 px-4 border-2 border-menuBar rounded-full shadow-lg
                   hover:border-white hover:shadow-[0_0_10px_3px_rgba(255,255,255,1)] transition duration-300"
                                >
                                    OUR SERVICES
                                </a>
                                <a
                                    href="/contact"
                                    className="bg-primary text-section2 py-2 px-4 border-2 border-section2 rounded-full shadow-lg
                   hover:border-white hover:shadow-[0_0_10px_3px_rgba(255,255,255,1)] transition duration-300"
                                >
                                    CONTACT US
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default HomePage;
