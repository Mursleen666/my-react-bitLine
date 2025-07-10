import React, { useState } from 'react';

const RegisterForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="w-full max-w-md p-6 bg-slate-50" id="formContainer">
      {/* Step Indicator */}
      <div className="relative mb-6">
        <div className="absolute top-4 left-0 w-full h-0.5 bg-gray-300 z-0"></div>
        <div className="flex items-center justify-between relative z-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex-1 text-center">
              <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center font-semibold ${
                s === step ? 'bg-indigo-600 text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                {s}
              </div>
              <div className={`text-sm mt-2 ${s === step ? 'font-semibold' : ''}`}>
                {['Personal Details', 'Account Details', 'Verification'][s - 1]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <form className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Your Account</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input type="text" placeholder="First Name" className="p-2 border rounded" />
            <input type="text" placeholder="Middle Name(s)" className="p-2 border rounded" />
            <input type="text" placeholder="Last Name" className="p-2 border rounded" />
          </div>
          <input type="text" placeholder="Tax ID (SSN)" className="w-full p-2 border rounded" />
          <div className="flex items-start">
            <input type="checkbox" className="mr-2 mt-1" id="confirmName" />
            <label htmlFor="confirmName" className="text-sm">I confirm that the name entered is the same as it appears on my ID</label>
          </div>
          <button type="button" onClick={nextStep} className="w-full bg-pink-700 text-white py-2 rounded-full">Continue</button>
        </form>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <form className="space-y-4">
          <input type="email" placeholder="Email Address" className="w-full p-2 border rounded" />
          <input type="tel" placeholder="Mobile Phone Number" className="w-full p-2 border rounded" />
          <input type="password" placeholder="Minimum 8 characters" className="w-full p-2 border rounded" />
          <input type="password" placeholder="Confirm password" className="w-full p-2 border rounded" />
          <button type="button" onClick={nextStep} className="w-full bg-pink-700 text-white py-2 rounded-full">Continue</button>
          <button type="button" onClick={prevStep} className="w-full border mt-2 py-2 rounded-full">Back</button>
        </form>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <form className="space-y-4">
          <p className="text-gray-700 text-sm mb-2">Enter the code sent to your email address</p>
          <input type="text" maxLength="6" placeholder="Your verification code" className="w-full p-2 border rounded tracking-widest text-center" />
          <div className="text-right text-sm text-blue-700 underline cursor-pointer">Resend code</div>
          <button type="submit" className="w-full bg-pink-700 text-white py-2 rounded-full">Submit</button>
          <button type="button" onClick={prevStep} className="w-full border mt-2 py-2 rounded-full">Back</button>
        </form>
      )}
    </div>
  );
};

export default RegisterForm;
