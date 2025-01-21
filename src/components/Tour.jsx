import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Clock, Users, ArrowRightCircle, CheckCircle2, XCircle, Home } from 'lucide-react';

const Tour = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-orange-50">
      {/* Hero Section with Image */}
      <div className="relative h-[60vh] bg-black">
        <img 
          src="/api/placeholder/1920/1080" 
          alt="Bali Beach"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        
        {/* Navigation */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-white">Travel Dreams</h1>
              <div className="flex gap-4">
                <button 
                  onClick={() => navigate('/')}
                  className="flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Home size={18} />
                  <span>Home</span>
                </button>
                <button 
                  onClick={() => navigate('/tours')}
                  className="px-6 py-2.5 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-all duration-300"
                >
                  Tours
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-4">
              Magical Bali Experience
            </h2>
            <div className="flex flex-wrap gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-rose-400" />
                <span>Bali, Indonesia</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-rose-400" />
                <span>10 days</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-rose-400" />
                <span>8 people</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-rose-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Overview</h3>
              <p className="text-gray-600 leading-relaxed">
                Embark on an unforgettable journey through Bali's most enchanting destinations. 
                From pristine beaches to ancient temples, immerse yourself in the rich culture 
                and natural beauty of this tropical paradise. Our expert guides ensure an 
                authentic and memorable experience at every step.
              </p>
            </div>

            {/* Included/Excluded */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-rose-100">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  What's Included
                </h4>
                <ul className="space-y-4">
                  {[
                    '5-Star Accommodation',
                    'Professional Guide',
                    'Traditional Meals',
                    'Airport Transfers',
                    'Welcome Dinner',
                    'Cultural Shows'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-600">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm border border-rose-100">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-rose-500" />
                  Not Included
                </h4>
                <ul className="space-y-4">
                  {[
                    'International Flights',
                    'Travel Insurance',
                    'Personal Expenses',
                    'Additional Activities',
                    'Visa Fees',
                    'Gratuities'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-600">
                      <span className="w-1.5 h-1.5 bg-rose-500 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-3xl shadow-sm border border-rose-100 overflow-hidden">
                <div className="p-8 bg-gradient-to-br from-rose-500 to-orange-500 text-white">
                  <div className="text-2xl font-bold mb-2">$250</div>
                  <div className="text-white/80">per person</div>
                </div>
                <div className="p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between text-gray-600">
                      <span>Base Price</span>
                      <span className="font-semibold">$250</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Taxes & Fees</span>
                      <span className="font-semibold">$25</span>
                    </div>
                    <div className="h-px bg-gray-200"></div>
                    <div className="flex justify-between text-gray-900 font-bold">
                      <span>Total</span>
                      <span>$275</span>
                    </div>
                  </div>

                  <button className="w-full bg-rose-500 text-white py-4 px-6 rounded-2xl font-semibold hover:bg-rose-600 transition-all duration-300 flex items-center justify-center gap-2">
                    Book Now
                    <ArrowRightCircle className="w-5 h-5" />
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    Free cancellation up to 24 hours before the tour
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;