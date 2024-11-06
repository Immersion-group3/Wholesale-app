import React, { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const VerificationCode = () => {
  const codeRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || ""; // Retrieve email from state if passed from previous page

  // Mask the email to show only the first letter, part of the domain, and the top-level domain
  const maskEmail = (email) => {
    if (!email) return "email@example.com";
    const [localPart, domain] = email.split("@");
    return `${localPart[0]}*****@${domain.slice(0, 1)}****.${domain.split(".").pop()}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = codeRef.current.value;

    try {
      console.log("Verification Code Submitted:", code);
      // Placeholder for backend verification logic
      // await verifyCodeWithBackend(code); // Uncomment for API call
      navigate("/create-new-password");
    } catch (error) {
      console.error("Error verifying code:", error);
      // Handle error (e.g., show an error message)
    }

  };

    const goToBack=()=>{
      navigate("/forgotpassword");
    }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#c5e0b5" }}>
      <div className="p-8 rounded-lg shadow-lg w-full max-w-sm" style={{ backgroundColor: "#ffffff" }}>
        <h2 className="text-2xl font-semibold text-center mb-4">Enter the 6-digit code</h2>
        
        <p className="text-center text-gray-700 mb-4">
          Check <span className="font-semibold">{maskEmail(email)}</span> for a verification code.
        </p>
        <p
          className="text-center text-green-600 cursor-pointer mb-4"
          style={{ color: "#0d8a2e" }}
          onClick={() => navigate("/forgot-password")}
        >
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

          <p
            className="text-center text-green-600 cursor-pointer"
            style={{ color: "#0d8a2e" }}
            onClick={() => console.log("Resend code")} // Placeholder for resend logic
          >
            Resend code
          </p>

          <button
            type="submit"
            className="w-full py-2 rounded-md font-semibold transition mt-4"
            style={{ backgroundColor: "#0d8a2e", color: "#ffffff" }}
          >
            Submit
          </button>
          <button
            className="w-full py-2 rounded-md font-semibold transition mt-4"
            style={{ backgroundColor: "#0d8a2e", color: "#ffffff" }}
            onClick={goToBack}
          >
            Back
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-4">
          If you don’t see the email in your inbox, check your spam folder. If it’s not there, the email address may not be confirmed, or it may not match an existing account.
        </p>
        <p
          className="text-center text-green-600 cursor-pointer mt-2"
          style={{ color: "#0d8a2e" }}
          onClick={() => console.log("Can't access email")} // Placeholder for additional support
        >
          Can’t access this email?
        </p>
      </div>
    </div>
  );
};

export default VerificationCode;
