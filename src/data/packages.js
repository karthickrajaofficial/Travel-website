// src/data/PackageData.js
export const packages = [
    {
      name: "Paris",
      image: "paris.jpg",
      description: "4 Day's 3 Night",
      title: "Enjoy the Beauty place in Paris City",
      price: "$1200",
      path: "/paris",
      categories: ["city", "culture", "romantic", "historical"],
      subPlaces: [
        {
          name: "Eiffel Tower Tour",
          image: "package/effil.jpg",
          description: "2 Day's 1 Night",
          title: "Experience the iconic symbol of Paris",
          price: "$400",
          highlights: ["Skip-the-line access", "Summit access", "Night light show"],
          path: "/paris/eiffel-tower",
          categories: ["landmark", "romantic", "city"]
        },
        {
          name: "Louvre Museum",
          image: "package/Louvre.jpg",
          description: "1 Day Tour",
          title: "Discover world's largest art museum",
          price: "$300",
          highlights: ["Mona Lisa viewing", "Guided tour", "Art history"],
          path: "/paris/louvre",
          categories: ["culture", "art", "museum"]
        },
        {
          name: "Versailles Palace",
          image: "package/Versailles.jpg",
          description: "1 Day Tour",
          title: "Visit the grand Palace of Versailles",
          price: "$350",
          highlights: ["Hall of Mirrors", "Royal Gardens", "Marie Antoinette Estate"],
          path: "/paris/versailles",
          categories: ["historical", "culture", "garden"]
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
      categories: ["beach", "culture", "historical", "island"],
      subPlaces: [
        {
          name: "Santorini Island",
          image: "greece/santorini.jpg",
          description: "3 Day's 2 Night",
          title: "Experience the magic of Santorini",
          price: "$800",
          highlights: ["Blue Domed Churches", "Sunset in Oia", "Black Sand Beaches"],
          path: "/greece/santorini",
          categories: ["island", "romantic", "beach"]
        },
        {
          name: "Athens Tour",
          image: "greece/athens.jpg",
          description: "2 Day's 1 Night",
          title: "Explore ancient Athens",
          price: "$500",
          highlights: ["Acropolis", "Parthenon", "Ancient Agora"],
          path: "/greece/athens",
          categories: ["historical", "culture", "city"]
        },
        {
          name: "Mykonos Island",
          image: "greece/mykonos.jpg",
          description: "2 Day's 1 Night",
          title: "Discover vibrant Mykonos",
          price: "$600",
          highlights: ["Windmills", "Little Venice", "Paradise Beach"],
          path: "/greece/mykonos",
          categories: ["beach", "island", "nightlife"]
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
      categories: ["beach", "luxury", "romantic", "island"],
      subPlaces: [
        {
          name: "Male City Tour",
          image: "maldives/male.jpg",
          description: "1 Day Tour",
          title: "Explore the capital city",
          price: "$200",
          highlights: ["Local Markets", "Mosques", "Cultural Sites"],
          path: "/maldives/male",
          categories: ["city", "culture", "shopping"]
        },
        {
          name: "Resort Island Stay",
          image: "maldives/resort.jpg",
          description: "3 Day's 2 Night",
          title: "Luxury overwater villa experience",
          price: "$1200",
          highlights: ["Water Villa", "Spa Treatment", "Water Sports"],
          path: "/maldives/resort",
          categories: ["luxury", "romantic", "spa"]
        },
        {
          name: "Diving Adventure",
          image: "maldives/diving.jpg",
          description: "2 Day's",
          title: "Underwater exploration package",
          price: "$600",
          highlights: ["Scuba Diving", "Coral Reefs", "Marine Life"],
          path: "/maldives/diving",
          categories: ["adventure", "water-sports", "nature"]
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
      categories: ["culture", "spiritual", "mountain", "adventure"],
      subPlaces: [
        {
          name: "Paro Valley",
          image: "bhutan/paro.jpg",
          description: "2 Day's 1 Night",
          title: "Visit Tiger's Nest Monastery",
          price: "$500",
          highlights: ["Tiger's Nest Trek", "Local Markets", "Buddhist Temples"],
          path: "/bhutan/paro",
          categories: ["trekking", "spiritual", "adventure"]
        },
        {
          name: "Thimphu Tour",
          image: "bhutan/thimphu.jpg",
          description: "2 Day's 1 Night",
          title: "Explore the capital city",
          price: "$450",
          highlights: ["Buddha Point", "Tashichho Dzong", "Folk Heritage Museum"],
          path: "/bhutan/thimphu",
          categories: ["city", "culture", "museum"]
        },
        {
          name: "Punakha Valley",
          image: "bhutan/punakha.jpg",
          description: "2 Day's 1 Night",
          title: "Visit ancient fortresses",
          price: "$480",
          highlights: ["Punakha Dzong", "Suspension Bridge", "Rice Fields"],
          path: "/bhutan/punakha",
          categories: ["nature", "historical", "culture"]
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
      categories: ["winter", "nature", "adventure", "northern-lights"],
      subPlaces: [
        {
          name: "Helsinki City",
          image: "finland/helsinki.jpg",
          description: "2 Day's 1 Night",
          title: "Explore the vibrant capital",
          price: "$400",
          highlights: ["Senate Square", "Market Hall", "Design District"],
          path: "/finland/helsinki",
          categories: ["city", "design", "culture"]
        },
        {
          name: "Lapland Aurora",
          image: "finland/lapland.jpg",
          description: "3 Day's 2 Night",
          title: "Northern Lights experience",
          price: "$800",
          highlights: ["Aurora Viewing", "Husky Safari", "Ice Hotel"],
          path: "/finland/lapland",
          categories: ["winter", "northern-lights", "adventure"]
        },
        {
          name: "Santa's Village",
          image: "finland/santa.jpg",
          description: "1 Day Tour",
          title: "Visit Santa's hometown",
          price: "$300",
          highlights: ["Meet Santa", "Arctic Circle", "Christmas Activities"],
          path: "/finland/santa",
          categories: ["family", "winter", "theme-park"]
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
      categories: ["mountain", "nature", "adventure", "luxury"],
      subPlaces: [
        {
          name: "Zurich City Tour",
          image: "switzerland/zurich.jpg",
          description: "2 Day's 1 Night",
          title: "Explore Switzerland's Largest City",
          price: "$500",
          highlights: ["Old Town Walk", "Lake Zurich Cruise", "Swiss National Museum"],
          path: "/switzerland/zurich",
          categories: ["city", "culture", "luxury"]
        },
        {
          name: "Lucerne Scenic Experience",
          image: "switzerland/lucerne.jpg",
          description: "2 Day's 1 Night",
          title: "Picturesque Mountain and Lake Destination",
          price: "$600",
          highlights: ["Chapel Bridge", "Mount Pilatus", "Lake Lucerne Panorama"],
          path: "/switzerland/lucerne",
          categories: ["scenic", "nature", "lake"]
        },
        {
          name: "Swiss Alps Adventure",
          image: "switzerland/alps.jpg",
          description: "3 Day's 2 Night",
          title: "Mountain Peaks and Alpine Valleys",
          price: "$800",
          highlights: ["Jungfraujoch Excursion", "Glacier Hiking", "Alpine Village Experience"],
          path: "/switzerland/alps",
          categories: ["adventure", "mountain", "hiking"]
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
      categories: ["nature", "adventure", "winter", "northern-lights"],
      subPlaces: [
        {
          name: "Reykjavik City Tour",
          image: "iceland/reykjavik.jpg",
          description: "2 Day's 1 Night",
          title: "Explore Iceland's Vibrant Capital",
          price: "$600",
          highlights: ["Hallgrímskirkja Church", "Harbor Area", "Local Culture Walk"],
          path: "/iceland/reykjavik",
          categories: ["city", "culture", "art"]
        },
        {
          name: "Golden Circle Tour",
          image: "iceland/golden-circle.jpg",
          description: "2 Day's 1 Night",
          title: "Natural Wonders Expedition",
          price: "$700",
          highlights: ["Þingvellir National Park", "Geysir Geothermal Area", "Gullfoss Waterfall"],
          path: "/iceland/golden-circle",
          categories: ["nature", "scenic", "geothermal"]
        },
        {
          name: "South Coast Adventure",
          image: "iceland/south-coast.jpg",
          description: "3 Day's 2 Night",
          title: "Dramatic Landscapes and Natural Marvels",
          price: "$900",
          highlights: ["Black Sand Beaches", "Volcano Exploration", "Glacier Walks"],
          path: "/iceland/south-coast",
          categories: ["adventure", "nature", "beach"]
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
      categories: ["culture", "historical", "city", "food-wine"],
      subPlaces: [
        {
          name: "Berlin Historical Tour",
          image: "germany/berlin.jpg",
          description: "2 Day's 1 Night",
          title: "Discover Berlin's Rich History",
          price: "$550",
          highlights: ["Brandenburg Gate", "Berlin Wall Memorial", "Museum Island"],
          path: "/germany/berlin",
          categories: ["historical", "museum", "city"]
        },
        {
          name: "Bavarian Experience",
          image: "germany/bavaria.jpg",
          description: "2 Day's 1 Night",
          title: "Castles, Culture, and Tradition",
          price: "$650",
          highlights: ["Neuschwanstein Castle", "Munich City Tour", "Traditional Beer Hall"],
          path: "/germany/bavaria",
          categories: ["culture", "castle", "food-wine"]
        },
        {
          name: "Rhine Valley Journey",
          image: "germany/rhine.jpg",
          description: "2 Day's 1 Night",
          title: "Romantic River and Medieval Towns",
          price: "$500",
          highlights: ["Rhine River Cruise", "Medieval Castles", "Vineyard Visits"],
          path: "/germany/rhine-valley",
          categories: ["romantic", "scenic", "food-wine"]
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
      categories: ["city", "culture", "historical", "shopping"],
      subPlaces: [
        {
          name: "Royal London Tour",
          image: "london/royal.jpg",
          description: "2 Day's 1 Night",
          title: "Buckingham Palace and Royal Landmarks",
          price: "$600",
          highlights: ["Changing of the Guard", "Tower of London", "Westminster Abbey"],
          path: "/london/royal",
          categories: ["historical", "royal", "landmark"]
        },
        {
          name: "Thames River Experience",
          image: "london/thames.jpg",
          description: "1 Day Tour",
          title: "River Cruise and City Sights",
          price: "$300",
          highlights: ["River Cruise", "Tower Bridge", "London Eye"],
          path: "/london/thames",
          categories: ["scenic", "cruise", "city"]
        },
        {
          name: "British Museum and Culture",
          image: "london/museum.jpg",
          description: "2 Day's 1 Night",
          title: "Museums, Art, and Culture",
          price: "$400",
          highlights: ["British Museum", "Tate Modern", "Shakespeare's Globe"],
          path: "/london/culture",
          categories: ["museum", "art", "culture"]
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
      categories: ["culture", "historical", "food-wine", "art"],
      subPlaces: [
        {
          name: "Rome Historical Tour",
          image: "italy/rome.jpg",
          description: "3 Day's 2 Night",
          title: "Eternal City's Ancient Wonders",
          price: "$800",
          highlights: ["Colosseum", "Vatican City", "Roman Forum"],
          path: "/italy/rome",
          categories: ["historical", "religious", "ancient"]
        },
        {
          name: "Venice Romantic Getaway",
          image: "italy/venice.jpg",
          description: "2 Day's 1 Night",
          title: "Canals and Classic Architecture",
          price: "$700",
          highlights: ["Gondola Ride", "St. Mark's Basilica", "Rialto Bridge"],
        path: "/italy/venice",
        categories: ["romantic", "city", "culture"]
      },
      {
        name: "Florence Art and Culture",
        image: "italy/florence.jpg",
        description: "2 Day's 1 Night",
        title: "Renaissance Art and Tuscan Charm",
        price: "$600",
        highlights: ["Uffizi Gallery", "Duomo", "Ponte Vecchio"],
        path: "/italy/florence",
        categories: ["art", "culture", "food-wine"]
      }
    ]
  }
];

// All available categories for reference and filtering
export const allCategories = [
  "adventure",
  "ancient",
  "art",
  "beach",
  "castle",
  "city",
  "cruise",
  "culture",
  "design",
  "family",
  "food-wine",
  "garden",
  "geothermal",
  "hiking",
  "historical",
  "island",
  "lake",
  "landmark",
  "luxury",
  "mountain",
  "museum",
  "nature",
  "nightlife",
  "northern-lights",
  "religious",
  "romantic",
  "royal",
  "scenic",
  "shopping",
  "spa",
  "spiritual",
  "theme-park",
  "trekking",
  "water-sports",
  "winter"
];

// Export both named and default exports
// export { packages };
export default packages;