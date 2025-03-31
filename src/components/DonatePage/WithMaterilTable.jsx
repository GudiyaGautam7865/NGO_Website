// import React from "react";
// import { motion } from "framer-motion";

// const DonatePageHero = () => {
//   return (
//     <div className="container mx-auto p-6 text-gray-900">
//       <motion.h1
//         className="text-4xl font-bold text-center mb-6"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Make a Contribution
//       </motion.h1>
      
//       <motion.p
//         className="text-lg text-center mb-8"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3 }}
//       >
//         Thank you for supporting IRE and its mission to provide investigative reporting training and resources for journalists.
//       </motion.p>
      
//       {/* Donation Sections */}
//       <div className="grid md:grid-cols-2 gap-8">
//         {/* General Donation Card */}
//         <motion.div
//           className="p-6 border rounded-lg shadow-lg hover:shadow-2xl transition"
//           whileHover={{ scale: 1.05 }}
//         >
//           <h3 className="text-2xl font-semibold mb-4">Make a General Donation</h3>
//           <p className="text-gray-700 mb-4">Support our endowment and help IRE allocate resources where they are needed most.</p>
//           <a href="/membersonly/donations" className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Donate Now</a>
//         </motion.div>

//         {/* Student Membership Donation */}
//         <motion.div
//           className="p-6 border rounded-lg shadow-lg hover:shadow-2xl transition"
//           whileHover={{ scale: 1.05 }}
//         >
//           <h3 className="text-2xl font-semibold mb-4">Donate a Student Membership</h3>
//           <p className="text-gray-700 mb-4">Sponsor a $25 student membership and support diverse representation in journalism.</p>
//           <a href="https://irenicar.wufoo.com/forms/2016-student-membership-sponsor-form/" className="inline-block px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Sponsor a Student</a>
//         </motion.div>
//       </div>

//       {/* Matching Gifts Section */}
//       <motion.div className="mt-12 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
//         <h3 className="text-2xl font-semibold">Matching Gifts</h3>
//         <p className="text-gray-700">Double the impact of your donation by checking if your employer matches contributions.</p>
//       </motion.div>
//     </div>
//   );
// };

// export default DonatePageHero;


// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const DonatePageHero = () => {
//   const [selectedAmount, setSelectedAmount] = useState(20);
//   const [customAmount, setCustomAmount] = useState("");
//   const [donationType, setDonationType] = useState("");

//   const handleAmountClick = (amount) => {
//     setSelectedAmount(amount);
//     setCustomAmount("");
//   };

//   const handleCustomAmountChange = (event) => {
//     const value = event.target.value.replace(/^0+/, "");
//     if (/^[0-9]*$/.test(value)) {
//       setCustomAmount(value);
//       setSelectedAmount(null);
//     }
//   };

//   return (
//     <div className="bg-gray-100 text-bank-700 w-200 p-10 rounded-lg shadow-lg ml-100 text-center">
//       <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//         <h2 className="text-4xl font-bold mb-2">💰 Donate</h2>
//         <p className="text-lg">Your contribution is vital to our initiative.</p>
//       </motion.div>

//       <form action="https://earphone.foxycart.com/cart" method="post" acceptCharset="utf-8" className="mt-6">
//         <input type="hidden" name="name" value="Donation" />
//         <input type="hidden" name="price" value={customAmount || selectedAmount} />

//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="bg-blue-200 p-6 rounded-lg">
//           <h3 className="text-xl font-semibold mb-3">Donation Amount*</h3>
//           <div className="flex justify-center gap-4 mb-4">
//             {[20, 50, 100, 500].map((amount) => (
//               <motion.div key={amount} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`px-6 py-3 border-2 rounded-lg cursor-pointer ${selectedAmount === amount ? "bg-yellow-500 text-black" : "border-white text-white"}`} onClick={() => handleAmountClick(amount)}>
//                 ${amount}
//               </motion.div>
//             ))}
//           </div>
//           <input type="number" className="p-2 w-full rounded-md text-black" placeholder="Enter Other Amount" value={customAmount} onChange={handleCustomAmountChange} />
//         </motion.div>

