import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiClientSignup } from "../../services(client)/clientauth";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0 hook here

const ClientSignup = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { loginWithRedirect } = useAuth0(); // Initialize Google sign-in with Auth0

  const toggleVisibility = () => setShowPass(!showPass);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!password) {
      toast.error("Password is required!");
      setLoading(false);
      return;
    }

    const userData = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      password: password.trim(),
    };

    try {
      const response = await apiClientSignup(userData);
      if (response.status === 200 || response.status === 201) {
        toast.success("Signup successful!");
        setTimeout(() => navigate("/clientLogin"), 3000);
      } else {
        toast.error("Signup failed! Please try again.");
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.message === "Client already exists") {
        toast.error("Client already exists!");
      } else {
        toast.error("An error occurred during signup. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await loginWithRedirect({ connection: "google-oauth2" });
    } catch (error) {
      toast.error("Google signup failed. Please try again.");
    }
  };

  return (
    <section className="h-screen bg-[#c5e0b5] flex items-center justify-center p-6">
      <ToastContainer />
      <div className="flex w-full max-w-5xl bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Left Section */}
        <div className="w-1/3 bg-[#0d8a2e] p-6 text-white flex flex-col items-center justify-center rounded-l-3xl">
          <h2 className="text-3xl font-bold mb-4">Welcome!</h2>
          <p>Create an account to access our amazing resources.</p>
        </div>

        {/* Right Section */}
        <div className="w-2/3 p-8 flex flex-col items-center">
          <h1 className="text-2xl font-semibold mb-6">Sign Up</h1>
          
          {/* Google Sign-Up Button */}
          <button
            onClick={handleGoogleSignup} // Google sign-in
            className="flex items-center mb-6 w-full max-w-sm justify-center p-2 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            <FontAwesomeIcon icon={faGoogle} className="text-[#4285F4] mr-2" />
            Sign Up with Google
          </button>
          
          <p className="mb-4">or</p>

          {/* Manual Signup Form */}
          <form onSubmit={handleSignup} className="w-full max-w-sm space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="firstname" className="block text-sm">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  placeholder="John"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastname" className="block text-sm">Last Name</label>
                <input
                  type="text"
                  id="lastname"
                  placeholder="Doe"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm">Email</label>
              <input
                type="email"
                id="email"
                placeholder="johndoe@gmail.com"
                className="w-full p-2 border border-gray-300 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  id="password"
                  placeholder="*******"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div
                  className="absolute inset-y-0 right-2 flex items-center cursor-pointer"
                  onClick={toggleVisibility}
                >
                  <FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-[#0d8a2e] text-white font-semibold rounded hover:bg-[#0b5e23] transition"
              disabled={loading}
            >
              {loading ? "Creating..." : "Sign Up"}
            </button>
          </form>

          <p className="mt-6">
            Already have an account?{" "}
            <Link to="/clientlogin" className="text-[#0d8a2e] underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientSignup;
