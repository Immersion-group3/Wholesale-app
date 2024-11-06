import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "../assets/VendorImages/googleIcon.png";
import appleIcon from "../assets/VendorImages/appleIcon.png";
import fbIcon from "../assets/VendorImages/fbIcon.png";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { apiVendorSignUp } from "../services(vendor)/authVendor";
import { toast } from "react-toastify";

const VendorSignUp = () => {
  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);
  const toggleVisibility = () => setShowPass(!showPass);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State for loading status

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
      toast.success("You have been signed up successfully!")
    } catch (error) {
      console.error("Error during Google sign-in:", error);
    }
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Start loading

    const form = event.target;
    const formData = new FormData(form);
    
    const data = {
      
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
      role:"vendor"

    };

    try {
      const response = await apiVendorSignUp(data);
      if (response.status === 200 || response.status === 201) {
        console.log("Successfully Signed Up");
        navigate("/vendorlogin");
        toast.success("You have been successfully signed up! Welcome")
      }
      
    } catch (error) {
       if(response.status=== 409){
        toast.error("This account already exists. Go ahead and log in.")
      }
      else{
        console.log("Failed to sign up");
      toast.error("Oops! We couldn't sign you up. Please try again")
      }
    } finally {
      setIsLoading(false); // End loading
    }
  };

  return (
    <div>
      <section className="h-[100vh] bg-[#c5e0b5] py-[3%] px-[15%]">
        <div className=" h-[100%] bg-white w-[100%] rounded-3xl flex">
          <div className="w-[75%] bg-[white] rounded-3xl z-1 flex flex-col pt-[3%] px-[5%] ml-auto mr-auto">
            <div className="h-[10%] mb-[0.5em] flex">
              <FontAwesomeIcon icon={faArrowLeftLong} onClick={() => navigate("/")} className="text-[1.5em] mt-[0.5em] mr-[5%]" />
              <h1 className="text-[1.8em] font-bold">Create Account</h1>
            </div>
            <div className="h-[10%] flex justify-center items-center gap-x-[5%] mb-[5%]">
              <button onClick={handleGoogleAuth} className="w-[50%] h-[100%] border flex pt-[0.3em] hover:cursor-pointer ml-auto mr-auto">
                <img src={googleIcon} className="h-[1.5em] ml-[10%] mr-[5%]" alt="Google" />
                <p>Sign up with Google</p>
              </button>
              {/* <button className="w-[100%] h-[100%] border flex pt-[0.3em]">
                <img src={appleIcon} className="h-[1.5em] ml-[10%] mr-[5%]" alt="Apple" />
                <p>Sign Up with Apple</p>
              </button> */}
            </div>
            <hr />
            <h2 className="font-semibold bg-[white] text-center mt-[-0.8em] w-[10%] h-[5%] ml-auto mr-auto mb-[0.5em]">OR</h2>
            <form onSubmit={handleSignup} className="mt-0 h-[100%]">
              <div className="grid grid-rows-4 grid-cols-1 h-auto gap-y-[1em] w-[70%] ml-auto mr-auto">
                <div className="h-[100%] pb-[1em] pl-[0.5em] flex ">
                  <input type="text" id="firstName" name="firstName" placeholder="First Name" className="w-[100%] h-[80%] border-b-2" />
                </div>
                <div className="h-[100%] pb-[1em] pl-[0.5em]">
                  <input type="text" id="lastName" name="lastName" placeholder="Last Name" className="w-[100%] h-[80%] border-b-2" />
                </div>
                <div className="h-[100%] pb-[1em] pl-[0.5em]">
                  <input type="email" id="email" name="email" placeholder="Email" className="w-[100%] h-[80%] border-b-2" />
                </div>
                <div className="h-[100%] pb-[1em] pl-[0.5em]">
                  <div className="flex h-[100%]">
                    <input type={showPass ? "text" : "password"} id="password" name="password" placeholder="Password" className="w-[100%] h-[80%] border-b-2" />
                    <FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} onClick={toggleVisibility} className="ml-[-1.5em] text-[#0d8a2e] mt-[-0.3em] cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <button type="submit" disabled={isLoading} className="mt-[5%] mb-[3%] h-[20%] border bg-[rgb(13,138,46)] text-center text-white rounded-lg py-[0.6em] font-bold w-[70%] ml-auto mr-auto">
                  {isLoading ? "Creating Account..." : "Create Account"}
                </button>
                <p className="text-center">Already have an account? <Link to="/vendorlogin" className="underline text-[rgb(13,138,46)]">Log In</Link></p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VendorSignUp;



// <div>
//   <section className="lg:h-[100vh]">
//     <div className="h-[20%] flex pl-[10%] pt-[20%]">
//       <FontAwesomeIcon className="text-[2em] mt-[0.8em] mr-[15%]" icon={faArrowLeftLong} />
//       <h1 className="text-[3em] text-center font-bold">Sign Up</h1>
//     </div>
//     <div className="h-[80%] rounded-tl-[18%] w-full bg-[#0d8a2e] mb-0 pt-[10%]">
//       <form className="h-[100%] w-[80%] ml-auto mr-auto grid grid-rows-6 grid-cols-1 gap-[2em]">
//         {/* INPUT FOR BUSINESS NAME */}
//         <div className="bg-[white] rounded-xl border pl-[5%]">
//           <label htmlFor="businessname" className="text-[1.4em] font-semibold">Business name</label>
//           <input type="text" id="businessname" className="border-b-4 w-[90%] h-[55%] text-[1.4em] text-[#5c5c5c]"/>
//         </div>
//         {/* INPUT FOR FIRST NAME */}
//         <div className="bg-[white] rounded-xl border pl-[5%]">
//           <label htmlFor="firstname" className="text-[1.4em] font-semibold">First name</label>
//           <input type="text" id="firstname" className="border-b-4 w-[90%] h-[55%] text-[1.4em] text-[#5c5c5c]"/>
//         </div>
//         {/* INPUT FOR LAST NAME */}
//         <div className="bg-[white] rounded-xl border pl-[5%]">
//           <label htmlFor="lastname" className="text-[1.4em] font-semibold">Last name</label>
//           <input type="text" id="lastname" className="border-b-4 w-[90%] h-[55%] text-[1.4em] text-[#5c5c5c]"/>
//         </div>
//         {/* INPUT FOR EMAIL */}
//         <div className="bg-[white] rounded-xl border pl-[5%]">
//           <label htmlFor="email" className="text-[1.4em] font-semibold">Email</label>
//           <input type="email" id="email" className="border-b-4 w-[90%] h-[55%] text-[1.4em] text-[#5c5c5c]"/>
//         </div>
//         {/* INPUT FOR PASSWORD */}
//         <div className="bg-[white] rounded-xl border pl-[5%]">
//           <label htmlFor="password" className="text-[1.4em] font-semibold">Password</label>
//           <input type="password" id="password" className="border-b-4 w-[90%] h-[55%] text-[1.4em] text-[#5c5c5c]"/>
//         </div>

//         <button className="bg-[black] h-[70%] text-[white] text-[1.5em] font-extrabold">Sign Up</button>


//       </form>
//     </div>
//   </section>
// </div>
