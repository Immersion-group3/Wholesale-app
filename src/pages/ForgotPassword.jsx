import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const emailRef = useRef();
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    console.log("Submitted:", email);
    navigate("/verify-email")
    // Add your form submission logic here, such as sending a verification code
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#c5e0b5" }}>
      <div className="p-8 rounded-lg shadow-lg w-full max-w-sm" style={{ backgroundColor: "#ffffff" }}>
        <h2 className="text-2xl font-semibold text-center mb-4">Forgot password</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              ref={emailRef}
              className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2"
              required
            />
          </div>
          <p className="text-gray-600 text-sm">
            We’ll send a verification code to this email if it matches an existing account.
          </p>
          
          <button
            type="submit"
            className="w-full py-2 rounded-md font-semibold transition"
            style={{ backgroundColor: "#0d8a2e", color: "#ffffff" }}
          >
            Next
          </button>
          <button
            type="button"
            onClick={() => console.log("Back")}
            className="w-full py-2 rounded-md font-semibold mt-2"
            style={{ color: "#0d8a2e" }}
          >
            Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
