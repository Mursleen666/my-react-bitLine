import React, { useState } from 'react';

const RegisterForm = ({ goToLogin }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="w-full max-w-[550px] min-h-[550px] p-4 pb-7 sm:p-6 rounded" id="formContainer">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-9">Create Your Account</h1>

      {/* Step Indicator */}
      <div className="relative mb-10 px-2">
        {/* Line background */}
        <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200 z-0 rounded-full" />
        {/* Filled line */}
        <div
          className="absolute top-4 left-0 h-1 bg-gradient-to-r from-black via-blue-900 to-blue-900 z-10 rounded-full transition-all duration-300"
          style={{
            width:
              step === 1 ? '0%' :
              step === 2 ? '50%' :
              step === 3 ? '100%' :
              '0%',
          }}
        />
        {/* Steps */}
        <div className="flex justify-between relative z-20">
          {[1, 2, 3].map((s, index) => (
            <div key={s} className="flex flex-col items-center w-full">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full font-semibold z-20
                  ${step === s
                    ? 'bg-blue-900 text-white'
                    : step > s
                    ? 'bg-black text-white'
                    : 'bg-gray-200 text-gray-500'
                  }`}
              >
                {s}
              </div>
              <div className={`text-[13px] mt-2 ${step === s ? 'font-semibold text-black' : 'text-gray-600'}`}>
                {['Personal Details', 'Account Details', 'Verification'][index]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block mb-1 font-semibold">First Name</label>
              <input type="text" placeholder="First Name" className="p-2 border rounded w-full" />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Middle Name</label>
              <input type="text" placeholder="Middle Name(s)" className="p-2 border rounded w-full" />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Last Name</label>
              <input type="text" placeholder="Last Name" className="p-2 border rounded w-full" />
            </div>
          </div>
          <div>
            <label className="block mb-1 font-semibold">Tax ID</label>
            <input type="text" placeholder="Tax ID (SSN)" className="w-full p-2 border rounded" />
          </div>
          <div className="flex items-start">
            <input type="checkbox" className="mr-2 mt-1" id="confirmName" />
            <label htmlFor="confirmName" className="text-sm">
              I confirm that the name entered is the same as it appears on my ID
            </label>
          </div>
          <button type="button" onClick={nextStep} className="w-full bg-pink-700 text-white py-2 rounded-full">Continue</button>
        </form>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Email Address</label>
            <input type="email" placeholder="Email Address" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Mobile Phone Number</label>
            <input type="tel" placeholder="Mobile Phone Number" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Password</label>
            <input type="password" placeholder="Minimum 8 characters" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Confirm Password</label>
            <input type="password" placeholder="Confirm password" className="w-full p-2 border rounded" />
          </div>
          <button type="button" onClick={nextStep} className="w-full bg-pink-700 text-white py-2 rounded-full">Continue</button>
          <button type="button" onClick={prevStep} className="w-full border mt-2 py-2 rounded-full">Back</button>
        </form>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <form className="space-y-4 mb-4">
          <p className="text-gray-700 text-sm mb-2">Enter the code sent to your email address</p>
          <input type="text" maxLength="6" placeholder=".   .   .   .   ." className="w-full p-2 border rounded tracking-widest text-center" />
          <div className="text-right text-sm text-blue-700 underline cursor-pointer">Resend code</div>
          <button type="submit" onClick={goToLogin} className="w-full bg-pink-700 text-white py-2 rounded-full">Submit</button>
          <button type="button" onClick={prevStep} className="w-full border mt-2 py-2 rounded-full">Back</button>
        </form>
      )}
    </div>
  );
};

export default RegisterForm;
