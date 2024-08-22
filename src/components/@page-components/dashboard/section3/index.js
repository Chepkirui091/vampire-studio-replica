import React from 'react';
import Head from 'next/head';

const Section3 = () => {
    const videoIds = [
        'g4Nk8GNSZJs',
        'gcy5AUvm7iE',
        'Ltx-pmjdAAI',
        'MbkyUeqjlpU',
        'cWNfvWQ7zk0',
        'Nor1Hi4FUvY'
    ];

    return (
        <>
            <Head>
                <meta name="description" content="Page with a grid of embedded YouTube videos" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div
                className="min-h-screen"

            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-28">
                    {videoIds.map((id, index) => (
                        <div key={index} className="relative pb-[56.25%]">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src={`https://www.youtube.com/embed/${id}?modestbranding=1&rel=0`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={`YouTube video ${index + 1}`}
                            ></iframe>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Section3;
