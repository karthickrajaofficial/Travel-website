export const packages = [
  // {
  //   name: "Paris",
  //   image: "paris.jpg",
  //   description: "4 Day's 3 Night",
  //   title: "Enjoy the Beauty place in Paris City",
  //   price: "₹1200",
  //   path: "/paris",
  //   type: "Independent Tours",

  //   categories: ["city", "culture", "romantic", "historical"],
  //   subPlaces: [
  //     {
  //       name: "Eiffel Tower Tour",
  //       image: "package/effil.jpg",
  //       description: "2 Day's 1 Night",
  //       title: "Experience the iconic symbol of Paris",
  //       price: "₹400",
  //       highlights: ["Skip-the-line access", "Summit access", "Night light show"],
  //       path: "/paris/eiffel-tower",
  //   type: "Independent Tours",

  //       categories: ["landmark", "romantic", "city"]
  //     },
  //     {
  //       name: "Louvre Museum",
  //       image: "package/Louvre.jpg",
  //       description: "1 Day Tour",
  //       title: "Discover world's largest art museum",
  //       price: "₹300",
  //       highlights: ["Mona Lisa viewing", "Guided tour", "Art history"],
  //       path: "/paris/louvre",
  //   type: "Independent Tours",

  //       categories: ["culture", "art", "museum"]
  //     },
  //     {
  //       name: "Versailles Palace",
  //       image: "package/Versailles.jpg",
  //       description: "1 Day Tour",
  //       title: "Visit the grand Palace of Versailles",
  //       price: "₹350",
  //       highlights: ["Hall of Mirrors", "Royal Gardens", "Marie Antoinette Estate"],
  //       path: "/paris/versailles",
  //   type: "Independent Tours",

  //       categories: ["historical", "culture", "garden"]
  //     }
  //   ]
  // },
  {
    id: "paris-main",
    name: "Paris",
    image: "paris.jpg",
    description: "4 Day's 3 Night",
    title: "Visit Iconic Landmarks with our Paris Tour Packages",
    experience: `Paris, the enchanting "Fairy-Tale City," beckons with its timeless allure and romantic spirit. A city where art meets architecture, and history dances with modernity, Paris offers an unforgettable journey through its charming boulevards and iconic landmarks.
    
    Our carefully curated 4-day, 3-night Paris tour package invites you to discover the city's most treasured attractions. Starting at just ₹1200, this independent tour lets you explore Paris at your own pace, immersing yourself in its rich culture, romantic atmosphere, and historical significance.`,
    reasons: [
      {
        title: "Mouthwatering Food",
        description: `If you’re a foodie, French cuisine alone should be a reason to visit the country. The French have elevated eating as an art form, so it is not surprising that their gastronomic meals are now listed as an intangible UNESCO cultural heritage.
        Be it the crusty and warm baguettes, the fresh seafood, or the wholesome boeuf bourguignon, every day in France promises to be a culinary adventure. With our France tour packages, you can wake up to the aroma of freshly baked French bread, learn about the complex world of French sauces, enjoy French charcuterie, or visit Paris’ multiple patisseries.`
      },
      {
        title: "Exquisite Wines",
        description: `Wine connoisseurs will have a gala time in France, as the country is well-known for its world-renowned wines. Almost every region in France has its own unique grape types and wine styles. While Bordeaux, Burgundy, and Champagne are the popular wine regions in the country, various bestselling wines and local favourites can also be found in specific regions and villages.
        With our France tour packages, you can visit the many wine estates and vineyards that the country is home to. Indulge in wine tasting sessions and gain deeper knowledge about making wine through the wine tours we can organise for you.`
      },
      {
        title: "History And Culture",
        description: `French history is deep and rich from the reign of Louis XIV to the French Revolution, the declaration of France as a Republic, the rise of Napoleon, and the declaration of human rights in 1948. Battlegrounds, cathedrals, and churches in France make for some of the most popular sightseeing spots, including the Old Port of Marseille, Sacre-Coeur Basilica, the Palace of Versailles, and Notre Dame.
        Cultural activities form such a vital part of the country that France has a Ministry of Culture in charge of the historical monuments and museums of France. The goal of the Ministry of Culture is to promote and protect the arts in the country and abroad, maintain the regional cultural centres of France, and keep up the identity of French culture. Several cultural events take place in France throughout the year. There is the Fete de la Musique, an event meant to promote music. It always takes place on the 21st of June, and professional and amateur musicians perform on the streets.`
      },
      {
        title: "Diverse Landscapes",
        description: `The sights in France are not just about museums, galleries, and sidewalk cafes. France has diverse and unique landscapes, from mountaintops and gorges to rivers, vineyards, and quaint villages. These landscapes allow travellers to engage in various adventurous activities, including rock climbing, cycling, and cave diving.
        On one hand, there are the snow-covered slopes of Mont Blanc, and on the other, there are the sunny beaches of Nice. The French Riviera is famous for its luxurious and flamboyant hotels and the celebrities who spend their holidays soaking in the Mediterranean sun. Whether you’re a beach person or a mountain lover, the landscapes of France will satisfy one and all.`
      },
      {
        title: "Vibrant Cities And Charming Countryside",
        description: `The vibrant cities of France contain a mix of museums, enticing scenery, unique architecture, and historical sites. Of course, there is Paris with its galleries, exhibitions, festivals, and fairs. There is the city of Nice, which is home to stunning beaches, Baroque architecture, intriguing museums, and interesting markets. Lyon is known for its gastronomy, museums, theatres, ancient heritage, and the popular Festival of Lights.
        When you wish to take a break from the hustle and bustle of city life, the French countryside offers the best escape. You will see high mountains, pink salt plains, scenic rivers, gorges, sandy beaches, and rolling green hills. Make sure to visit the highland region of Massif Central, the French Lake District of Limousin, and the lavender fields in Provence.`
      }
    ],
    path: "/paris",
    type: "Group Tours",
    categories: ["city", "culture", "romantic", "historical"],
    highlights: [
      "4-day comprehensive city tour",
      "Visit to major landmarks",
      "Cultural experiences",
      "Flexible itinerary"
    ],
    topAttractions: [
      {
        id: 1,
        name: "Eiffel Tower",
        image: "/package/effil.jpg",
        description: "Iconic iron lattice tower on the Champ de Mars",
        type: "Landmark",
        visitDuration: "2-3 hours",
        bestTime: "Sunset or night time for light show"
      },
      {
        id: 2,
        name: "Notre-Dame Cathedral",
        image: "/attractions/notre-dame.jpg",
        description: "Medieval Catholic cathedral with Gothic architecture",
        type: "Historical",
        visitDuration: "1-2 hours",
        bestTime: "Early morning"
      },
      {
        id: 3,
        name: "Palace of Versailles",
        image: "/attractions/versailles.jpg",
        description: "Royal château with stunning gardens and Hall of Mirrors",
        type: "Palace",
        visitDuration: "Full day",
        bestTime: "Weekday mornings"
      },
      {
        id: 4,
        name: "Arc de Triomphe",
        image: "/attractions/arc-de-triomphe.jpg",
        description: "Iconic monument honoring those who fought for France",
        type: "Monument",
        visitDuration: "1 hour",
        bestTime: "Late afternoon"
      },
      {
        id: 5,
        name: "Seine River Cruise",
        image: "/attractions/seine-cruise.jpg",
        description: "Scenic boat tour through the heart of Paris",
        type: "Experience",
        visitDuration: "1 hour",
        bestTime: "Sunset"
      },
      {
        id: 6,
        name: "Seine River Cruise",
        image: "/attractions/seine-cruise.jpg",
        description: "Scenic boat tour through the heart of Paris",
        type: "Experience",
        visitDuration: "1 hour",
        bestTime: "Sunset"
      },
      {
        id: 7,
        name: "Seine River Cruise",
        image: "/attractions/seine-cruise.jpg",
        description: "Scenic boat tour through the heart of Paris",
        type: "Experience",
        visitDuration: "1 hour",
        bestTime: "Sunset"
      },

    ],
    subPlaces: [
      {
        id: "paris-eiffel",
        name: "Eiffel Tower Tour",
        image: "effil.jpg",
        title: "Experience the iconic symbol of Paris",
        path: "/paris/eiffel-tower",
        type: "Independent Tours",
        categories: ["landmark", "romantic", "city"]
      },
      {
        id: "paris-louvre",
        name: "Louvre Museum",
        image: "Louvre.jpg",
        title: "Discover world's largest art museum",
        path: "/paris/louvre",
        type: "Independent Tours",
        categories: ["culture", "art", "museum"]
      },
      {
        id: "paris-versailles",
        name: "Versailles Palace",
        image: "Versailles.jpg",
        title: "Visit the grand Palace of Versailles",
        path: "/paris/versailles",
        type: "Independent Tours",
        categories: ["historical", "culture", "garden"]
      }
    ]
  }
,  
{
  "id": "albania-main",
  "name": "Albania",
  "image": "albania.jpg",
  "description": "6 Day's 5 Night Balkan Discovery",
  "title": "Discover the Hidden Gem of the Balkans",
  "experience": "Albania, a country of stunning contrasts, offers an authentic journey through pristine beaches, ancient ruins, and vibrant culture. Our carefully curated 6-day, 5-night Balkan Discovery package invites you to explore this undiscovered treasure of Europe. Starting at just ₹1100, this tour combines urban exploration, coastal beauty, and historical wonders.",
  "reasons": [
    {
      "title": "Pristine Beaches",
      "description": "The Albanian Riviera boasts some of the most untouched beaches in Europe. Crystal-clear waters meet dramatic cliffs, creating a paradise for beach lovers and photographers alike. From the popular shores of Ksamil to the hidden coves of Dhërmi, each beach offers its own unique charm and character."
    },
    {
      "title": "Rich Historical Heritage",
      "description": "Albania's history spans over two millennia, with influences from Greek, Roman, Ottoman, and Communist eras. The UNESCO World Heritage site of Butrint showcases ancient Greek and Roman ruins, while the Ottoman-era houses of Gjirokastër tell tales of medieval times. Each stone and structure narrates a unique story of Albania's diverse heritage."
    },
    {
      "title": "Traditional Culture",
      "description": "Experience the warmth of Albanian hospitality and their unique cultural traditions. From the traditional iso-polyphonic music to authentic Albanian cuisine, every moment offers insight into the local way of life. Visit traditional markets, taste regional specialties, and witness age-old customs still practiced today."
    },
    {
      "title": "Natural Wonders",
      "description": "Albania's diverse landscape ranges from the Albanian Alps in the north to coastal lagoons in the south. The Blue Eye spring, a natural phenomenon of stunning beauty, and the Accursed Mountains offer unique opportunities for nature lovers and adventure seekers."
    },
    {
      "title": "Modern Urban Life",
      "description": "Tirana, the vibrant capital, represents modern Albania with its colorful buildings, trendy cafes, and museums. The city's transformation from its communist past to a lively metropolitan hub is visible in its architecture, art scene, and nightlife."
    }
  ],
  "path": "/albania",
  "type": "Independent Tours",
  "categories": ["beach", "historical", "culture", "nature"],
  "highlights": [
    "Comprehensive Balkan exploration",
    "Mix of coastal and mountain experiences",
    "UNESCO World Heritage sites",
    "Traditional cultural encounters"
  ],
  "topAttractions": [
    {
      "id": 1,
      "name": "Butrint National Park",
      "image": "/attractions/butrint.jpg",
      "description": "Ancient Greek and Roman ruins in a stunning natural setting",
      "type": "Historical",
      "visitDuration": "4-5 hours",
      "bestTime": "Early morning"
    },
    {
      "id": 2,
      "name": "Blue Eye Spring",
      "image": "/attractions/blue-eye.jpg",
      "description": "Natural spring with stunning blue waters",
      "type": "Natural",
      "visitDuration": "2-3 hours",
      "bestTime": "Midday for best light"
    },
    {
      "id": 3,
      "name": "Berat Old Town",
      "image": "/attractions/berat.jpg",
      "description": "UNESCO-listed 'City of a Thousand Windows'",
      "type": "Cultural",
      "visitDuration": "Full day",
      "bestTime": "Morning to afternoon"
    },
    {
      "id": 4,
      "name": "Ksamil Beaches",
      "image": "/attractions/ksamil.jpg",
      "description": "Crystal clear waters and small islands",
      "type": "Beach",
      "visitDuration": "Half day",
      "bestTime": "Early morning or late afternoon"
    },
    {
      "id": 5,
      "name": "Skanderbeg Square",
      "image": "/attractions/skanderbeg.jpg",
      "description": "Main plaza of Tirana with national museum",
      "type": "Urban",
      "visitDuration": "2-3 hours",
      "bestTime": "Evening for local atmosphere"
    },
    {
      "id": 5,
      "name": "Skanderbeg Square",
      "image": "/attractions/skanderbeg.jpg",
      "description": "Main plaza of Tirana with national museum",
      "type": "Urban",
      "visitDuration": "2-3 hours",
      "bestTime": "Evening for local atmosphere"
    },
  ]
},
{
  "id": "armenia-main",
  "name": "Armenia",
  "image": "armenia.jpg",
  "description": "7 Day's 6 Night Mountain Exploration",
  "title": "Journey Through the Ancient Caucasus",
  "experience": "Armenia, the first Christian nation in the world, offers a unique blend of spiritual heritage, mountainous landscapes, and rich cultural traditions. Our 7-day, 6-night Mountain Exploration package, priced at ₹1300, takes you through ancient monasteries, volcanic landscapes, and vibrant urban cultures.",
  "reasons": [
    {
      "title": "Religious Heritage",
      "description": "As the first country to adopt Christianity as its state religion, Armenia is home to some of the world's oldest churches and monasteries. The ancient Echmiadzin Cathedral and the cliff-hanging Geghard Monastery showcase remarkable medieval Armenian architecture and spiritual significance."
    },
    {
      "title": "Mountain Landscapes",
      "description": "The dramatic landscapes of Armenia feature the biblical Mount Ararat as a backdrop, along with volcanic highlands, deep gorges, and alpine meadows. The diverse terrain offers opportunities for hiking, skiing, and mountain exploration throughout the year."
    },
    {
      "title": "Cultural Heritage",
      "description": "Armenian culture is rich with ancient traditions, from its unique alphabet to distinctive music and dance. The country's location at the crossroads of Europe and Asia has created a fascinating blend of Eastern and Western influences in its art, architecture, and customs."
    },
    {
      "title": "Culinary Traditions",
      "description": "Armenian cuisine reflects its geography and history, with influences from Mediterranean and Eastern cuisine. Famous for its lavash bread, hearty stews, and sweet desserts, the food scene offers unique flavors and traditional cooking methods passed down through generations."
    },
    {
      "title": "Modern Revival",
      "description": "Yerevan, one of the world's oldest continuously inhabited cities, showcases Armenia's modern transformation. Pink tuff stone buildings, contemporary art galleries, and bustling cafes create a unique urban atmosphere while preserving historical charm."
    }
  ],
  "topAttractions": [
    {
      "id": 1,
      "name": "Geghard Monastery",
      "image": "/attractions/geghard.jpg",
      "description": "UNESCO-listed medieval monastery partially carved into a mountain",
      "type": "Religious",
      "visitDuration": "3-4 hours",
      "bestTime": "Morning for best light"
    },
    {
      "id": 2,
      "name": "Lake Sevan",
      "image": "/attractions/sevan.jpg",
      "description": "High-altitude freshwater lake with medieval churches",
      "type": "Natural",
      "visitDuration": "Full day",
      "bestTime": "Summer months"
    }
  ]
},
  {
    name: "Armenia",
    image: "armenia/main.jpg",
    description: "7 Day's 6 Night Mountain Exploration",
    price: "₹1300",
    path: "/armenia",
    type: "Independent Tours",
    categories: ["historical", "culture", "spiritual", "mountain"],
    subPlaces: [
      {
        name: "Yerevan Cultural Experience",
        image: "armenia/yerevan.jpg",
        description: "3 Day's 2 Night Capital City Tour",
        price: "₹600",
        highlights: ["Cascade Complex", "Genocide Memorial", "Vernissage Art Market"],
        path: "/armenia/yerevan",
        type: "City Breaks"
      },
      {
        name: "Geghard and Garni Historical Tour",
        image: "armenia/geghard.jpg",
        description: "2 Day's 1 Night Ancient Sites Exploration",
        price: "₹500",
        highlights: ["Geghard Monastery", "Garni Hellenistic Temple", "Traditional Armenian Cuisine"],
        path: "/armenia/geghard",
        type: "Escorted Tours"
      },
      {
        name: "Lake Sevan Mountain Retreat",
        image: "armenia/sevan.jpg",
        description: "2 Day's 1 Night Nature Experience",
        price: "₹400",
        highlights: ["Sevanavank Monastery", "Lake Cruises", "Mountain Hiking"],
        path: "/armenia/sevan",
        type: "Self Drive Holidays"
      }
    ]
  },
  {
    name: "Austria",
    image: "austria/main.jpg",
    description: "6 Day's 5 Night Alpine Experience",
    price: "₹1800",
    path: "/austria",
    type: "Multi City Packages",
    categories: ["culture", "historical", "mountain", "music"],
    subPlaces: [
      {
        name: "Vienna Imperial Tour",
        image: "austria/vienna.jpg",
        description: "3 Day's 2 Night City Experience",
        price: "₹900",
        highlights: ["Schönbrunn Palace", "Vienna State Opera", "Art History Museum"],
        path: "/austria/vienna",
        type: "City Breaks"
      },
      {
        name: "Salzburg Mozart Experience",
        image: "austria/salzburg.jpg",
        description: "2 Day's 1 Night Musical Journey",
        price: "₹700",
        highlights: ["Mozart's Birthplace", "Hohensalzburg Fortress", "Sound of Music Tour"],
        path: "/austria/salzburg",
        type: "Escorted Tours"
      },
      {
        name: "Tyrol Alpine Adventure",
        image: "austria/tyrol.jpg",
        description: "2 Day's 1 Night Mountain Exploration",
        price: "₹600",
        highlights: ["Alpine Hiking", "Innsbruck Old Town", "Traditional Alpine Villages"],
        path: "/austria/tyrol",
        type: "Self Drive Holidays"
      }
    ]
  },
  {
    name: "Azerbaijan",
    image: "azerbaijan/main.jpg",
    description: "6 Day's 5 Night Silk Road Journey",
    price: "₹1400",
    path: "/azerbaijan",
    type: "Independent Tours",
    categories: ["historical", "culture", "modern", "nature"],
    subPlaces: [
      {
        name: "Baku Modern Metropolis",
        image: "azerbaijan/baku.jpg",
        description: "3 Day's 2 Night Urban Discovery",
        price: "₹700",
        highlights: ["Old City", "Flame Towers", "Heydar Aliyev Center"],
        path: "/azerbaijan/baku",
        type: "City Breaks"
      },
      {
        name: "Gobustan Rock Art Tour",
        image: "azerbaijan/gobustan.jpg",
        description: "2 Day's 1 Night Archaeological Exploration",
        price: "₹500",
        highlights: ["UNESCO Rock Art Site", "Mud Volcanos", "Ancient Petroglyphs"],
        path: "/azerbaijan/gobustan",
        type: "Escorted Tours"
      },
      {
        name: "Sheki Silk Road Heritage",
        image: "azerbaijan/sheki.jpg",
        description: "2 Day's 1 Night Cultural Journey",
        price: "₹600",
        highlights: ["Sheki Khan's Palace", "Silk Road Crafts", "Mountain Scenery"],
        path: "/azerbaijan/sheki",
        type: "Self Drive Holidays"
      }
    ]
  },
  {
    name: "Finland",
    image: "finland/main.jpg",
    description: "7 Day's 6 Night Nordic Adventure",
    price: "₹2000",
    path: "/finland",
    type: "Independent Tours",
    categories: ["winter", "nature", "northern-lights", "adventure"],
    subPlaces: [
      {
        name: "Helsinki Design City",
        image: "finland/helsinki.jpg",
        description: "2 Day's 1 Night Urban Experience",
        price: "₹600",
        highlights: ["Design District", "Helsinki Cathedral", "Suomenlinna Fortress"],
        path: "/finland/helsinki",
        type: "City Breaks"
      },
      {
        name: "Lapland Aurora Experience",
        image: "finland/lapland.jpg",
        description: "3 Day's 2 Night Northern Lights Tour",
        price: "₹1000",
        highlights: ["Aurora Viewing", "Husky Safari", "Ice Hotel"],
        path: "/finland/lapland",
        type: "Escorted Tours"
      },
      {
        name: "Santa's Village Winter Retreat",
        image: "finland/santa.jpg",
        description: "2 Day's 1 Night Festive Journey",
        price: "₹700",
        highlights: ["Meet Santa", "Arctic Circle", "Christmas Activities"],
        path: "/finland/santa",
        type: "Self Drive Holidays"
      }
    ]
  },
  {
    name: "France",
    image: "france/main.jpg",
    description: "10 Day's 9 Night Cultural Odyssey",
    price: "₹3000",
    path: "/france",
    type: "Multi City Packages",
    categories: ["culture", "food-wine", "historical", "art"],
    subPlaces: [
      {
        name: "Paris Romantic Getaway",
        image: "france/paris.jpg",
        description: "4 Day's 3 Night Capital City Experience",
        price: "₹1200",
        highlights: ["Eiffel Tower", "Louvre Museum", "Seine River Cruise"],
        path: "/france/paris",
        type: "City Breaks"
      },
      {
        name: "Provence Lavender Experience",
        image: "france/provence.jpg",
        description: "3 Day's 2 Night Countryside Tour",
        price: "₹800",
        highlights: ["Lavender Fields", "Wine Tasting", "Medieval Villages"],
        path: "/france/provence",
        type: "Escorted Tours"
      },
      {
        name: "French Riviera Exploration",
        image: "france/riviera.jpg",
        description: "3 Day's 2 Night Coastal Journey",
        price: "₹1000",
        highlights: ["Nice Promenade", "Monaco Day Trip", "Cannes"],
        path: "/france/riviera",
        type: "Self Drive Holidays"
      }
    ]
  },
  {
    name: "Germany",
    image: "germany/main.jpg",
    description: "9 Day's 8 Night Comprehensive Tour",
    price: "₹2500",
    path: "/germany",
    type: "Multi City Packages",
    categories: ["culture", "historical", "food-wine", "adventure"],
    subPlaces: [
      {
        name: "Berlin Historical Journey",
        image: "germany/berlin.jpg",
        description: "3 Day's 2 Night Capital City Exploration",
        price: "₹900",
        highlights: ["Brandenburg Gate", "Berlin Wall Memorial", "Museum Island"],
        path: "/germany/berlin",
        type: "City Breaks"
      },
      {
        name: "Bavarian Romantic Road",
        image: "germany/bavaria.jpg",
        description: "3 Day's 2 Night Cultural Experience",
        price: "₹1000",
        highlights: ["Neuschwanstein Castle", "Rothenburg ob der Tauber", "Munich Beer Gardens"],
        path: "/germany/bavaria",
        type: "Escorted Tours"
      },
      {
        name: "Black Forest Nature Retreat",
        image: "germany/blackforest.jpg",
        description: "3 Day's 2 Night Natural Exploration",
        price: "₹800",
        highlights: ["Hiking Trails", "Traditional Villages", "Cuckoo Clock Workshop"],
        path: "/germany/black-forest",
        type: "Self Drive Holidays"
      }
    ]
  },
  {
    name: "Great Britain",
    image: "great-britain/main.jpg",
    description: "12 Day's 11 Night Royal Journey",
    price: "₹3500",
    path: "/great-britain",
    type: "Multi City Packages",
    categories: ["historical", "culture", "royal", "nature"],
    subPlaces: [
      {
        name: "London Royal Experience",
        image: "great-britain/london.jpg",
        description: "4 Day's 3 Night Capital City Tour",
        price: "₹1200",
        highlights: ["Buckingham Palace", "Tower of London", "British Museum"],
        path: "/great-britain/london",
        type: "City Breaks"
      },
      {
        name: "Scottish Highlands Adventure",
        image: "great-britain/scotland.jpg",
        description: "4 Day's 3 Night Natural Expedition",
        price: "₹1100",
        highlights: ["Loch Ness", "Edinburgh Castle", "Isle of Skye"],
        path: "/great-britain/scotland",
        type: "Escorted Tours"
      },
      {
        name: "Cotswolds Rural Charm",
        image: "great-britain/cotswolds.jpg",
        description: "4 Day's 3 Night Countryside Journey",
        price: "₹1000",
        highlights: ["Stone Cottages", "Country Walks", "Traditional Pubs"],
        path: "/great-britain/cotswolds",
        type: "Self Drive Holidays"
      }
    ]
  },
  {
    name: "Greece",
    image: "greece/main.jpg",
    description: "9 Day's 8 Night Mythical Journey",
    price: "₹2200",
    path: "/greece",
    type: "Multi City Packages",
    categories: ["beach", "historical", "culture", "island"],
    subPlaces: [
      {
        name: "Athens Historical Tour",
        image: "greece/athens.jpg",
        description: "3 Day's 2 Night Ancient Capital Exploration",
        price: "₹900",
        highlights: ["Acropolis", "Parthenon", "Ancient Agora"],
        path: "/greece/athens",
        type: "City Breaks"
      },
      {
        name: "Santorini Island Experience",
        image: "greece/santorini.jpg",
        description: "3 Day's 2 Night Cycladic Paradise",
        price: "₹1000",
        highlights: ["Blue Domed Churches", "Sunset in Oia", "Volcanic Beaches"],
        path: "/greece/santorini",
        type: "Escorted Tours"
      },
      {
        name: "Mykonos Coastal Adventure",
        image: "greece/mykonos.jpg",
        description: "3 Day's 2 Night Island Exploration",
        price: "₹800",
        highlights: ["Windmills", "Little Venice", "Paradise Beach"],
        path: "/greece/mykonos",
        type: "Self Drive Holidays"
      }
    ]
  },
  {
    name: "Hungary",
    image: "hungary/main.jpg",
    description: "7 Day's 6 Night Danube Experience",
    price: "₹1600",
    path: "/hungary",
    type: "Independent Tours",
    categories: ["culture", "historical", "food-wine", "thermal"],
    subPlaces: [
      {
        name: "Budapest Urban Exploration",
        image: "hungary/budapest.jpg",
        description: "3 Day's 2 Night Capital City Tour",
        price: "₹800",
        highlights: ["Parliament Building", "Thermal Baths", "Ruin Bars"],
        path: "/hungary/budapest",
        type: "City Breaks"
      },
      {
        name: "Eger Wine Region Journey",
        image: "hungary/eger.jpg",
        description: "2 Day's 1 Night Culinary Experience",
        price: "₹600",
        highlights: ["Valley of the Beautiful Women", "Castle", "Wine Tasting"],
        path: "/hungary/eger",
        type: "Escorted Tours"
      },
      {
        name: "Hortobágy National Park Adventure",
        image: "hungary/hortobady.jpg",
        description: "2 Day's 1 Night Nature Expedition",
        price: "₹500",
        highlights: ["Traditional Horseback Riding", "Wildlife", "Puszta Experience"],
        path: "/hungary/hortobady",
        type: "Self Drive Holidays"
      }
    ]
  },
  {
    name: "Iceland",
    image: "iceland/main.jpg",
    description: "8 Day's 7 Night Land of Fire and Ice",
    price: "₹2500",
    path: "/iceland",
    type: "Independent Tours",
    categories: ["nature", "adventure", "northern-lights", "volcanic"],
    subPlaces: [
      {
        name: "Reykjavik Urban Experience",
        image: "iceland/reykjavik.jpg",
        description: "3 Day's 2 Night Capital City Exploration",
        price: "₹900",
        highlights: ["Hallgrímskirkja Church", "Geothermal Pools", "Modern Art Scene"],
        path: "/iceland/reykjavik",
        type: "City Breaks"
      },
      {
        name: "Golden Circle Natural Wonders",
        image: "iceland/goldencircle.jpg",
        description: "3 Day's 2 Night Geological Expedition",
        price: "₹1000",
        highlights: ["Þingvellir National Park", "Geysir Geothermal Area", "Gullfoss Waterfall"],
        path: "/iceland/golden-circle",
        type: "Escorted Tours"
      },
      {
        name: "South Coast Aurora Adventure",
        image: "iceland/southcoast.jpg",
        description: "2 Day's 1 Night Northern Lights Journey",
        price: "₹800",
        highlights: ["Black Sand Beaches", "Glacier Walks", "Aurora Viewing"],
        path: "/iceland/south-coast",
        type: "Self Drive Holidays"
      }
    ]
  },
  {
    name: "Ireland",
    image: "ireland/main.jpg",
    description: "8 Day's 7 Night Emerald Isle Discovery",
    price: "₹2200",
    path: "/ireland",
    type: "Multi City Packages",
    categories: ["nature", "historical", "culture", "scenic"],
    subPlaces: [
      {
        name: "Dublin Cultural Experience",
        image: "ireland/dublin.jpg",
        description: "3 Day's 2 Night Capital City Tour",
        price: "₹900",
        highlights: ["Trinity College", "Guinness Storehouse", "Temple Bar District"],
        path: "/ireland/dublin",
        type: "City Breaks"
      },
      {
        name: "Wild Atlantic Way",
        image: "ireland/atlanticway.jpg",
        description: "3 Day's 2 Night Coastal Expedition",
        price: "₹1000",
        highlights: ["Cliffs of Moher", "Connemara National Park", "Traditional Music"],
        path: "/ireland/atlantic-way",
        type: "Escorted Tours"
      },
      {
        name: "Kerry County Exploration",
        image: "ireland/kerry.jpg",
        description: "2 Day's 1 Night Scenic Journey",
        price: "₹800",
        highlights: ["Ring of Kerry", "Killarney National Park", "Castle Visits"],
        path: "/ireland/kerry",
        type: "Self Drive Holidays"
      }
    ]
  },
  {
    name: "Italy",
    image: "italy/main.jpg",
    description: "10 Day's 9 Night Renaissance Journey",
    price: "₹3000",
    path: "/italy",
    type: "Multi City Packages",
    categories: ["culture", "historical", "food-wine", "art"],
    subPlaces: [
      {
        name: "Rome Historical Exploration",
        image: "italy/rome.jpg",
        description: "4 Day's 3 Night Eternal City Experience",
        price: "₹1200",
        highlights: ["Colosseum", "Vatican City", "Roman Forum"],
        path: "/italy/rome",
        type: "City Breaks"
      },
      {
        name: "Tuscany Culinary Journey",
        image: "italy/tuscany.jpg",
        description: "3 Day's 2 Night Wine and Art Tour",
        price: "₹1100",
        highlights: ["Florence Art Tour", "Chianti Wine Region", "Medieval Towns"],
        path: "/italy/tuscany",
        type: "Escorted Tours"
      },
      {
        name: "Venice Romantic Getaway",
        image: "italy/venice.jpg",
        description: "3 Day's 2 Night Canal City Experience",
        price: "₹1000",
        highlights: ["Gondola Ride", "St. Mark's Basilica", "Murano Glass Factory"],
        path: "/italy/venice",
        type: "Self Drive Holidays"
      }
    ]
  },
  {
    name: "Malta",
    image: "malta/main.jpg",
    description: "7 Day's 6 Night Mediterranean Island Discovery",
    price: "₹1700",
    path: "/malta",
    type: "Independent Tours",
    categories: ["historical", "beach", "culture", "scenic"],
    subPlaces: [
      {
        name: "Valletta Historical Tour",
        image: "malta/valletta.jpg",
        description: "3 Day's 2 Night Capital City Exploration",
        price: "₹800",
        highlights: ["St. John's Co-Cathedral", "Grand Harbour", "Historic Fortifications"],
        path: "/malta/valletta",
        type: "City Breaks"
      },
      {
        name: "Gozo Island Retreat",
        image: "malta/gozo.jpg",
        description: "2 Day's 1 Night Coastal Experience",
        price: "₹600",
        highlights: ["Azure Window Site", "Megalithic Temples", "Scenic Coastline"],
        path: "/malta/gozo",
        type: "Escorted Tours"
      },
      {
        name: "Blue Lagoon Adventure",
        image: "malta/blue-lagoon.jpg",
        description: "2 Day's 1 Night Marine Exploration",
        price: "₹500",
        highlights: ["Snorkeling", "Beach Relaxation", "Boat Tours"],
        path: "/malta/blue-lagoon",
        type: "Self Drive Holidays"
      }
    ]
  },
  {
    name: "Monaco",
    image: "monaco/main.jpg",
    description: "5 Day's 4 Night Luxury Riviera Experience",
    price: "₹2500",
    path: "/monaco",
    type: "Chauffeur Driven Tours",
    categories: ["luxury", "city", "food-wine", "romantic"],
    subPlaces: [
      {
        name: "Monte Carlo Casino Tour",
        image: "monaco/monte-carlo.jpg",
        description: "2 Day's 1 Night Glamour Experience",
        price: "₹1200",
        highlights: ["Casino Tour", "Luxury Shopping", "Exotic Car Showcase"],
        path: "/monaco/monte-carlo",
        type: "City Breaks"
      },
      {
        name: "Monaco Grand Prix Experience",
        image: "monaco/grandprix.jpg",
        description: "2 Day's 1 Night Racing Heritage Tour",
        price: "₹1000",
        highlights: ["Racing Circuit Tour", "Automobile Museum", "Historic Race Locations"],
        path: "/monaco/grandprix",
        type: "Escorted Tours"
      },
      {
        name: "Prince's Palace Royal Journey",
        image: "monaco/palace.jpg",
        description: "1 Day Royal Historical Tour",
        price: "₹500",
        highlights: ["Palace Tour", "Changing of the Guard", "Oceanographic Museum"],
        path: "/monaco/palace",
        type: "Self Drive Holidays"
      }
    ]
  },
];

