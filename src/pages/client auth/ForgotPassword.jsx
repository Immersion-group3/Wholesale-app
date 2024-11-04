import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      // Here, you would call your API for password reset
      // Example: await apiForgotPassword(email);
      console.log(`Password reset link sent to ${email}`);
      toast.success("Password reset link sent!"); // Success toast
    } catch (error) {
      console.error(error);
      toast.error("Failed to send reset link. Please try again."); // Error toast
    }
  };

  return (
    <section className="h-[100vh] bg-[#c5e0b5] py-[3%] px-[15%]">
      <ToastContainer /> {/* Add ToastContainer here */}
      <div className="h-[100%] bg-white w-[100%] rounded-3xl flex justify-center items-center">
        <div className="w-[75%] bg-white rounded-3xl z-1 flex flex-col pt-[3%] px-[5%]">
          <h1 className="text-[1.8em] font-semibold text-center">Forgot Password?</h1>
          <p className="text-center mb-[1em]">Please enter your email address to reset your password.</p>
          <form onSubmit={handleForgotPassword} className="flex flex-col items-center">
            <div className="w-full pb-[1em] pl-[0.5em]">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="johndoe@gmail.com"
                className="w-full h-[40px] border-b-2 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update state on change
                required
              />
            </div>
            <button
              className="mt-[1em] h-[40px] w-full bg-[#0d8a2e] text-center text-[white] font-bold rounded-md shadow-md hover:bg-[#0b5e23] transition-all duration-300"
              type="submit"
            >
              Send Reset Link
            </button>
          </form>
          <p className="mt-[0.5em] text-center">
            Remember your password? <Link to="/clientlogin" className="text-[#0d8a2e] font-semibold">Log in</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
