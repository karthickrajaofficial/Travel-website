import React from 'react';

const OfferSection = () => {
  return (
    <div className="offer bg-gray-200 overflow-hidden relative">
      {/* <div className="shape">
        <div className="shape__one">
          <img src="shape-img/01.png" alt="thumb" />
        </div>
        <div className="shape__six">
          <img src="shape-img/02.png" alt="thumb" />
        </div>
        <div className="shape__three">
          <img src="shape-img/02.png" alt="thumb" />
        </div>
      </div> */}
      <div className="container mx-auto px-4">
        <div className="row grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <div className="col-lg-6 wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay=".5s">
            <div className="offer__thumb hidden lg:block">
              <img src="offer/01.png" alt="Travel Thumb" />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInRight" data-wow-duration="1.5s" data-wow-delay=".5s">
            <div className="offer__content text-center py-8">
              <img src="offer/02.png" alt="travel thumb" />
              <img src="offer/03.png" alt="travel thumb" className="mb-4" />
              <p className="text-gray-700">
                Conveniently customize proactive web services for leveraged without continual services aggregate frictionless
                out wellies Richard. And very aggregate frictionless out wellies customize continually.
              </p>
              <div className="btn-group mt-4 flex justify-center gap-4">
                <a href="#" className="default__btn me-sm-3 bg-blue-500 text-white py-2 px-6 rounded-md">
                  <span>Get Exploration</span>
                </a>
                <a href="#" className="default__btn reverse bg-blue-500 text-white py-2 px-6 rounded-md">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
