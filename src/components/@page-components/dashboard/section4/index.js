import React from 'react';
import { MdOutlineNoteAdd, MdOutlineTextSnippet, MdOutlineBrush, MdOutlineMovieCreation, MdOutlineRecordVoiceOver, MdOutlineAnimation, MdOutlineAudiotrack } from 'react-icons/md';

const Section4 = () => {
    const steps = [
        { icon: <MdOutlineNoteAdd />, title: 'Briefing', description: 'We will make your requirements outline and discuss the animation style, mission, and length of your explainer video.' },
        { icon: <MdOutlineTextSnippet />, title: 'Script', description: 'Our team will create a script that will enable you to tell a compelling story about your business, product, or service.' },
        { icon: <MdOutlineBrush />, title: 'Storyboard', description: 'Our digital artists will prepare a simplified visual representation of how the final explainer video will unfold.' },
        { icon: <MdOutlineMovieCreation />, title: 'Illustrations', description: 'Our graphic designers will develop a unique visual style and convert the storyboard into a set of beautiful illustrations.' },
        { icon: <MdOutlineRecordVoiceOver />, title: 'Voice Over', description: 'We collaborate with talented voice artists that can provide a powerful voice for your video. Choose any voice, gender, and language.' },
        { icon: <MdOutlineAnimation />, title: 'Animation', description: 'We breathe life into static illustrations and create animation, bringing together the script, illustrations, and voiceover into an exciting story.' },
        { icon: <MdOutlineAudiotrack />, title: 'Sound Design', description: 'Depending on the package, we can choose royalty-free sound or create unique music for your animated explainer video.' },
    ];

    return (
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/static/main.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Thin dark overlay */}
            <div className="relative flex justify-center items-center h-[75vh]">
                <div className="container mx-auto py-12 px-4 lg:px-8 text-white">
                    <h2 className="text-4xl font-bold text-center mb-4">Our Creative Process</h2>
                    <p className="text-lg text-center mb-8">
                        Our animated explainer video production process includes 7 steps. At Vampires Studios, we guarantee an individual approach to your project, considering your target audience, business goals, and KPIs.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="flex items-start space-x-4 align-center">
                                <div className="mt-1 text-4xl font-bold">{step.icon}</div>
                                <div className="flex items-start space-x-2">
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 flex items-center space-x-2">
                                            <span>{index + 1}.</span>
                                            <span>{step.title}</span>
                                        </h3>
                                        <p>{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section4;
