import React, { useState } from "react";
import { Link } from "react-router-dom";
import { apiSubscribe } from "../services/subscribe";
import { toast } from "react-toastify";

const NewsletterSubscribe = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email"); // Extract email from the form
    const data = { email };

    try {
      const response = await apiSubscribe({email});
      if (response.status === 200 || response.status === 201) {
        setIsSubscribed(true);
        toast.success("Thank you for subscribing!");
        console.log("Subscribed with email:", email); // Use the extracted email here
      }
    } catch (error) {
      toast.error("Failed to subscribe. Please try again.");
      console.error(error);
    }

    form.reset(); // Reset the form fields
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Subscribe to our Newsletter
        </h2>
        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-lg text-green-600 font-medium">
              Thank you for subscribing!
            </p>
            <button
              className="mt-4 px-4 py-2 bg-gray-200 rounded-lg text-gray-800 hover:bg-gray-300"
              onClick={() => setIsSubscribed(false)}
            >
              Subscribe with another email
            </button>
          </div>
        )}
      </div>
      {/* Back to Home Link */}
      <div className="mt-4">
        <Link
          to="/home"
          className="text-green-600 hover:text-green-700 text-sm font-medium underline"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NewsletterSubscribe;
