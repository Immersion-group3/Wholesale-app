import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "../assets/VendorImages/googleIcon.png";
import appleIcon from "../assets/VendorImages/appleIcon.png";
import fbIcon from "../assets/VendorImages/fbIcon.png";
import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { apiVendorSignUp } from "../services(vendor)/authVendor";
import { toast } from "react-toastify";

const VendorSignUp = () => {
  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);
  const toggleVisibility = () => setShowPass(!showPass);

  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleAuth = async (event) => {
    event.preventDefault();
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: "select_account",
      });
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();
      localStorage.setItem("authToken", token);
      navigate("/vendorlogin");
      toast.success("You have been signed up successfully!");
    } catch (error) {
      console.error("Error during Google sign-in:", error);
    }
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const form = event.target;
    const formData = new FormData(form);
    
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
      role: "vendor",
    };

    try {
      const response = await apiVendorSignUp(data);
      if (response.status === 200 || response.status === 201) {
        navigate("/vendorlogin");
        toast.success("You have been successfully signed up! Welcome.");
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.error("This account already exists. Go ahead and log in.");
      } else {
        toast.error("Oops! We couldn't sign you up. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f4f9f5] py-10">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            onClick={() => navigate("/")}
            className="text-2xl cursor-pointer"
          />
          <h1 className="text-2xl font-semibold">Create Account</h1>
        </div>
        <div className="mb-6">
          <button
            onClick={handleGoogleAuth}
            className="w-full h-12 flex items-center justify-center border rounded-md mb-4 hover:bg-gray-50 focus:outline-none"
          >
            <img src={googleIcon} alt="Google" className="h-6 mr-3" />
            <span>Sign up with Google</span>
          </button>
          {/* Add Apple and Facebook buttons */}
        </div>

        <hr className="mb-6" />

        <h2 className="text-center text-xl font-medium mb-4">OR</h2>

        <form onSubmit={handleSignup}>
          <div className="space-y-4">
            <div>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
            <div>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-green-400"
                required
              />
              <FontAwesomeIcon
                icon={showPass ? faEye : faEyeSlash}
                onClick={toggleVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-green-500"
              />
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-green-500 text-white font-bold rounded-md focus:outline-none hover:bg-green-600 disabled:bg-gray-400"
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
            <p className="text-center mt-4 text-sm">
              Already have an account?{" "}
              <Link to="/vendorlogin" className="text-green-500 hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VendorSignUp;
