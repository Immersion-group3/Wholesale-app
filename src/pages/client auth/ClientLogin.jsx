import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import { apiClientLogin } from "../../services(client)/clientauth";

const ClientLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
  
    const userData = {
      email,
      password,
    };
  
    try {
      const response = await apiClientLogin(userData);
  
      // Log the full response to inspect its structure
      console.log('Full response:', response);
  
      // Now that you know the response structure, adjust accordingly
      if (response.status === 200 || response.status === 201) {
        const token = response.data.token;  // Adjust this line based on the actual structure of your response
  
        console.log("Logged in successfully, token:", token);
  
        toast.success("Login successful!");
  
        // Store the token in localStorage
        localStorage.setItem('authToken', token); // Save token for future requests
  
        setTimeout(() => {
          navigate("/clientdash");
        }, 3000);
      } else {
        toast.error("Login failed! Please check your credentials.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Login failed! Please check your credentials.");
    }
  };
  
  

  return (
    <section className="h-screen bg-[#c5e0b5] flex items-center justify-center">
      <ToastContainer /> {/* Add ToastContainer here */}
      <div className="bg-white rounded-3xl flex shadow-lg w-[90%] max-w-[500px]">
        <div className="w-[30%] bg-[#0d8a2e] rounded-3xl"></div>
        <div className="w-[70%] bg-[white] rounded-3xl z-1 flex flex-col pt-[3%] pl-[5%] pr-[5%]">
          <div className="h-[10%] mb-[2em] flex">
            <h1 className="text-[1.8em] font-semibold">Welcome Back!</h1>
          </div>
          <form onSubmit={handleLogin} className="flex flex-col">
            <div className="h-[100%] pb-[1em] pl-[0.5em]">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="johndoe@gmail.com"
                className="h-[80%] border-b-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update state on change
                required
              />
            </div>
            <div className="h-[100%] pb-[1em] pl-[0.5em]">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="*******"
                className="h-[80%] border-b-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update state on change
                required
              />
            </div>
            <div className="flex flex-col items-center">
              <button
                className="mt-[1em] h-[40px] w-[150px] bg-[#0d8a2e] text-center text-[white] font-bold rounded-md shadow-md hover:bg-[#0b5e23] transition-all duration-300"
                type="submit"
              >
                Login
              </button>
              <p className="mt-[0.5em] mb-[0.5em] text-center">
                <Link
                  to="/clientforgotpassword"
                  className="text-[#0d8a2e] font-semibold"
                >
                  Forgot Password?
                </Link>
              </p>
              <p className="text-center">
                Don't have an account?{" "}
                <Link to="/clientsignup" className="text-[#0d8a2e] font-semibold">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ClientLogin;
