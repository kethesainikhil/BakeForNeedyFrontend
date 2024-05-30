import React from 'react';
import { motion } from 'framer-motion';
import ngo from "../public/ngo.png"
const AboutPage = () => {
  return (
    <div className="bg-black mt-20 text-white min-h-screen">
      <div className="container mx-auto py-12 px-4">
        <motion.h1 
          className="text-4xl lg:text-5xl font-bold mb-8 text-purple-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About BakeForNeedy
        </motion.h1>
        <motion.p 
          className="text-lg lg:text-xl mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Welcome to BakeForNeedy, where we unite to bake hope and share joy! 🌟 As #CommunityBakers, we believe in the power of collective action to make a positive impact in the lives of those in need.
        </motion.p>
        <motion.p 
          className="text-lg lg:text-xl mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Our mission is simple: to match donors with NGOs and social welfare centers in their communities. When a donor wishes to contribute, we connect them with the nearest organization in need. Whether it's food, clothes, toys, books, or other items, every donation counts.
        </motion.p>
        <motion.p 
          className="text-lg lg:text-xl mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Here's how it works: donors like you express your generosity, and we handle the logistics. Once you pledge a donation, we find the closest NGO or welfare center that can benefit. They're then informed and will coordinate with you for collection. Finally, they distribute your donation to those who need it most.
        </motion.p>
        <motion.p 
          className="text-lg lg:text-xl mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          Together, we can make a difference. Join us in spreading kindness, one bake at a time.
        </motion.p>
        

        {/* Call to Action */}
        <div className="text-center mt-12">
          <motion.a 
            href="/donarpage"
            className="hover:bg-gradient-to-tr hover:from-pink-500 hover:to-purple-500   bg-gradient-to-r from-purple-500 to-pink-500  rounded-md text-white py-3 px-6 rounded-lg font-bold inline-block"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.5 }}
          >
            Donate Now
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
