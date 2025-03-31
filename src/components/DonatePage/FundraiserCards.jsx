import React from "react";

const FundraiserCards = () => {
  const fundraisers = [
    {
      title: "This Eid, help abandoned grandparents fight hunger...",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwe03xTGdm2HXtmscuLISKF0ssYKSfwkyVMg&s",
      organization: "Share and Care Children's Welfare Society",
      donations: "15,611",
      daysLeft: 2,
      tag: "Tax Benefits Available",
    },
    {
      title: "Help Gopalan of Akshaya Trust feed and care for rescued...",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwe03xTGdm2HXtmscuLISKF0ssYKSfwkyVMg&s",
      organization: "Akshaya Trust",
      donations: "7,676",
      daysLeft: 4,
      tag: "Tax Benefits Available",
    },
    {
      title: "This Eid, help terror survivor Javed in his mission to educate...",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwe03xTGdm2HXtmscuLISKF0ssYKSfwkyVMg&s",
      organization: "Humanity Welfare Organisation Helping Hands",
      donations: "915",
      daysLeft: 6,
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-2">Support a fundraiser</h2>
      <p className="text-gray-600 text-center mb-6">
        Pick a cause close to your heart and donate now
      </p>
      
      <div className="grid md:grid-cols-3 gap-6">
        {fundraisers.map((fundraiser, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={fundraiser.image}
              alt={fundraiser.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              {fundraiser.tag && (
                <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                  {fundraiser.tag}
                </span>
              )}
              <h3 className="font-semibold text-lg">{fundraiser.title}</h3>
              <p className="text-sm text-gray-600 mb-2">by {fundraiser.organization}</p>
              <div className="flex items-center justify-between text-gray-500 text-sm">
                <span>💖 {fundraiser.donations} Donations</span>
                <span>⏳ {fundraiser.daysLeft} Days Left</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FundraiserCards;
