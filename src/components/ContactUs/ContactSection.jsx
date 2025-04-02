import React, { useState } from "react";

const offices = {
  Mumbai: {
    address: "101, First Floor Gladdiola Above Kotak Bank, Hanuman Road, Ville Parle East, Mumbai - 400 057",
    phone: "91-22-26104106/07",
    email: "mumbai@smilefoundationindia.org",
  },
  Kolkata: {
    address: "Some address in Kolkata",
    phone: "91-33-12345678",
    email: "kolkata@smilefoundationindia.org",
  },
  Bengaluru: {
    address: "Some address in Bengaluru",
    phone: "91-80-87654321",
    email: "bengaluru@smilefoundationindia.org",
  },
};

export default function ContactSection() {
  const [selectedOffice, setSelectedOffice] = useState("Mumbai");

  return (
    <div className="p-6 bg-gray-200 max-w-7xl mx-auto mt-8 rounded-md shadow-lg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center">VISIT US HERE</h2>
        <div className="mt-4">
          <h3 className="font-semibold text-center">HEAD OFFICE</h3>
          <p className="text-center">161 B/4, 3rd Floor, Gulmohar House, Yusuf Sarai Community Centre, New Delhi – 110049</p>
          <p className="text-center"><span className="font-semibold">Phone:</span> +91-11-43123700, +91-11-41354564/65/66</p>
          <p className="text-center"><span className="font-semibold">Fax:</span> +91-11-41354454</p>
          <p className="text-center"><span className="font-semibold">Email:</span> info@smilefoundationindia.org</p>
          <p className="text-center"><span className="font-semibold">Regd. Office:</span> V-11, Level 1, Green Park Extension, New Delhi – 110016</p>
        </div>

        <h2 className="text-2xl font-bold mt-8 text-center">REGIONAL OFFICES</h2>
        <div className="flex flex-wrap justify-center space-x-2 mt-4">
          {Object.keys(offices).map((office) => (
            <button
              key={office}
              className={`px-4 py-2 rounded font-bold ${selectedOffice === office ? "bg-gray-400 text-white" : "bg-gray-200"}`}
              onClick={() => setSelectedOffice(office)}
            >
              {office.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="mt-6 bg-white p-6 rounded shadow-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="text-center p-4 border rounded-lg shadow-sm">
            <div className="flex justify-center mb-2">
              <span className="bg-green-100 p-2 rounded-full">📍</span>
            </div>
            <h3 className="text-lg font-semibold">ADDRESS</h3>
            <p>{offices[selectedOffice].address}</p>
          </div>

          <div className="text-center p-4 border rounded-lg shadow-sm">
            <div className="flex justify-center mb-2">
              <span className="bg-green-100 p-2 rounded-full">📞</span>
            </div>
            <h3 className="text-lg font-semibold">PHONE</h3>
            <p>{offices[selectedOffice].phone}</p>
          </div>

          <div className="text-center p-4 border rounded-lg shadow-sm">
            <div className="flex justify-center mb-2">
              <span className="bg-green-100 p-2 rounded-full">📧</span>
            </div>
            <h3 className="text-lg font-semibold">EMAIL</h3>
            <p>{offices[selectedOffice].email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}