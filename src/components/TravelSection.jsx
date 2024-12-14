import React from 'react'

const TravelSection = () => {
  return (
    <div className="travel pt-20 pb-20 relative">
      <div className="travel__shape absolute top-0 left-0 w-full text-center text-gray-200 font-semibold text-[calc(3.8125rem+30.75vw)] lg:text-[26.875rem] lg:line-height-[230px] xl:text-[calc(3.1875rem+23.25vw)] xl:line-height-[230px] 2xl:text-[20.625rem] 2xl:line-height-[300px] z-[-1] hidden lg:block">
        Travel
      </div>
      <div className="container mx-auto px-4">
        <div className="section__header text-center wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".5s">
          <span className="block text-sm text-gray-600">Inventore veritatis</span>
          <h2 className="text-3xl font-bold mt-2">Select Offers For Traveling</h2>
        </div>
        <div className="section__wrapper wow fadeInUp grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
          {[
            { title: "Different Countries", image: "travel/01.png" },
            { title: "Bus Tours", image: "travel/02.png" },
            { title: "Food Tours", image: "travel/03.png" },
            { title: "Summer Rest", image: "travel/04.png" },
            { title: "Ship Cruises", image: "travel/05.png" },
            { title: "Mountains Tours", image: "travel/06.png" }
          ].map((item, index) => (
            <div key={index} className="col flex justify-center">
              <div className="travel__item max-w-xs w-full">
                <div className="travel__inner text-left">
                  <div className="travel__thumb rounded-lg overflow-hidden">
                    <a href="travel-single.html">
                      <img src={item.image} alt="Travel Thumb" className="w-full h-auto" />
                    </a>
                  </div>
                  <div className="travel__content p-6">
                    <a href="travel-single.html">
                      <h6 className="text-lg font-semibold hover:text-[#6347F9]">{item.title}</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelSection;
