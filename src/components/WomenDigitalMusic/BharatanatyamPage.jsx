import React from "react";

const BharatanatyamPage = () => {
  return (
    <div className="flex min-h-screen justify-center p-4 md:p-8">
      {/* Main Container */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6">
          {/* Profile Section */}
          <div className="text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVDMk69aet6rbTIsHA98gnHvoSIVlw_lqaDg&s"
              alt="Profile"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h3 className="mt-2 text-lg font-bold">Mudras</h3>
            <p className="text-gray-500 text-sm">Hand Gestures</p>
          </div>

          {/* Quote Section */}
          <blockquote className="mt-6 text-center text-gray-600 italic">
            “NatyaSutraOnline is an attempt to permanently preserve the rich classical dance and music heritage of India.”
          </blockquote>

          {/* Card Section */}
          <div className="mt-6 bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH7qIhyCkPeqm88OyRbmgULvB0Qh3kOtE9yQ&s"
              alt="Bharatanatyam"
              className="w-full"
            />
            <div className="p-4">
              <h4 className="font-bold">ANGIKA: Bharatanatyam</h4>
              <p className="text-gray-500 text-sm">Dr. Rajashree Warrier focuses on...</p>
              <button className="mt-2 px-4 py-2 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600">
                View details
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/3 bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold">Bharatanatyam</h1>
          <p className="mt-4 text-gray-600">
            Bharatanatyam is India's oldest dance form and is one of the eight officially designated classical dance forms in the country.
          </p>
          
          <h2 className="mt-6 text-xl font-bold">History of Bharatanatyam</h2>
          <p className="text-gray-600 mt-2">
            Evidence of Bharatanatyam can be traced as far back as 200 BC. Paintings and murals have been excavated, detailing performances of this dance form.
          </p>

          <h2 className="mt-6 text-xl font-bold">Style of Bharatanatyam</h2>
          <p className="text-gray-600 mt-2">
            The performer takes the stage alone, depicting various roles through intricate movements, gestures, and storytelling.
          </p>
          
          <h2 className="mt-6 text-xl font-bold">Bharatanatyam Today</h2>
          <p className="text-gray-600 mt-2">
            Bharatanatyam is deeply important in the Indian cultural identity and headlines festivals, school events, and international concerts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BharatanatyamPage;
