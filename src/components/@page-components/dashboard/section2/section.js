import React from 'react';
import Head from 'next/head';

const Section2 = () => {
    return (
        <>
            <Head>
                <meta name="description" content="Page with an embedded YouTube video" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-section2">
                <div className="w-full h-[60vh] max-w-5xl">
                    <div className="relative w-full h-full">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/-WsZ2fUXbZg?modestbranding=1&rel=0"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="YouTube video"
                        />

                    </div>
                </div>
            </div>
        </>
    );
};

export default Section2;