//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="bg-gray-500 p-6 rounded-lg mt-4">
//           <h3 className="text-xl font-semibold mb-3">Donation Type*</h3>
//           <div className="flex justify-center gap-4">
//             <motion.label whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`px-6 py-3 border-2 rounded-lg cursor-pointer ${donationType === "" ? "bg-yellow-500 text-black" : "border-white text-white"}`} onClick={() => setDonationType("")}>One-Time</motion.label>
//             <motion.label whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`px-6 py-3 border-2 rounded-lg cursor-pointer ${donationType === "1m" ? "bg-yellow-500 text-black" : "border-white text-white"}`} onClick={() => setDonationType("1m")}>Monthly</motion.label>
//           </div>
//         </motion.div>

//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-6">
//           <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type="submit" className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold">Donate ${customAmount || selectedAmount}</motion.button>
//         </motion.div>

//         <p className="text-sm text-gray-400 mt-2">*Contributions are tax-deductible.</p>
//       </form>
//     </div>
//   );
// };

// export default DonatePageHero;

// import React, { useRef, useState, useEffect } from "react";
// import { Play, Pause, Volume2 } from "lucide-react"; // Lucide icons

// const BackgroundMedia = () => {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [volume, setVolume] = useState(1);

//   // Try autoplay when component mounts
//   useEffect(() => {
//     const playAudio = async () => {
//       if (audioRef.current) {
//         try {
//           await audioRef.current.play();
//           setIsPlaying(true);
//         } catch (error) {
//           console.log("Autoplay blocked. User must interact.");
//         }
//       }
//     };
//     playAudio();
//   }, []);

//   // Toggle Play/Pause
//   const togglePlayPause = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   // Adjust Volume
//   const handleVolumeChange = (e) => {
//     const newVolume = e.target.value;
//     setVolume(newVolume);
//     audioRef.current.volume = newVolume;
//   };

//   return (
//     <div className="flex flex-col items-end w-89 ml-290 mb-5 justify-end   text-white">
//         <audio ref={audioRef} src="https://sample-videos.com/audio/mp3/crowd-cheering.mp3" loop></audio>

//       <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
//         <h2 className="text-2xl font-semibold mb-4">Seven Continents Song</h2>

//         {/* Play/Pause Button */}
//         <button
//           onClick={togglePlayPause}
//           className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
//         >
//           {isPlaying ? <Pause size={24} /> : <Play size={24} />}
//           <span className="ml-2">{isPlaying ? "Pause" : "Play"}</span>
//         </button>

//         {/* Volume Control */}
//         <div className="flex items-center mt-4">
//           <Volume2 className="mr-2" />
//           <input
//             type="range"
//             min="0"
//             max="1"
//             step="0.1"
//             value={volume}
//             onChange={handleVolumeChange}
//             className="w-32"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BackgroundMedia;


// import React, { useState } from "react";

// const WithMaterilTable = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     amount: "",
//     name: "",
//     email: "",
//     cardNumber: "",
//     expiry: "",
//     cvv: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const nextStep = () => setStep(step + 1);
//   const prevStep = () => setStep(step - 1);
  
