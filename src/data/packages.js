const packages = [
    // {
    //   name: "Paris",
    //   image: "01.jpg",
    //   description: "4 Day's 3 Night",
    //   title: "Enjoy the Beauty place in Paris City",
    //   price: "$1200",
    //   path: "/paris",
    //   subPlaces: [
    //     {
    //       name: "Eiffel Tower Tour",
    //       image: "paris/eiffel.jpg",
    //       description: "2 Day's 1 Night",
    //       title: "Experience the iconic symbol of Paris",
    //       price: "$400",
    //       highlights: ["Skip-the-line access", "Summit access", "Night light show"],
    //       path: "/paris/eiffel-tower"
    //     },
    //     {
    //       name: "Louvre Museum",
    //       image: "paris/louvre.jpg",
    //       description: "1 Day Tour",
    //       title: "Discover world's largest art museum",
    //       price: "$300",
    //       highlights: ["Mona Lisa viewing", "Guided tour", "Art history"],
    //       path: "/paris/louvre"
    //     },
    //     {
    //       name: "Versailles Palace",
    //       image: "paris/versailles.jpg",
    //       description: "1 Day Tour",
    //       title: "Visit the grand Palace of Versailles",
    //       price: "$350",
    //       highlights: ["Hall of Mirrors", "Royal Gardens", "Marie Antoinette Estate"],
    //       path: "/paris/versailles"
    //     }
    //   ]
    // },
    // {
    //   name: "Greece",
    //   image: "02.jpg",
    //   description: "4 Day's 3 Night",
    //   title: "Enjoy the Beauty place in Greece",
    //   price: "$1200",
    //   path: "/greece",
    //   subPlaces: [
    //     {
    //       name: "Santorini Island",
    //       image: "greece/santorini.jpg",
    //       description: "3 Day's 2 Night",
    //       title: "Experience the magic of Santorini",
    //       price: "$800",
    //       highlights: ["Blue Domed Churches", "Sunset in Oia", "Black Sand Beaches"],
    //       path: "/greece/santorini"
    //     },
    //     {
    //       name: "Athens Tour",
    //       image: "greece/athens.jpg",
    //       description: "2 Day's 1 Night",
    //       title: "Explore ancient Athens",
    //       price: "$500",
    //       highlights: ["Acropolis", "Parthenon", "Ancient Agora"],
    //       path: "/greece/athens"
    //     },
    //     {
    //       name: "Mykonos Island",
    //       image: "greece/mykonos.jpg",
    //       description: "2 Day's 1 Night",
    //       title: "Discover vibrant Mykonos",
    //       price: "$600",
    //       highlights: ["Windmills", "Little Venice", "Paradise Beach"],
    //       path: "/greece/mykonos"
    //     }
    //   ]
    // },
    // {
    //   name: "Maldives",
    //   image: "03.jpg",
    //   description: "4 Day's 3 Night",
    //   title: "Paradise in Maldives",
    //   price: "$1500",
    //   path: "/maldives",
    //   subPlaces: [
    //     {
    //       name: "Male City Tour",
    //       image: "maldives/male.jpg",
    //       description: "1 Day Tour",
    //       title: "Explore the capital city",
    //       price: "$200",
    //       highlights: ["Local Markets", "Mosques", "Cultural Sites"],
    //       path: "/maldives/male"
    //     },
    //     {
    //       name: "Resort Island Stay",
    //       image: "maldives/resort.jpg",
    //       description: "3 Day's 2 Night",
    //       title: "Luxury overwater villa experience",
    //       price: "$1200",
    //       highlights: ["Water Villa", "Spa Treatment", "Water Sports"],
    //       path: "/maldives/resort"
    //     },
    //     {
    //       name: "Diving Adventure",
    //       image: "maldives/diving.jpg",
    //       description: "2 Day's",
    //       title: "Underwater exploration package",
    //       price: "$600",
    //       highlights: ["Scuba Diving", "Coral Reefs", "Marine Life"],
    //       path: "/maldives/diving"
    //     }
    //   ]
    // },
    // {
    //   name: "Bhutan",
    //   image: "04.jpg",
    //   description: "4 Day's 3 Night",
    //   title: "Mystical Kingdom of Bhutan",
    //   price: "$1200",
    //   path: "/bhutan",
    //   subPlaces: [
    //     {
    //       name: "Paro Valley",
    //       image: "bhutan/paro.jpg",
    //       description: "2 Day's 1 Night",
    //       title: "Visit Tiger's Nest Monastery",
    //       price: "$500",
    //       highlights: ["Tiger's Nest Trek", "Local Markets", "Buddhist Temples"],
    //       path: "/bhutan/paro"
    //     },
    //     {
    //       name: "Thimphu Tour",
    //       image: "bhutan/thimphu.jpg",
    //       description: "2 Day's 1 Night",
    //       title: "Explore the capital city",
    //       price: "$450",
    //       highlights: ["Buddha Point", "Tashichho Dzong", "Folk Heritage Museum"],
    //       path: "/bhutan/thimphu"
    //     },
    //     {
    //       name: "Punakha Valley",
    //       image: "bhutan/punakha.jpg",
    //       description: "2 Day's 1 Night",
    //       title: "Visit ancient fortresses",
    //       price: "$480",
    //       highlights: ["Punakha Dzong", "Suspension Bridge", "Rice Fields"],
    //       path: "/bhutan/punakha"
    //     }
    //   ]
    // },
    // {
    //   name: "Finland",
    //   image: "05.jpg",
    //   description: "4 Day's 3 Night",
    //   title: "Northern Lights in Finland",
    //   price: "$1400",
    //   path: "/finland",
    //   subPlaces: [
    //     {
    //       name: "Helsinki City",
    //       image: "finland/helsinki.jpg",
    //       description: "2 Day's 1 Night",
    //       title: "Explore the vibrant capital",
    //       price: "$400",
    //       highlights: ["Senate Square", "Market Hall", "Design District"],
    //       path: "/finland/helsinki"
    //     },
    //     {
    //       name: "Lapland Aurora",
    //       image: "finland/lapland.jpg",
    //       description: "3 Day's 2 Night",
    //       title: "Northern Lights experience",
    //       price: "$800",
    //       highlights: ["Aurora Viewing", "Husky Safari", "Ice Hotel"],
    //       path: "/finland/lapland"
    //     },
    //     {
    //       name: "Santa's Village",
    //       image: "finland/santa.jpg",
    //       description: "1 Day Tour",
    //       title: "Visit Santa's hometown",
    //       price: "$300",
    //       highlights: ["Meet Santa", "Arctic Circle", "Christmas Activities"],
    //       path: "/finland/santa"
    //     }
    //   ]
    // }
    
        // Category Packages
        {
          name: "Solo Adventures",
          image: "category/adventure.jpg",
          description: "5 Day's 4 Night",
          title: "Experience Freedom in Solo Travel",
          price: "$1500",
          path: "/solo-adventures",
          subPlaces: [
            {
              name: "Backpacking Europe",
              image: "solo/backpacking.jpg",
              description: "15 Day's Tour",
              title: "Adventure through European Cities",
              price: "$2000",
              highlights: ["Multi-city exploration", "Hostel accommodations", "Local transport pass"],
              path: "/solo-adventures/backpacking"
            },
            {
              name: "Iceland Solo Trek",
              image: "solo/iceland.jpg",
              description: "7 Day's 6 Night",
              title: "Discover Iceland's Natural Wonders",
              price: "$1800",
              highlights: ["Glacier hiking", "Northern lights", "Hot springs"],
              path: "/solo-adventures/iceland"
            },
            {
              name: "Japan Rail Journey",
              image: "solo/japan.jpg",
              description: "10 Day's Tour",
              title: "Cross Japan by Rail",
              price: "$2200",
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
          price: "$2500",
          path: "/culinary-journeys",
          subPlaces: [
            {
              name: "Italian Gastronomy",
              image: "culinary/italy.jpg",
              description: "6 Day's Tour",
              title: "From Tuscany to Naples",
              price: "$2200",
              highlights: ["Cooking classes", "Wine tasting", "Market tours"],
              path: "/culinary/italy"
            },
            {
              name: "Thai Cooking Adventure",
              image: "culinary/thai.jpg",
              description: "5 Day's 4 Night",
              title: "Master Thai Cuisine",
              price: "$1800",
              highlights: ["Street food tours", "Cooking workshops", "Spice market visits"],
              path: "/culinary/thai"
            },
            {
              name: "French Wine Tour",
              image: "culinary/wine.jpg",
              description: "7 Day's Tour",
              title: "Bordeaux to Champagne",
              price: "$2800",
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
          price: "$2800",
          path: "/cultural-immersion",
          subPlaces: [
            {
              name: "Kyoto Traditional Stay",
              image: "cultural/kyoto.jpg",
              description: "6 Day's Tour",
              title: "Experience Ancient Japan",
              price: "$2400",
              highlights: ["Tea ceremony", "Temple stays", "Geisha district"],
              path: "/cultural/kyoto"
            },
            {
              name: "Moroccan Heritage",
              image: "cultural/morocco.jpg",
              description: "8 Day's 7 Night",
              title: "From Medinas to Desert",
              price: "$2100",
              highlights: ["Riad stays", "Desert camping", "Artisan workshops"],
              path: "/cultural/morocco"
            },
            {
              name: "Indian Cultural Trail",
              image: "cultural/india.jpg",
              description: "9 Day's Tour",
              title: "Rajasthan's Royal Heritage",
              price: "$2300",
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
          price: "$5000",
          path: "/luxury-retreats",
          subPlaces: [
            {
              name: "Maldives Private Villa",
              image: "luxury/maldives.jpg",
              description: "5 Day's 4 Night",
              title: "Overwater Paradise",
              price: "$4500",
              highlights: ["Private butler", "Spa treatments", "Yacht dinner"],
              path: "/luxury/maldives"
            },
            {
              name: "Swiss Alpine Luxury",
              image: "luxury/swiss.jpg",
              description: "6 Day's 5 Night",
              title: "Mountain Resort Retreat",
              price: "$5200",
              highlights: ["Helicopter tours", "Private ski lessons", "Michelin dining"],
              path: "/luxury/swiss"
            },
            {
              name: "Dubai Royal Experience",
              image: "luxury/dubai.jpg",
              description: "4 Day's 3 Night",
              title: "Desert Luxury",
              price: "$4800",
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
          price: "$2000",
          path: "/eco-tours",
          subPlaces: [
            {
              name: "Costa Rica Nature",
              image: "eco/costarica.jpg",
              description: "7 Day's Tour",
              title: "Rainforest & Wildlife",
              price: "$1900",
              highlights: ["Wildlife watching", "Eco lodges", "Conservation projects"],
              path: "/eco/costarica"
            },
            {
              name: "New Zealand Eco Trek",
              image: "eco/newzealand.jpg",
              description: "9 Day's 8 Night",
              title: "Sustainable Hiking Adventure",
              price: "$2400",
              highlights: ["Green accommodations", "Native forest walks", "Local community visits"],
              path: "/eco/newzealand"
            },
            {
              name: "Galapagos Discovery",
              image: "eco/galapagos.jpg",
              description: "6 Day's 5 Night",
              title: "Island Conservation Tour",
              price: "$3200",
              highlights: ["Wildlife encounters", "Marine conservation", "Sustainable sailing"],
              path: "/eco/galapagos"
            }
          ]
        },
        
        // Individual Destination Packages
        // {
        //   name: "Paris",
        //   image: "01.jpg",
        //   description: "4 Day's 3 Night",
        //   title: "Enjoy the Beauty place in Paris City",
        //   price: "$1200",
        //   path: "/paris",
        //   subPlaces: [
        //     {
        //       name: "Eiffel Tower Tour",
        //       image: "paris/eiffel.jpg",
        //       description: "2 Day's 1 Night",
        //       title: "Experience the iconic symbol of Paris",
        //       price: "$400",
        //       highlights: ["Skip-the-line access", "Summit access", "Night light show"],
        //       path: "/paris/eiffel-tower"
        //     },
        //     {
        //       name: "Louvre Museum",
        //       image: "paris/louvre.jpg",
        //       description: "1 Day Tour",
        //       title: "Discover world's largest art museum",
        //       price: "$300",
        //       highlights: ["Mona Lisa viewing", "Guided tour", "Art history"],
        //       path: "/paris/louvre"
        //     },
        //     {
        //       name: "Versailles Palace",
        //       image: "paris/versailles.jpg",
        //       description: "1 Day Tour",
        //       title: "Visit the grand Palace of Versailles",
        //       price: "$350",
        //       highlights: ["Hall of Mirrors", "Royal Gardens", "Marie Antoinette Estate"],
        //       path: "/paris/versailles"
        //     }
        //   ]
        // },
        // {
        //   name: "Greece",
        //   image: "02.jpg",
        //   description: "4 Day's 3 Night",
        //   title: "Enjoy the Beauty place in Greece",
        //   price: "$1200",
        //   path: "/greece",
        //   subPlaces: [
        //     {
        //       name: "Santorini Island",
        //       image: "greece/santorini.jpg",
        //       description: "3 Day's 2 Night",
        //       title: "Experience the magic of Santorini",
        //       price: "$800",
        //       highlights: ["Blue Domed Churches", "Sunset in Oia", "Black Sand Beaches"],
        //       path: "/greece/santorini"
        //     },
        //     {
        //       name: "Athens Tour",
        //       image: "greece/athens.jpg",
        //       description: "2 Day's 1 Night",
        //       title: "Explore ancient Athens",
        //       price: "$500",
        //       highlights: ["Acropolis", "Parthenon", "Ancient Agora"],
        //       path: "/greece/athens"
        //     },
        //     {
        //       name: "Mykonos Island",
        //       image: "greece/mykonos.jpg",
        //       description: "2 Day's 1 Night",
        //       title: "Discover vibrant Mykonos",
        //       price: "$600",
        //       highlights: ["Windmills", "Little Venice", "Paradise Beach"],
        //       path: "/greece/mykonos"
        //     }
        //   ]
        // },
        // {
        //   name: "Maldives",
        //   image: "03.jpg",
        //   description: "4 Day's 3 Night",
        //   title: "Paradise in Maldives",
        //   price: "$1500",
        //   path: "/maldives",
        //   subPlaces: [
        //     {
        //       name: "Male City Tour",
        //       image: "maldives/male.jpg",
        //       description: "1 Day Tour",
        //       title: "Explore the capital city",
        //       price: "$200",
        //       highlights: ["Local Markets", "Mosques", "Cultural Sites"],
        //       path: "/maldives/male"
        //     },
        //     {
        //       name: "Resort Island Stay",
        //       image: "maldives/resort.jpg",
        //       description: "3 Day's 2 Night",
        //       title: "Luxury overwater villa experience",
        //       price: "$1200",
        //       highlights: ["Water Villa", "Spa Treatment", "Water Sports"],
        //       path: "/maldives/resort"
        //     },
        //     {
        //       name: "Diving Adventure",
        //       image: "maldives/diving.jpg",
        //       description: "2 Day's",
        //       title: "Underwater exploration package",
        //       price: "$600",
        //       highlights: ["Scuba Diving", "Coral Reefs", "Marine Life"],
        //       path: "/maldives/diving"
        //     }
        //   ]
        // },
        // {
        //   name: "Bhutan",
        //   image: "04.jpg",
        //   description: "4 Day's 3 Night",
        //   title: "Mystical Kingdom of Bhutan",
        //   price: "$1200",
        //   path: "/bhutan",
        //   subPlaces: [
        //     {
        //       name: "Paro Valley",
        //       image: "bhutan/paro.jpg",
        //       description: "2 Day's 1 Night",
        //       title: "Visit Tiger's Nest Monastery",
        //       price: "$500",
        //       highlights: ["Tiger's Nest Trek", "Local Markets", "Buddhist Temples"],
        //       path: "/bhutan/paro"
        //     },
        //     {
        //       name: "Thimphu Tour",
        //       image: "bhutan/thimphu.jpg",
        //       description: "2 Day's 1 Night",
        //       title: "Explore the capital city",
        //       price: "$450",
        //       highlights: ["Buddha Point", "Tashichho Dzong", "Folk Heritage Museum"],
        //       path: "/bhutan/thimphu"
        //     },
        //     {
        //       name: "Punakha Valley",
        //       image: "bhutan/punakha.jpg",
        //       description: "2 Day's 1 Night",
        //       title: "Visit ancient fortresses",
        //       price: "$480",
        //       highlights: ["Punakha Dzong", "Suspension Bridge", "Rice Fields"],
        //       path: "/bhutan/punakha"
        //     }
        //   ]
        // },
        // {
        //   name: "Finland",
        //   image: "05.jpg",
        //   description: "4 Day's 3 Night",
        //   title: "Northern Lights in Finland",
        //   price: "$1400",
        //   path: "/finland",
        //   subPlaces: [
        //     {
        //       name: "Helsinki City",
        //       image: "finland/helsinki.jpg",
        //       description: "2 Day's 1 Night",
        //       title: "Explore the vibrant capital",
        //       price: "$400",
        //       highlights: ["Senate Square", "Market Hall", "Design District"],
        //       path: "/finland/helsinki"
        //     },
        //     {
        //       name: "Lapland Aurora",
        //       image: "finland/lapland.jpg",
        //       description: "3 Day's 2 Night",
        //       title: "Northern Lights experience",
        //       price: "$800",
        //       highlights: ["Aurora Viewing", "Husky Safari", "Ice Hotel"],
        //       path: "/finland/lapland"
        //     },
        //     {
        //       name: "Santa's Village",
        //       image: "finland/santa.jpg",
        //       description: "1 Day Tour",
        //       title: "Visit Santa's hometown",
        //       price: "$300",
        //       highlights: ["Meet Santa", "Arctic Circle", "Christmas Activities"],
        //       path: "/finland/santa"
        //     }
        //   ]
        // }
        
          {
            name: "Paris",
            image: "paris.jpg",
            description: "4 Day's 3 Night",
            title: "Enjoy the Beauty place in Paris City",
            price: "$1200",
            path: "/paris",
            subPlaces: [
              {
                name: "Eiffel Tower Tour",
                image: "package/effil.jpg",
                description: "2 Day's 1 Night",
                title: "Experience the iconic symbol of Paris",
                price: "$400",
                highlights: ["Skip-the-line access", "Summit access", "Night light show"],
                path: "/paris/eiffel-tower"
              },
              {
                name: "Louvre Museum",
                image: "package/Louvre.jpg",
                description: "1 Day Tour",
                title: "Discover world's largest art museum",
                price: "$300",
                highlights: ["Mona Lisa viewing", "Guided tour", "Art history"],
                path: "/paris/louvre"
              },
              {
                name: "Versailles Palace",
                image: "package/Versailles.jpg",
                description: "1 Day Tour",
                title: "Visit the grand Palace of Versailles",
                price: "$350",
                highlights: ["Hall of Mirrors", "Royal Gardens", "Marie Antoinette Estate"],
                path: "/paris/versailles"
              }
            ]
          },
          {
            name: "Greece",
            image: "02.jpg",
            description: "4 Day's 3 Night",
            title: "Enjoy the Beauty place in Greece",
            price: "$1200",
            path: "/greece",
            subPlaces: [
              {
                name: "Santorini Island",
                image: "greece/santorini.jpg",
                description: "3 Day's 2 Night",
                title: "Experience the magic of Santorini",
                price: "$800",
                highlights: ["Blue Domed Churches", "Sunset in Oia", "Black Sand Beaches"],
                path: "/greece/santorini"
              },
              {
                name: "Athens Tour",
                image: "greece/athens.jpg",
                description: "2 Day's 1 Night",
                title: "Explore ancient Athens",
                price: "$500",
                highlights: ["Acropolis", "Parthenon", "Ancient Agora"],
                path: "/greece/athens"
              },
              {
                name: "Mykonos Island",
                image: "greece/mykonos.jpg",
                description: "2 Day's 1 Night",
                title: "Discover vibrant Mykonos",
                price: "$600",
                highlights: ["Windmills", "Little Venice", "Paradise Beach"],
                path: "/greece/mykonos"
              }
            ]
          },
          {
            name: "Maldives",
            image: "03.jpg",
            description: "4 Day's 3 Night",
            title: "Paradise in Maldives",
            price: "$1500",
            path: "/maldives",
            subPlaces: [
              {
                name: "Male City Tour",
                image: "maldives/male.jpg",
                description: "1 Day Tour",
                title: "Explore the capital city",
                price: "$200",
                highlights: ["Local Markets", "Mosques", "Cultural Sites"],
                path: "/maldives/male"
              },
              {
                name: "Resort Island Stay",
                image: "maldives/resort.jpg",
                description: "3 Day's 2 Night",
                title: "Luxury overwater villa experience",
                price: "$1200",
                highlights: ["Water Villa", "Spa Treatment", "Water Sports"],
                path: "/maldives/resort"
              },
              {
                name: "Diving Adventure",
                image: "maldives/diving.jpg",
                description: "2 Day's",
                title: "Underwater exploration package",
                price: "$600",
                highlights: ["Scuba Diving", "Coral Reefs", "Marine Life"],
                path: "/maldives/diving"
              }
            ]
          },
          {
            name: "Bhutan",
            image: "04.jpg",
            description: "4 Day's 3 Night",
            title: "Mystical Kingdom of Bhutan",
            price: "$1200",
            path: "/bhutan",
            subPlaces: [
              {
                name: "Paro Valley",
                image: "bhutan/paro.jpg",
                description: "2 Day's 1 Night",
                title: "Visit Tiger's Nest Monastery",
                price: "$500",
                highlights: ["Tiger's Nest Trek", "Local Markets", "Buddhist Temples"],
                path: "/bhutan/paro"
              },
              {
                name: "Thimphu Tour",
                image: "bhutan/thimphu.jpg",
                description: "2 Day's 1 Night",
                title: "Explore the capital city",
                price: "$450",
                highlights: ["Buddha Point", "Tashichho Dzong", "Folk Heritage Museum"],
                path: "/bhutan/thimphu"
              },
              {
                name: "Punakha Valley",
                image: "bhutan/punakha.jpg",
                description: "2 Day's 1 Night",
                title: "Visit ancient fortresses",
                price: "$480",
                highlights: ["Punakha Dzong", "Suspension Bridge", "Rice Fields"],
                path: "/bhutan/punakha"
              }
            ]
          },
          {
            name: "Finland",
            image: "05.jpg",
            description: "4 Day's 3 Night",
            title: "Northern Lights in Finland",
            price: "$1400",
            path: "/finland",
            subPlaces: [
              {
                name: "Helsinki City",
                image: "finland/helsinki.jpg",
                description: "2 Day's 1 Night",
                title: "Explore the vibrant capital",
                price: "$400",
                highlights: ["Senate Square", "Market Hall", "Design District"],
                path: "/finland/helsinki"
              },
              {
                name: "Lapland Aurora",
                image: "finland/lapland.jpg",
                description: "3 Day's 2 Night",
                title: "Northern Lights experience",
                price: "$800",
                highlights: ["Aurora Viewing", "Husky Safari", "Ice Hotel"],
                path: "/finland/lapland"
              },
              {
                name: "Santa's Village",
                image: "finland/santa.jpg",
                description: "1 Day Tour",
                title: "Visit Santa's hometown",
                price: "$300",
                highlights: ["Meet Santa", "Arctic Circle", "Christmas Activities"],
                path: "/finland/santa"
              }
            ]
          },
          {
            name: "Switzerland",
            image: "06.jpg",
            description: "5 Day's 4 Night",
            title: "Alpine Wonders and Swiss Charm",
            price: "$1800",
            path: "/switzerland",
            subPlaces: [
              {
                name: "Zurich City Tour",
                image: "switzerland/zurich.jpg",
                description: "2 Day's 1 Night",
                title: "Explore Switzerland's Largest City",
                price: "$500",
                highlights: ["Old Town Walk", "Lake Zurich Cruise", "Swiss National Museum"],
                path: "/switzerland/zurich"
              },
              {
                name: "Lucerne Scenic Experience",
                image: "switzerland/lucerne.jpg",
                description: "2 Day's 1 Night",
                title: "Picturesque Mountain and Lake Destination",
                price: "$600",
                highlights: ["Chapel Bridge", "Mount Pilatus", "Lake Lucerne Panorama"],
                path: "/switzerland/lucerne"
              },
              {
                name: "Swiss Alps Adventure",
                image: "switzerland/alps.jpg",
                description: "3 Day's 2 Night",
                title: "Mountain Peaks and Alpine Valleys",
                price: "$800",
                highlights: ["Jungfraujoch Excursion", "Glacier Hiking", "Alpine Village Experience"],
                path: "/switzerland/alps"
              }
            ]
          },
          {
            name: "Iceland",
            image: "07.jpg",
            description: "6 Day's 5 Night",
            title: "Land of Fire and Ice",
            price: "$2200",
            path: "/iceland",
            subPlaces: [
              {
                name: "Reykjavik City Tour",
                image: "iceland/reykjavik.jpg",
                description: "2 Day's 1 Night",
                title: "Explore Iceland's Vibrant Capital",
                price: "$600",
                highlights: ["Hallgrímskirkja Church", "Harbor Area", "Local Culture Walk"],
                path: "/iceland/reykjavik"
              },
              {
                name: "Golden Circle Tour",
                image: "iceland/golden-circle.jpg",
                description: "2 Day's 1 Night",
                title: "Natural Wonders Expedition",
                price: "$700",
                highlights: ["Þingvellir National Park", "Geysir Geothermal Area", "Gullfoss Waterfall"],
                path: "/iceland/golden-circle"
              },
              {
                name: "South Coast Adventure",
                image: "iceland/south-coast.jpg",
                description: "3 Day's 2 Night",
                title: "Dramatic Landscapes and Natural Marvels",
                price: "$900",
                highlights: ["Black Sand Beaches", "Volcano Exploration", "Glacier Walks"],
                path: "/iceland/south-coast"
              }
            ]
          },
          {
            name: "Germany",
            image: "08.jpg",
            description: "5 Day's 4 Night",
            title: "Exploring German Heritage and Modernity",
            price: "$1600",
            path: "/germany",
            subPlaces: [
              {
                name: "Berlin Historical Tour",
                image: "germany/berlin.jpg",
                description: "2 Day's 1 Night",
                title: "Discover Berlin's Rich History",
                price: "$550",
                highlights: ["Brandenburg Gate", "Berlin Wall Memorial", "Museum Island"],
                path: "/germany/berlin"
              },
              {
                name: "Bavarian Experience",
                image: "germany/bavaria.jpg",
                description: "2 Day's 1 Night",
                title: "Castles, Culture, and Tradition",
                price: "$650",
                highlights: ["Neuschwanstein Castle", "Munich City Tour", "Traditional Beer Hall"],
                path: "/germany/bavaria"
              },
              {
                name: "Rhine Valley Journey",
                image: "germany/rhine.jpg",
                description: "2 Day's 1 Night",
                title: "Romantic River and Medieval Towns",
                price: "$500",
                highlights: ["Rhine River Cruise", "Medieval Castles", "Vineyard Visits"],
                path: "/germany/rhine-valley"
              }
            ]
          },
          {
            name: "London",
            image: "09.jpg",
            description: "4 Day's 3 Night",
            title: "Royal and Modern London Experience",
            price: "$1500",
            path: "/london",
            subPlaces: [
              {
                name: "Royal London Tour",
                image: "london/royal.jpg",
                description: "2 Day's 1 Night",
                title: "Buckingham Palace and Royal Landmarks",
                price: "$600",
                highlights: ["Changing of the Guard", "Tower of London", "Westminster Abbey"],
                path: "/london/royal"
              },
              {
                name: "Thames River Experience",
                image: "london/thames.jpg",
                description: "1 Day Tour",
                title: "River Cruise and City Sights",
                price: "$300",
                highlights: ["River Cruise", "Tower Bridge", "London Eye"],
                path: "/london/thames"
              },
              {
                name: "British Museum and Culture",
                image: "london/museum.jpg",
                description: "2 Day's 1 Night",
                title: "Museums, Art, and Culture",
                price: "$400",
                highlights: ["British Museum", "Tate Modern", "Shakespeare's Globe"],
                path: "/london/culture"
              }
            ]
          },
          {
            name: "Italy",
            image: "10.jpg",
            description: "7 Day's 6 Night",
            title: "Italian Heritage and Beauty",
            price: "$2000",
            path: "/italy",
            subPlaces: [
              {
                name: "Rome Historical Tour",
                image: "italy/rome.jpg",
                description: "3 Day's 2 Night",
                title: "Eternal City's Ancient Wonders",
                price: "$800",
                highlights: ["Colosseum", "Vatican City", "Roman Forum"],
                path: "/italy/rome"
              },
              {
                name: "Venice Romantic Getaway",
                image: "italy/venice.jpg",
                description: "2 Day's 1 Night",
                title: "Canals and Classic Architecture",
                price: "$700",
                highlights: ["Gondola Ride", "St. Mark's Basilica", "Rialto Bridge"],
                path: "/italy/venice"
              },
              {
                name: "Florence Art and Culture",
                image: "italy/florence.jpg",
                description: "2 Day's 1 Night",
                title: "Renaissance Art and Tuscan Charm",
                price: "$600",
                highlights: ["Uffizi Gallery", "Duomo", "Ponte Vecchio"],
                path: "/italy/florence"
              }
            ]
          }
      
      
  ];
  
  export default packages;