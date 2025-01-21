import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Award, 
  Users, 
  Clock, 
  Shield, 
  Heart,
  Compass,
  Mountain,
  Gem 
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const features = [
  {
    icon: Globe,
    title: "European Expertise",
    description: " we offer unparalleled knowledge of European destinations and cultures.",
  },
  {
    icon: Clock,
    title: "24 Years of Excellence",
    description: "Over two decades of experience in crafting exceptional travel experiences.",
  },
  {
    icon: Users,
    title: "Family-Owned Business",
    description: "A family enterprise bringing personal touch and dedication to every journey.",
  },
  {
    icon: Shield,
    title: "Licensed & Accredited",
    description: "Fully licensed DMC operating under European tourism regulations.",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description: "Tailored experiences meeting individual preferences and requirements.",
  },
  {
    icon: Compass,
    title: "Local Connections",
    description: "Strong network of local partners across Europe ensuring authentic experiences.",
  },
  {
    icon: Mountain,
    title: "Diverse Offerings",
    description: "From luxury tours to adventure trips, covering all travel styles.",
  },
  {
    icon: Gem,
    title: "Premium Experiences",
    description: "Access to exclusive venues and unique cultural experiences.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Commitment to maintaining highest standards of service excellence.",
  }
];

const OurUniqueness = () => {
  return (
    <div className="min-h-screen bg-blue-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20 mt-10"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-yellow-400"></div>
            <h2 className="text-yellow-400 tracking-[0.3em] text-sm">WHAT SETS US APART</h2>
            <div className="h-px w-12 bg-yellow-400"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-wide mb-8">
            Our Uniqueness
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Discover what makes Royal Europa DMC your ideal partner for 
            creating unforgettable European travel experiences.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 
                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <div className="border border-yellow-400/20 hover:border-yellow-400/40 
                  transition-colors duration-300 rounded-lg p-8 h-full">
                  <div className="flex flex-col items-center text-center">
                    <feature.icon className="w-12 h-12 text-yellow-400 mb-6" />
                    <h3 className="text-white text-xl font-light tracking-wider mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl text-white font-light tracking-wider mb-6">
            Experience the Royal Europa DMC Difference
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Let us transform your European travel dreams into extraordinary realities with our 
            unique approach to destination management.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-8 py-3 border-2 border-yellow-400 
              text-yellow-400 hover:bg-yellow-400 hover:text-blue-950 
              transition-colors duration-300 tracking-wider"
          >
            CONTACT US
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default OurUniqueness;