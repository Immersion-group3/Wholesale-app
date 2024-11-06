import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiClientForgotPassword } from "../../services(client)/clientauth";

const ClientResetPassword = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [countdown, setCountdown] = useState(0);

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    // Validate that all fields are filled
    if (!firstName || !lastName || !email || !password) {
      toast.error("Please fill in all the fields.");
      return;
    }

    // Retrieve the token from local storage
    const token = localStorage.getItem("authToken");

    try {
      // Prepare the data for the request
      const userData = { firstName, lastName, email: email.trim(), password };

      // Call the API to trigger the forgot password flow
      await apiClientForgotPassword(userData, token);

      // Show success message and start countdown
      toast.success("Password reset link sent!");

      // Start the countdown timer for 2 minutes (120 seconds)
      setCountdown(120);
    } catch (error) {
      console.error("Forgot password request failed:", error);
      toast.error("Failed to send reset link. Please try again.");
    }
  };

  // Countdown effect for resend button
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return (
    <section className="h-[100vh] bg-[#c5e0b5] flex items-center justify-center">
      <ToastContainer />
      <div className="bg-white w-[85%] max-w-[500px] rounded-2xl flex justify-center items-center shadow-lg p-6">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-[1.5em] font-semibold text-center">Forgot Password?</h1>
          <p className="text-center mb-4">Please enter your details to reset your password.</p>
          <form onSubmit={handleForgotPassword} className="w-full flex flex-col items-center">
            <div className="w-full mb-4">
              <label htmlFor="firstName" className="block">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="John"
                className="w-full h-[40px] border-b-2 focus:outline-none"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="w-full mb-4">
              <label htmlFor="lastName" className="block">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Doe"
                className="w-full h-[40px] border-b-2 focus:outline-none"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="w-full mb-4">
              <label htmlFor="email" className="block">Email</label>
              <input
                type="email"
                id="email"
                placeholder="johndoe@gmail.com"
                className="w-full h-[40px] border-b-2 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="w-full mb-4">
              <label htmlFor="password" className="block">New Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter new password"
                className="w-full h-[40px] border-b-2 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              className="h-[40px] w-full bg-[#0d8a2e] text-white font-bold rounded-md shadow-md hover:bg-[#0b5e23] transition-all duration-300 disabled:bg-gray-400"
              type="submit"
              disabled={countdown > 0}
            >
              {countdown > 0 ? `Resend in ${countdown}s` : "Send Reset Link"}
            </button>
          </form>
          <p className="mt-4 text-center">
            Remember your password? <Link to="/clientlogin" className="text-[#0d8a2e] font-semibold">Log in</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientResetPassword;
