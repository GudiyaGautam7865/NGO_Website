
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