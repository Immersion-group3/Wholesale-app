import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterStatus = () => {
    const [selectedStatus, setSelectedStatus] = useState();

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };

    const routeTo = () => {
        if (selectedStatus === "vendor") {
            return "/vendorsignup";
        } else if (selectedStatus === "user") {
            return "/clientSignup";
        }
        ; // Default route if no option is selected
    };

    return (
        <section className="registerStatus pt-16 flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white w-[90%] max-w-md border p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl text-black font-bold mb-4">Create an account with us</h2>
                <p className="text-base text-gray-700 mb-6">
                    Join now to access our catalog of products and services.
                </p>

                <div className="mb-4">
                    <div className="flex items-start gap-4 border rounded-md p-4 hover:shadow-md">
                        <input
                            type="radio"
                            value="vendor"
                            id="vendorStat"
                            name="statusradio"
                            onChange={handleStatusChange}
                            className="mt-1 accent-[#0D8A2E]"
                        />
                        <label htmlFor="vendorStat" className="text-black text-lg">
                            I am a vendor
                            <p className="text-sm text-gray-600 mt-1">
                                I want to create ads to sell my products.
                            </p>
                        </label>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="flex items-start gap-4 border rounded-md p-4 hover:shadow-md">
                        <input
                            type="radio"
                            value="user"
                            id="userStat"
                            name="statusradio"
                            onChange={handleStatusChange}
                            className="mt-1 accent-[#0D8A2E]"
                        />
                        <label htmlFor="userStat" className="text-black text-lg">
                            I am a user/viewer
                            <p className="text-sm text-gray-600 mt-1">
                                I want to view ads and make the right purchase.
                            </p>
                        </label>
                    </div>
                </div>

                <div className="text-center">
                    <Link to={routeTo()}>
                        <button
                            disabled={!selectedStatus}
                            className={`h-12 w-full font-bold border rounded-md bg-[#0D8A2E] text-white hover:bg-green-700 transition ${
                                !selectedStatus ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        >
                            Continue
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default RegisterStatus;