export const tourPackages = [
  "Group Tours",
   "FIT Tours",
   "MICE Tours",
   "Honeymoon Tours",
   "Luxury Tours",
   "Senior Citizen Tours",
   "City Breaks",
   "Multi City Packages",
   "Escorted Tours",
   "Rail Tours",
   "Self Drive Holidays",
   "Chauffeur Driven Tours"
 ];
 
 export const packageDescriptions = {
   "Group Tours": `Group Tours are perfect for travelers who enjoy exploring destinations with like-minded individuals. These tours offer a structured, pre-arranged itinerary, where a group of travelers shares experiences, making it ideal for those who love camaraderie and socializing. Whether you're visiting cultural landmarks, scenic areas, or historical sites, Group Tours offer the opportunity to bond with fellow travelers while enjoying guided sightseeing. The convenience of all logistics being handled for you, such as transportation, accommodations, and meals, ensures a stress-free and memorable vacation experience.`,
 
   "FIT Tours": `FIT (Foreign Independent Traveler) Tours are designed for individuals or small groups who prefer to travel independently but still want the benefits of having a carefully planned itinerary. These tours offer the flexibility of an independent journey while including essential services like accommodation, transportation, and sightseeing, tailored to your interests. FIT Tours are ideal for those who prefer a more personalized experience but without the need to organize every detail themselves.`,
 
   "MICE Tours": `MICE (Meetings, Incentives, Conferences, and Exhibitions) Tours are ideal for businesses and organizations looking to combine travel with corporate events. These tours are designed to provide unique experiences for business travelers, offering not only the best locations for conferences and meetings but also leisure activities that allow for relaxation and team-building. MICE Tours provide a seamless blend of professional and personal travel, making them perfect for corporate incentives, events, and group retreats.`,
 
   "Honeymoon Tours": `Honeymoon Tours offer newlyweds the perfect romantic getaway to start their married life. These tours are designed with relaxation, intimacy, and adventure in mind, offering destinations known for their romantic settings, such as pristine beaches, scenic mountain resorts, and historic cities. Whether you prefer a peaceful beach retreat, an adventurous hiking trip, or exploring cultural wonders, Honeymoon Tours are tailored to create lifelong memories for couples.`,
 
   "Luxury Tours": `Luxury Tours provide a high-end travel experience, offering top-tier accommodations, private transportation, exclusive experiences, and impeccable service. These tours are ideal for those who want to experience the finest that a destination has to offer, from five-star hotels and gourmet dining to private tours and first-class flights. With a focus on comfort, privacy, and personalized service, Luxury Tours ensure a luxurious and stress-free travel experience.`,
 
   "Senior Citizen Tours": `Senior Citizen Tours are specially designed for older travelers who want to enjoy a relaxed, comfortable, and enriching travel experience. These tours consider the specific needs and preferences of senior travelers, including easy-paced itineraries, accessible accommodations, and personalized service. Whether you're looking for cultural tours, nature experiences, or leisurely beach holidays, Senior Citizen Tours offer a perfect combination of relaxation and exploration tailored to older travelers.`,
 
   "City Breaks": `City Breaks are short, immersive vacations designed to help you experience the essence of a city in a limited time. These tours focus on exploring the city's highlights, such as historical landmarks, cultural attractions, local cuisine, and vibrant neighborhoods. City Breaks are perfect for those who have a busy schedule but still want to enjoy a quick getaway, offering the best way to discover a city's charm in a compact and exciting trip.`,
 
   "Multi City Packages": `Multi City Packages are perfect for travelers who want to explore multiple destinations in one seamless journey. These packages provide a rich variety of experiences, allowing you to visit different cities or countries while avoiding the hassle of booking separate trips. Whether you're embarking on a grand tour of a single region or exploring distant countries, Multi City Packages offer a comprehensive travel experience with diverse activities, attractions, and cultures.`,
 
   "Escorted Tours": `Escorted Tours offer a guided experience where a professional guide accompanies you throughout your journey. These tours are perfect for those who prefer a structured, organized travel experience with the convenience of having all logistics managed for you. From transportation and accommodations to guided sightseeing, Escorted Tours ensure that you get the most out of your trip with expert knowledge and seamless travel. Whether you're exploring a city, region, or country, Escorted Tours provide in-depth exploration without the stress of planning.`,
 
   "Rail Tours": `Rail Tours offer a unique and scenic way to travel, with the comfort of train travel combined with the opportunity to see breathtaking landscapes along the way. Whether it's through remote countryside or along iconic scenic routes, Rail Tours provide a relaxed and immersive experience. Traveling by train allows you to sit back, unwind, and enjoy the view, while passing through regions that are hard to access by other forms of transportation.`,
 
   "Self Drive Holidays": `Self Drive Holidays provide complete freedom and flexibility, allowing you to explore destinations at your own pace. With a rental car at your disposal, you have the autonomy to create your own itinerary, choose the routes, and stop wherever you like. Whether you're cruising along coastal roads, exploring rural towns, or venturing into hidden gems, Self Drive Holidays give you the independence to make your travel experience truly yours.`,
 
   "Chauffeur Driven Tours": `Chauffeur Driven Tours offer a luxurious and stress-free way to explore a destination. With a professional chauffeur at your service, you can relax and enjoy the sights without worrying about navigating unfamiliar roads or dealing with parking. These tours offer comfort, privacy, and a personalized experience, making them ideal for those seeking a high-end travel experience. Whether it's a city tour, a multi-day journey, or an exploration of a specific region, Chauffeur Driven Tours ensure that your travel is both luxurious and convenient.`
 };





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