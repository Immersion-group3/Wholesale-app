import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import googleIcon from "../assets/VendorImages/googleIcon.png";
import appleIcon from "../assets/VendorImages/appleIcon.png";
import fbIcon from "../assets/VendorImages/fbIcon.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"; 
import { auth } from "../../firebase/firebaseConfig"; 
import { apiVendorLogin } from "../services(vendor)/authVendor";
import { toast } from "react-toastify";

const VendorLogin = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // New loading state

  const toggleVisibility = () => setShowPass(!showPass);
  const handleBack = () => {
    navigate("/");
  };

  const handleGoogleAuth = async (event) => {
    event.preventDefault();
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: "select_account"
      });
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();
      localStorage.setItem("authToken", token);
      navigate("/vendordash");
    } catch (error) {
      setError("Error during Google sign-in: " + error.message);
      console.error("Error during Google sign-in:", error);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true at the start of the login process

    const form = event.target;
    const formData = new FormData(form);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await apiVendorLogin(data);
      if (response.status === 200 || response.status === 201) {
        console.log("Successfully Logged In");
        navigate("/vendordash2");
        toast.success("You have been logged in. Welcome back");
      }
    } catch (error) {
      setError("Failed to log in");
      console.error("Failed to log in:", error);
      toast.error("Oops! We failed to log you in. Please try again.")
    } finally {
      setLoading(false); // Reset loading status after the login process is complete
    }
  };

  return (
    <div>
      <section className="h-screen bg-[#f4f9f5] py-10 px-6">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 mx-auto">
          <div className="flex items-center justify-between mb-6">
            <FontAwesomeIcon 
              icon={faArrowLeftLong} 
              onClick={handleBack} 
              className="text-2xl cursor-pointer text-[#0d8a2e]" 
            />
            <h1 className="text-2xl font-semibold">Log Into Your Account</h1>
          </div>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <div className="flex justify-center gap-x-4 mb-6">
            <button 
              onClick={handleGoogleAuth} 
              className="w-full h-12 flex items-center justify-center border rounded-md mb-4 hover:bg-gray-50 focus:outline-none"
            >
              <img src={googleIcon} className="h-6 mr-3" alt="Google" />
              <span className="text-lg">Sign In with Google</span>
            </button>
            {/* <button className="w-full h-12 flex items-center justify-center border rounded-md mb-4 hover:bg-gray-50 focus:outline-none">
              <img src={appleIcon} className="h-6 mr-3" alt="Apple" />
              <span className="text-lg">Sign In with Apple</span>
            </button> */}
          </div>

          <hr className="mb-6" />

          <h2 className="text-center text-lg font-medium mb-6">OR</h2>

          <form onSubmit={handleLogin}>
            <div className="space-y-4">
              <div>
                <input
                  type="email" 
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-green-400"
                  required
                />
                <FontAwesomeIcon 
                  icon={showPass ? faEye : faEyeSlash} 
                  onClick={toggleVisibility} 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-green-500" 
                />
              </div>
              <Link to="/forgotpassword" className="text-green-500 text-sm text-right block mt-2">Forgot Password?</Link>
              
              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-3 bg-green-500 text-white font-bold rounded-md mt-6 hover:bg-green-600 focus:outline-none disabled:bg-gray-400"
              >
                {loading ? "Logging In..." : "Log In"}
              </button>

              <p className="text-center text-sm mt-4">
                Don't have an account? 
                <Link to="/vendorsignup" className="text-green-500 font-semibold"> Sign Up</Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default VendorLogin;
