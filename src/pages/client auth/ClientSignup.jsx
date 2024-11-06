import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiClientSignup } from "../../services(client)/clientauth";

const ClientSignup = () => {
  const navigate = useNavigate(); // For navigation after successful signup
  const [showPass, setShowPass] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // For loading state

  // Toggle password visibility
  const toggleVisibility = () => setShowPass(!showPass);

  // Handle signup logic
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitting

    // Validate if password is empty
    if (!password) {
      toast.error("Password is required!");
      setLoading(false); // Reset loading state
      return;
    }

    // Prepare the user data
    const userData = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      password: password.trim(),
    };

    console.log(userData);

    try {
      // Make API request to handle signup
      const response = await apiClientSignup(userData);

      // Check if the response is successful
      if (response.status === 200 || response.status === 201) {
        toast.success("Signup successful!");
         // Delay the redirect to allow the toast to show
         setTimeout(() => {
          navigate("/clientLogin"); // Redirect to login page after successful signup
        }, 3000); // Delay for 3 seconds
      } else {
        toast.error("Signup failed! Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during signup. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <section className="h-screen bg-[#c5e0b5] py-[3%] px-[15%]">
      <ToastContainer />
      <div className="flex h-full bg-white rounded-3xl">
        {/* Left Section with Background Color */}
        <div className="w-[30%] bg-[#0d8a2e] rounded-3xl"></div>

        {/* Right Section with Signup Form */}
        <div className="w-[75%] bg-white rounded-3xl flex flex-col pt-[3%] px-[5%]">
          <div className="h-[10%] mb-[0.5em]">
            <h1 className="text-[1.8em] font-semibold">Welcome, Create an account with us</h1>
          </div>
          <hr />
          <h2 className="font-semibold text-center mt-[-0.8em] w-[10%] mx-auto mb-[0.5em]">
            OR
          </h2>

          {/* Signup Form */}
          <form onSubmit={handleSignup} className="flex flex-col">
            <div className="grid grid-cols-2 gap-x-[15%] px-[5%]">
              {/* First Name Field */}
              <div className="pb-[1em] pl-[0.5em]">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  placeholder="John"
                  className="h-[80%] border-b-2"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              {/* Last Name Field */}
              <div className="pb-[1em] pl-[0.5em]">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  id="lastname"
                  placeholder="Doe"
                  className="h-[80%] border-b-2"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              {/* Email Field */}
              <div className="pb-[1em] pl-[0.5em]">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="johndoe@gmail.com"
                  className="h-[80%] border-b-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password Field */}
              <div className="pb-[1em] pl-[0.5em]">
                <label htmlFor="password">Password</label>
                <div className="flex items-center">
                  <input
                    type={showPass ? "text" : "password"}
                    id="password"
                    placeholder="*******"
                    className="h-[80%] border-b-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className="ml-[-1em] cursor-pointer text-[#0d8a2e]"
                    onClick={toggleVisibility}
                  >
                    <FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} />
                  </div>
                </div>
              </div>
            </div>

            {/* Signup Button and Login Link */}
            <div className="flex flex-col items-center mt-4">
              <button
                className="h-[40px] w-[150px] bg-[#0d8a2e] text-center text-[white] font-bold rounded-md shadow-md hover:bg-[#0b5e23] transition-all duration-300"
                type="submit"
                disabled={loading}
              >
                {loading ? "Creating..." : "Sign Up"}
              </button>

              <p className="mt-[0.5em]">
                Already have an account?{" "}
                <Link
                  to="/clientlogin"
                  className="text-[#0d8a2e] underline decoration-dashed underline-offset-4"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ClientSignup;
