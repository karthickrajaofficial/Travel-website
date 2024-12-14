import React from "react";
import Banner from "../components/Banner";

const AboutSection = () => {
    return (
      <>
        <Banner/>
        <div className="about py-16 relative">
            {/* Travel Shape */}
            <div className="absolute top-0 left-0 text-gray-100 text-6xl transform -translate-y-12 -translate-x-4">
                Travel
            </div>

            {/* Decorative Shape */}
            <div className="absolute top-4 right-4">
                <img src="assets/images/shape-img/01.png" alt="travel thumb" className="w-16" />
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* About Image */}
                    <div className="about__thumb">
                        <img src="about/02.png" alt="travel thumb" className="w-full rounded-lg" />
                    </div>

                    {/* About Content */}
                    <div className="about__content">
                        {/* Section Header */}
                        <div className="mb-6">
                            <span className="text-gray-600 uppercase text-sm font-medium">About us</span>
                            <h2 className="text-3xl font-bold text-gray-800 mt-2">
                                World Best Travel Agency Company Since 2008.
                            </h2>
                        </div>

                        {/* Section Description */}
                        <div className="mb-6">
                            <p className="text-gray-600 mb-4">
                                Continually productize compelling quality packed with elated features. Setting up websites and creating pages with ease.
                            </p>

                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                                <li>We provide compelling quality for various needs.</li>
                                <li>Leading in providing packed quality experiences.</li>
                                <li>Learn how to grow with elated services.</li>
                            </ul>
                        </div>

                        {/* About Project Stats */}
                        <ul className="grid grid-cols-3 gap-4 text-center">
                            <li>
                                <h2 className="text-3xl font-bold text-gray-800">
                                    <span className="about__project--count">20</span>+
                                </h2>
                                <p className="text-gray-600">Year Experience</p>
                            </li>
                            <li>
                                <h2 className="text-3xl font-bold text-gray-800">
                                    <span className="about__project--count">250</span>+
                                </h2>
                                <p className="text-gray-600">Destination Collaboration</p>
                            </li>
                            <li>
                                <h2 className="text-3xl font-bold text-gray-800">
                                    <span className="about__project--count">170</span>K+
                                </h2>
                                <p className="text-gray-600">Happy Customers</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default AboutSection;
