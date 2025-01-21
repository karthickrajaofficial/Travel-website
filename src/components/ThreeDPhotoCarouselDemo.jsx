// /components/ui/3d-carousel.demo.js
import { ThreeDPhotoCarousel } from "./ThreeDPhotoCarousel"
import { useNavigate } from 'react-router-dom'
export function ThreeDPhotoCarouselDemo() {
    const navigate = useNavigate() 
  const handleCategorySelect = (category) => {
    navigate(`/category/${category.mainCategory}`);
  }

  return (
    <div className="w-full max-w-9xl py-12 bg-white"> {/* Dark navy background */}
      {/* Main heading centered */}
      <div className="text-center mb-12 relative">
        {/* Decorative stars */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 flex space-x-2">
          <div className="w-4 h-4 text-[#FFD700]">★</div>
          <div className="w-4 h-4 text-[#FFD700]">★</div>
          <div className="w-4 h-4 text-[#FFD700]">★</div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 pt-8 font-serif">
          Explore Royal Categories
        </h2>
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-0.5 w-12 bg-[#FFD700]"></div>
          <div className="text-[#FFD700] text-2xl">♔</div>
          <div className="h-0.5 w-12 bg-[#FFD700]"></div>
        </div>
        <p className="text-gray-800 text-lg max-w-2xl mx-auto">
          Discover Europe's most prestigious and enchanting destinations
        </p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 lg:px-8">
        {/* Left column - Description */}
        <div className="space-y-6 lg:pr-8 bg-[#11243F] p-8 rounded-xl border border-[#FFD700]/20">
          <h3 className="text-2xl font-serif font-semibold text-[#FFD700] mb-4">
            Experience Regal Excellence
          </h3>
          <p className="text-gray-300 text-lg mb-6">
            Embark on a journey through Europe's most prestigious destinations. 
            From majestic castles to historic palaces, experience the grandeur 
            of royal heritage and luxury.
          </p>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFD700]/10 flex items-center justify-center mt-1">
                <span className="text-[#FFD700] text-sm">♔</span>
              </div>
              <p className="text-gray-300">Exclusive access to royal venues</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFD700]/10 flex items-center justify-center mt-1">
                <span className="text-[#FFD700] text-sm">♔</span>
              </div>
              <p className="text-gray-300">Luxury accommodations in historic properties</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFD700]/10 flex items-center justify-center mt-1">
                <span className="text-[#FFD700] text-sm">♔</span>
              </div>
              <p className="text-gray-300">Private guided tours with royal historians</p>
            </div>
          </div>
        </div>

        {/* Right column - Carousel */}
        <div className="min-h-[500px] flex flex-col justify-center rounded-lg space-y-4">
          <div className="p-2">
            <ThreeDPhotoCarousel onCategorySelect={handleCategorySelect} />
          </div>
        </div>
      </div>

      {/* Decorative bottom element */}
      <div className="flex justify-center mt-12">
        <div className="flex items-center gap-3">
          <div className="h-0.5 w-8 bg-[#FFD700]"></div>
          <div className="text-[#FFD700] rotate-90">❧</div>
          <div className="h-0.5 w-8 bg-[#FFD700]"></div>
        </div>
      </div>
    </div>
  )
}