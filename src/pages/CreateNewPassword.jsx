import React, { useRef, useState } from "react";

const NewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [requireSignIn, setRequireSignIn] = useState(true);
  const newPasswordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPassword = newPasswordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("New password submitted:", newPassword, requireSignIn);
    // Add password update logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#c5e0b5" }}>
      <div className="p-8 rounded-lg shadow-lg w-full max-w-sm" style={{ backgroundColor: "#ffffff" }}>
        <h2 className="text-2xl font-semibold text-center mb-4">Choose a new password</h2>
        
        <p className="text-gray-700 text-center mb-4">
          To secure your account, choose a strong password you haven’t used before and is at least 8 characters long.
          <a href="#" className="text-green-600 ml-1" style={{ color: "#0d8a2e" }}>What makes a strong password?</a>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="New password"
                ref={newPasswordRef}
                className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2"
                required
                minLength="8"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-green-600"
                style={{ color: "#0d8a2e" }}
              >
                {showPassword ? "hide" : "show"}
              </button>
            </div>
          </div>

          <div>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Retype new password"
                ref={confirmPasswordRef}
                className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2"
                required
                minLength="8"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 text-green-600"
                style={{ color: "#0d8a2e" }}
              >
                {showConfirmPassword ? "hide" : "show"}
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={requireSignIn}
              onChange={() => setRequireSignIn(!requireSignIn)}
              className="mr-2"
            />
            <label className="text-gray-700">Require all devices to sign in with new password</label>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-md font-semibold transition mt-4"
            style={{ backgroundColor: "#0d8a2e", color: "#ffffff" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
