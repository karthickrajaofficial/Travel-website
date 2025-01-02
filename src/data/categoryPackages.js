const categoryPackages = [
    {
      name: "Solo Adventures",
      image: "solo/main.jpg",
      description: "5 Day's 4 Night",
      title: "Experience Freedom in Solo Travel",
      price: "₹1500",
      path: "/solo-adventures",
      subPlaces: [
        {
          name: "Backpacking Europe",
          image: "solo/backpacking.jpg",
          description: "15 Day's Tour",
          title: "Adventure through European Cities",
          price: "₹2000",
          highlights: ["Multi-city exploration", "Hostel accommodations", "Local transport pass"],
          path: "/solo-adventures/backpacking"
        },
        {
          name: "Iceland Solo Trek",
          image: "solo/iceland.jpg",
          description: "7 Day's 6 Night",
          title: "Discover Iceland's Natural Wonders",
          price: "₹1800",
          highlights: ["Glacier hiking", "Northern lights", "Hot springs"],
          path: "/solo-adventures/iceland"
        },
        {
          name: "Japan Rail Journey",
          image: "solo/japan.jpg",
          description: "10 Day's Tour",
          title: "Cross Japan by Rail",
          price: "₹2200",
          highlights: ["JR Pass included", "City guided tours", "Cultural experiences"],
          path: "/solo-adventures/japan"
        }
      ]
    },
    {
      name: "Culinary Journeys",
      image: "culinary/main.jpg",
      description: "8 Day's 7 Night",
      title: "Taste the World's Finest Cuisines",
      price: "₹2500",
      path: "/culinary-journeys",
      subPlaces: [
        {
          name: "Italian Gastronomy",
          image: "culinary/italy.jpg",
          description: "6 Day's Tour",
          title: "From Tuscany to Naples",
          price: "₹2200",
          highlights: ["Cooking classes", "Wine tasting", "Market tours"],
          path: "/culinary/italy"
        },
        {
          name: "Thai Cooking Adventure",
          image: "culinary/thai.jpg",
          description: "5 Day's 4 Night",
          title: "Master Thai Cuisine",
          price: "₹1800",
          highlights: ["Street food tours", "Cooking workshops", "Spice market visits"],
          path: "/culinary/thai"
        },
        {
          name: "French Wine Tour",
          image: "culinary/wine.jpg",
          description: "7 Day's Tour",
          title: "Bordeaux to Champagne",
          price: "₹2800",
          highlights: ["Vineyard visits", "Wine tasting", "Gourmet meals"],
          path: "/culinary/wine"
        }
      ]
    },
    {
      name: "Cultural Immersion",
      image: "cultural/main.jpg",
      description: "10 Day's 9 Night",
      title: "Deep Dive into Local Traditions",
      price: "₹2800",
      path: "/cultural-immersion",
      subPlaces: [
        {
          name: "Kyoto Traditional Stay",
          image: "cultural/kyoto.jpg",
          description: "6 Day's Tour",
          title: "Experience Ancient Japan",
          price: "₹2400",
          highlights: ["Tea ceremony", "Temple stays", "Geisha district"],
          path: "/cultural/kyoto"
        },
        {
          name: "Moroccan Heritage",
          image: "cultural/morocco.jpg",
          description: "8 Day's 7 Night",
          title: "From Medinas to Desert",
          price: "₹2100",
          highlights: ["Riad stays", "Desert camping", "Artisan workshops"],
          path: "/cultural/morocco"
        },
        {
          name: "Indian Cultural Trail",
          image: "cultural/india.jpg",
          description: "9 Day's Tour",
          title: "Rajasthan's Royal Heritage",
          price: "₹2300",
          highlights: ["Palace visits", "Traditional dance", "Local festivals"],
          path: "/cultural/india"
        }
      ]
    },
    {
      name: "Luxury Retreats",
      image: "luxury/main.jpg",
      description: "7 Day's 6 Night",
      title: "Ultimate Luxury Experiences",
      price: "₹5000",
      path: "/luxury-retreats",
      subPlaces: [
        {
          name: "Maldives Private Villa",
          image: "luxury/maldives.jpg",
          description: "5 Day's 4 Night",
          title: "Overwater Paradise",
          price: "₹4500",
          highlights: ["Private butler", "Spa treatments", "Yacht dinner"],
          path: "/luxury/maldives"
        },
        {
          name: "Swiss Alpine Luxury",
          image: "luxury/swiss.jpg",
          description: "6 Day's 5 Night",
          title: "Mountain Resort Retreat",
          price: "₹5200",
          highlights: ["Helicopter tours", "Private ski lessons", "Michelin dining"],
          path: "/luxury/swiss"
        },
        {
          name: "Dubai Royal Experience",
          image: "luxury/dubai.jpg",
          description: "4 Day's 3 Night",
          title: "Desert Luxury",
          price: "₹4800",
          highlights: ["Burj Khalifa suite", "Desert safari", "Private shopping"],
          path: "/luxury/dubai"
        }
      ]
    },
    {
      name: "Eco Tours",
      image: "eco/main.jpg",
      description: "8 Day's 7 Night",
      title: "Sustainable Travel Adventures",
      price: "₹2000",
      path: "/eco-tours",
      subPlaces: [
        {
          name: "Costa Rica Nature",
          image: "eco/costarica.jpg",
          description: "7 Day's Tour",
          title: "Rainforest & Wildlife",
          price: "₹1900",
          highlights: ["Wildlife watching", "Eco lodges", "Conservation projects"],
          path: "/eco/costarica"
        },
        {
          name: "New Zealand Eco Trek",
          image: "eco/newzealand.jpg",
          description: "9 Day's 8 Night",
          title: "Sustainable Hiking Adventure",
          price: "₹2400",
          highlights: ["Green accommodations", "Native forest walks", "Local community visits"],
          path: "/eco/newzealand"
        },
        {
          name: "Galapagos Discovery",
          image: "eco/galapagos.jpg",
          description: "6 Day's 5 Night",
          title: "Island Conservation Tour",
          price: "₹3200",
          highlights: ["Wildlife encounters", "Marine conservation", "Sustainable sailing"],
          path: "/eco/galapagos"
        }
      ]
    }
  ];
  
  export default categoryPackages;