//   return (
//     <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
//       {step === 1 && (
//         <div>
//           <h2 className="text-xl font-bold mb-4">Select Donation Amount</h2>
//           <input
//             type="number"
//             name="amount"
//             value={formData.amount}
//             onChange={handleChange}
//             placeholder="Enter amount"
//             className="w-full p-2 border rounded mb-4"
//           />
//           <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={nextStep}>
//             Next
//           </button>
//         </div>
//       )}
//       {step === 2 && (
//         <div>
//           <h2 className="text-xl font-bold mb-4">Your Details</h2>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Full Name"
//             className="w-full p-2 border rounded mb-2"
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email Address"
//             className="w-full p-2 border rounded mb-4"
//           />
//           <button className="bg-gray-400 text-white px-4 py-2 rounded mr-2" onClick={prevStep}>
//             Back
//           </button>
//           <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={nextStep}>
//             Next
//           </button>
//         </div>
//       )}
//       {step === 3 && (
//         <div>
//           <h2 className="text-xl font-bold mb-4">Payment Information</h2>
//           <input
//             type="text"
//             name="cardNumber"
//             value={formData.cardNumber}
//             onChange={handleChange}
//             placeholder="Card Number"
//             className="w-full p-2 border rounded mb-2"
//           />
//           <input
//             type="text"
//             name="expiry"
//             value={formData.expiry}
//             onChange={handleChange}
//             placeholder="MM/YY"
//             className="w-full p-2 border rounded mb-2"
//           />
//           <input
//             type="text"
//             name="cvv"
//             value={formData.cvv}
//             onChange={handleChange}
//             placeholder="CVV"
//             className="w-full p-2 border rounded mb-4"
//           />
//           <button className="bg-gray-400 text-white px-4 py-2 rounded mr-2" onClick={prevStep}>
//             Back
//           </button>
//           <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={nextStep}>
//             Confirm
//           </button>
//         </div>
//       )}
//       {step === 4 && (
//         <div className="text-center">
//           <h2 className="text-xl font-bold mb-4">Thank You!</h2>
//           <p>Your donation of ${formData.amount} has been received.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WithMaterilTable;
import React, { useState } from "react";

const WithMaterilTable = () => {
  const [selectedAmount, setSelectedAmount] = useState(20);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("");

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (event) => {
    const value = event.target.value.replace(/^0+/, "");
    if (/^[0-9]*$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(null);
    }
  };

  return (
    <div
      className="flex justify-center bg-blue-200 bg-cover bg-center w-full p-2 text-back"
      style={{ backgroundImage: "url('')" }}
    >
      <div className=" bg-opacity-80 p-6 rounded-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold flex items-center">
          <span className="bg-red-500 text-back font-bold rounded-full w-8 h-8 flex items-center justify-center mr-2">$</span>
          Donate
        </h2>
        <p className="text-sm mt-2">Your contribution is vital to the success of our initiative.</p>
        
        <form action="https://earphone.foxycart.com/cart" method="post">
          <input type="hidden" name="name" value="Donation" />
          <input type="hidden" name="price" value={customAmount || selectedAmount} />

          <div className="mt-6">
            <h3 className="text-sm font-bold">Donation amount*</h3>
            <div className="grid grid-cols-2 gap-2 mt-3">
              {[20, 50, 100, 500].map((amount) => (
                <div
                  key={amount}
                  className={`p-3 text-center text-white rounded-lg cursor-pointer transition ${selectedAmount === amount ? "bg-red-500" : "bg-gray-700" }`}
                  onClick={() => handleAmountClick(amount)}
                >
                  <input type="radio" name="amount" value={amount} checked={selectedAmount === amount} readOnly hidden />
                  <label className="font-semibold">${amount}</label>
                </div>
              ))}
            </div>
            <input
              type="number"
              name="amount"
              value={customAmount}
              placeholder="Enter Other Amount"
              className="w-full mt-3 p-3 text-center text-white bg-gray-700 rounded-lg"
              onChange={handleCustomAmountChange}
            />
          </div>

          <div className="mt-6">
            <h3 className="text-sm  font-bold">Donation type*</h3>
            <div className="grid grid-cols-2 gap-2 mt-3">
              <label
                className={`p-3 text-center text-white rounded-lg cursor-pointer transition ${donationType === "" ? "bg-red-500" : "bg-gray-700"}`}
                onClick={() => setDonationType("")}
              >
                <input type="radio" name="sub_frequency" value="" checked={donationType === ""} readOnly hidden />
                One-Time
              </label>
              <label
                className={`p-3 text-white text-center rounded-lg cursor-pointer transition ${donationType === "1m" ? "bg-red-500" : "bg-gray-700"}`}
                onClick={() => setDonationType("1m")}
              >
                <input type="radio" name="sub_frequency" value="1m" checked={donationType === "1m"} readOnly hidden />
                Monthly
              </label>
            </div>
          </div>

          <div className="mt-6">
            <button type="submit" className="w-full bg-red-500 text-white p-3 rounded-lg text-lg font-bold uppercase">
              Donate ${customAmount || selectedAmount}
            </button>
            <p className="text-xs text-gray-700 font-bold mt-2">*Contributions are tax-deductible.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WithMaterilTable;