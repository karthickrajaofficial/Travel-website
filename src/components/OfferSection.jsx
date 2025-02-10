import React from 'react';
import { ArrowRight, Star, Map, Compass } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const OfferSection = () => {
  const navigate = useNavigate();
  const features = [
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: "Premium Experience",
      description: "Curated luxury travel experiences"
    },
    {
      icon: <Map className="w-6 h-6 text-blue-500" />,
      title: "Expert Planning",
      description: "Personalized itineraries by local experts"
    },
    {
      icon: <Compass className="w-6 h-6 text-green-500" />,
      title: "Unique Destinations",
      description: "Off-the-beaten-path locations"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-blue-50 rounded-full">
              <span className="text-blue-600 font-medium">New Destinations Added</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900">
              Discover Your Next 
              <span className="text-blue-600"> Adventure</span>
            </h2>
            
            <p className="text-lg text-gray-600">
              Embark on extraordinary journeys tailored to your dreams. Our expert team 
              crafts unique experiences that combine luxury, adventure, and authentic 
              local culture.
            </p>

            <div className="flex items-center space-x-4">
            <button 
                onClick={() =>{ navigate('/tours');
    window.scrollTo(0, 0);

                }}
                className="group flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>Start Planning</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
  onClick={() => {
    navigate('/tours');
    window.scrollTo(0, 0);
  }}
  className="px-6 py-3 text-blue-600 hover:text-blue-700 font-medium"
>
  View Packages
</button>
            </div>

            {/* <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                    <img
                      src={`/api/placeholder/40/40`}
                      alt={`User ${i}`}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-medium text-gray-900">2K+ Happy Travelers</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div> */}
          </div>

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="/attractions/effil.jpg"
                alt="Travel Destination 1"
                className="rounded-2xl object-cover w-full h-[360px]"
              />
              <img
                src="/attractions/Cathedral.jpg"
                alt="Travel Destination 2"
                className="rounded-2xl object-cover w-full h-[200px]"
              />
            </div>
            <div className="pt-8 space-y-4">
              <img
                src="/attractions/Versailles.jpg"
                alt="Travel Destination 3"
                className="rounded-2xl object-cover w-full h-[200px]"
              />
              <img
                src="/attractions/arc-de-triomphe.jpg"
                alt="Travel Destination 4"
                className="rounded-2xl object-cover w-full h-[360px]"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;