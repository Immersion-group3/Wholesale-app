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
        navigate("/");
        toast.success("You have been logged in. Welcome back");
      }
    } catch (error) {
      setError("Failed to log in");
      console.error("Failed to log in:", error);
      toast.error("Oops!We failed to log you in. Please try again.")
    } finally {
      setLoading(false); // Reset loading status after the login process is complete
    }
  };

  return (
    <div>
      <section className="h-[100vh] bg-[#c5e0b5] py-[3%] px-[15%]">
        <div className="w-[75%] bg-white rounded-3xl z-1 flex flex-col pt-[3%] px-[5%] ml-auto mr-auto h-[80%]">
          <div className="h-[10%] mb-[0.5em] flex">
            <FontAwesomeIcon icon={faArrowLeftLong} onClick={handleBack} className="hover:cursor-pointer text-[1.5em] mt-[0.5em] mr-[5%]" />
            <h1 className="text-[1.8em] font-bold">Log Into Your Account</h1>
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div className="h-[10%] w-[80%] ml-auto mr-auto flex justify-center items-center gap-x-[5%] mb-[5%]">
            <button onClick={handleGoogleAuth} className="w-[50%] ml-auto mr-auto h-full border flex pt-[0.3em]">
              <img src={googleIcon} className="h-[1.5em] ml-[10%] mr-[5%]" alt="Google" />
              <p>Sign In with Google</p>
            </button>
            {/* <button className="w-full h-full border flex pt-[0.3em]">
              <img src={appleIcon} className="h-[1.5em] ml-[10%] mr-[5%]" alt="Apple" />
              <p>Sign up with Apple</p>
            </button> */}
          </div>
          <hr className="w-[80%] ml-auto mr-auto" />
          <h2 className="font-semibold bg-white text-center mt-[-0.8em] w-[10%] h-[5%] ml-auto mr-auto mb-[0.5em]">OR</h2>
          <form onSubmit={handleLogin} className="h-[100%]">
            <div className="h-auto w-[80%] flex flex-col gap-y-[1em] ml-auto mr-auto">
              <div className="h-[100%] w-[80%] ml-auto mr-auto pb-[1em] pl-[0.5em]">
                <input
                  type="email" 
                  name="email"
                  placeholder="Email"
                  className="h-[80%] border-b-2 w-[90%]"
                />
              </div>
              <div className="h-[100%] w-[80%] ml-auto mr-auto pb-[1em] pl-[0.5em]">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="h-[80%] border-b-2 w-[90%]"
                />
                <div className="mt-[-1.4em] ml-[85%]">
                  {showPass ? (
                    <FontAwesomeIcon icon={faEye} onClick={toggleVisibility} className="text-[#0d8a2e] cursor-pointer" />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} onClick={toggleVisibility} className="text-[#0d8a2e] cursor-pointer" />
                  )}
                </div>
                <Link to="/forgotpassword" className="text-[#0d8a2e]">Forgot Password?</Link>
                <button 
                  type="submit" 
                  disabled={loading} // Disable button when loading
                  className="mt-[5%] h-[20%] w-full border bg-[#0d8a2e] text-center text-[white] font-bold py-[0.5em]"
                >
                  {loading ? "Logging In..." : "Log In"}
                </button>
                <p className="mt-[5%] mb-[5%] text-center">
                  Don't have an account? <Link to="/vendorsignup" className="text-[#0d8a2e] font-semibold">Sign Up</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default VendorLogin;
