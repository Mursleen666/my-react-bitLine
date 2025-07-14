import React, { useState } from "react";

const CreateTransactionModal = ({ show, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    amount: "",
    currency: "",
    arrivalDate: "",
    transactionAmount: "",
    agreeToTerms: false,
  });

  if (!show) return null;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.agreeToTerms) {
      alert("You must agree to the terms to proceed.");
      return;
    }
    console.log("Submitted:", formData);
    onClose();
  };

  const stepTitles = ["Amount & Currency", "Dates / Amount", "Terms & Conditions"];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white w-[90%] md:w-[500px] rounded-lg p-6 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          className="absolute top-2 right-3 text-2xl font-bold text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Modal Title */}
        <h2 className="text-xl font-bold text-center mb-6">Create Transaction</h2>

        {/* Step Indicator */}
        <div className="relative mb-10 px-2">
          <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200 z-0 rounded-full" />
          <div
            className="absolute top-4 left-0 h-1 bg-gradient-to-r from-black via-blue-900 to-blue-900 z-10 rounded-full transition-all duration-300"
            style={{
              width:
                step === 1 ? "0%" : step === 2 ? "50%" : step === 3 ? "100%" : "0%",
            }}
          />
          <div className="flex justify-between relative z-20">
            {[1, 2, 3].map((s, index) => (
              <div key={s} className="flex flex-col items-center w-full">
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full font-semibold z-20
                    ${step === s
                      ? "bg-blue-900 text-white"
                      : step > s
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-500"
                    }`}
                >
                  {s}
                </div>
                <div
                  className={`text-xs mt-2 text-center ${step === s
                    ? "font-semibold text-black"
                    : "text-gray-600"
                    }`}
                >
                  {stepTitles[index]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div>
            <label className="block mb-2 font-semibold">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full border rounded p-2 mb-4"
              placeholder="Enter amount"
            />
            <label className="block mb-2 font-semibold">Currency</label>
            <select
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              className="w-full border rounded p-2"
            >
              <option value="">Select</option>
              <option>Bitcoin</option>
              <option>Ethereum</option>
              <option>Tether</option>
              <option>USDC</option>
            </select>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div>
            <label className="block mb-2 font-semibold">Arrival Date</label>
            <input
              type="date"
              name="arrivalDate"
              value={formData.arrivalDate}
              onChange={handleChange}
              className="w-full border rounded p-2 mb-4"
            />

            <label className="block mb-2 font-semibold">Transaction Amount (USD)</label>
            <input
              type="number"
              name="transactionAmount"
              value={formData.transactionAmount}
              onChange={handleChange}
              className="w-full border rounded p-2"
              placeholder="Enter amount in USD"
            />
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="space-y-6 text-sm">
            <div className="border rounded-lg p-4 shadow-sm bg-gray-50">
              <div className="flex justify-between mb-1"><span className="font-semibold">Term:</span><span>27 days</span></div>
              <div className="flex justify-between mb-1"><span className="font-semibold">Total Value:</span><span>50%</span></div>
              <div className="flex justify-between mb-1"><span className="font-semibold">Fee (10%):</span><span>$10.00</span></div>
              <div className="flex justify-between text-red-600"><span className="font-semibold">Cost:</span><span>0.00244498778 BTC_TEST</span></div>
            </div>

            <div className="border rounded-lg p-4 shadow-sm bg-gray-50">
              <div className="font-semibold text-blue-900 mb-2">Fee Rebates:</div>
              <p>Close within 7 days — <span className="font-medium">50% of fee</span></p>
              <p>Close within 14 days — <span className="font-medium">25% of fee</span></p>
            </div>

            <div className="border rounded-lg p-4 shadow-sm bg-gray-50">
              <div className="font-semibold text-blue-900 mb-2">Extra fees:</div>
              <p>Early Settlement Threshold — <span className="font-medium">5%</span></p>
            </div>

            <div className="flex items-start gap-2 text-xs text-gray-700">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="mt-1"
              />
              <p>
                As the market value of your Deposited Assets changes, so does the Actual Value
                of your transaction. If the Actual Value significantly increases, an Early
                Settlement Threshold call may occur...
              </p>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {step > 1 ? (
            <button
              onClick={prevStep}
              className="px-4 py-2 rounded-full bg-gray-300 text-gray-700 font-semibold"
            >
              Back
            </button>
          ) : <div />}

          {step < 3 ? (
            <button
              onClick={nextStep}
              className="px-4 py-2 rounded-full bg-[#283382] text-white font-semibold"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-6 py-2 rounded-full bg-[#d71c5c] text-white font-semibold w-full"
            >
              Confirm
            </button>
          )}
        </div>

        {/* Cancel Button */}
        {step === 3 && (
          <button
            onClick={onClose}
            className="mt-3 w-full border border-[#d71c5c] text-[#d71c5c] font-semibold py-2 rounded-full"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default CreateTransactionModal;
