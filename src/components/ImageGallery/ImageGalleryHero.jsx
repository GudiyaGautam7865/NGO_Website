import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: "https://images.unsplash.com/photo-1527821468487-b724210d296a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBoaWxpcHBpbmVzfGVufDB8fDB8fHww", category: "january" },
  { src: "https://www.ooaworld.com/wp-content/uploads/Malateboys.jpg", category: "january" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9_xtcG8XdfzoiM6b69hk2pg0u4CDWw5hCQA&s", category: "january" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPiHEO2sCgu39Q9WuqT0G3zjo0Rklw5wM9oyswiBWm-aEcTpCZ9t_R_axvI1DqrhhiyAo&usqp=CAU", category: "january" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsvlXgy--nEvfPD5tyPB_lNYiL0GuyhyBnEA&s", category: "february" },
  
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9_xtcG8XdfzoiM6b69hk2pg0u4CDWw5hCQA&s", category: "february" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ3BCs5WK8F5UEJ3KTEDNFDpcX-FSdkjIqYQ&s", category: "february" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ3BCs5WK8F5UEJ3KTEDNFDpcX-FSdkjIqYQ&s", category: "february" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ3BCs5WK8F5UEJ3KTEDNFDpcX-FSdkjIqYQ&s", category: "february" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfMA0SfMUQHfrkM6m0Bbqqw4CWhV4RxCtwNA&s", category: "february" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYbFnvAGs2TrTlGy6AnBshgyZkY2oJHkIvbw&s", category: "february" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRxxfhByTZvWHo6_bHdq_K4mLcQkYUr4V9mg&s", category: "march" },
  { src: "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2019/12/23/Actress-Mouni-Roy-celebrates-Christmas-with-NGO-kids-at-andheri-HD-gallery-14.jpg?quality=80&zoom=1&ssl=1", category: "february" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ELBxopAD4jWa_Dl0Tw-IWgicsdbxdfRNjQ&s", category: "march" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ725VAepCK_W6-bN5-F4r1CE-tFYugpfTcA&s", category: "march" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ukGHPHHZktMuE-FZ-XjaBoo-bbMxECk44Q&s", category: "march" },
];

const categories = ["all", "january", "february", "march"];

export default function ImageGalleryHero() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Photo Gallery</h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
      selectedCategory === category ? "bg-blue-600" : "bg-gray-700"
    }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>
        

        {/* Image Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
        >
          {filteredImages.map((img, index) => (
            <motion.div 
              key={index} 
              layout 
              className="overflow-hidden rounded-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                className="w-full h-48 object-cover rounded-lg shadow-lg"
                alt="Gallery Image"
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          layout 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
        >
          {filteredImages.map((img, index) => (
            <motion.div 
              key={index} 
              layout 
              className="overflow-hidden rounded-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                className="w-full h-48 object-cover rounded-lg shadow-lg"
                alt="Gallery Image"
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          layout 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
        >
          {filteredImages.map((img, index) => (
            <motion.div 
              key={index} 
              layout 
              className="overflow-hidden rounded-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                className="w-full h-48 object-cover rounded-lg shadow-lg"
                alt="Gallery Image"
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          layout 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
        >
          {filteredImages.map((img, index) => (
            <motion.div 
              key={index} 
              layout 
              className="overflow-hidden rounded-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                className="w-full h-48 object-cover rounded-lg shadow-lg"
                alt="Gallery Image"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      
    </section>
  );
}
