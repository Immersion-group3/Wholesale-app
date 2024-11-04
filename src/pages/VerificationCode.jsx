import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const VerificationCode = () => {
  const codeRef = useRef();

  const handleSubmit = (e) => {
    const navigate=useNavigate();
    e.preventDefault();
    const code = codeRef.current.value;
    console.log("Verification Code Submitted:", code);
    navigate("/create-new-password");
    // Add your code verification logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#c5e0b5" }}>
      <div className="p-8 rounded-lg shadow-lg w-full max-w-sm" style={{ backgroundColor: "#ffffff" }}>
        <h2 className="text-2xl font-semibold text-center mb-4">Enter the 6-digit code</h2>
        
        <p className="text-center text-gray-700 mb-4">
          Check <span className="font-semibold">j*****@gmail.com</span> for a verification code.
        </p>
        <p className="text-center text-green-600 cursor-pointer mb-4" style={{ color: "#0d8a2e" }}>
          Change
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            maxLength="6"
            placeholder="Enter code"
            ref={codeRef}
            className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 text-center"
            required
          />

          <p className="text-center text-green-600 cursor-pointer" style={{ color: "#0d8a2e" }}>
            Resend code
          </p>

          <button
            type="submit"
            className="w-full py-2 rounded-md font-semibold transition mt-4"
            style={{ backgroundColor: "#0d8a2e", color: "#ffffff" }}
          >
            Submit
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-4">
          If you don’t see the email in your inbox, check your spam folder. If it’s not there, the email address may not be confirmed, or it may not match an existing account.
        </p>
        <p className="text-center text-green-600 cursor-pointer mt-2" style={{ color: "#0d8a2e" }}>
          Can’t access this email?
        </p>
      </div>
    </div>
  );
};

export default VerificationCode;
