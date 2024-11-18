import React from 'react';
import ourCommitmentsImg from '../assets/VendorImages/ourCommitmentsImg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faLeaf, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import LandingFooter from '../components/LandingFooter';


const OurCommitment = () => {
  return (
    <div>
      {/* Section Header */}
      <section className="py-12">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">Our Commitments</h1>
        <p className="text-center text-gray-600 w-[90%] md:w-[60%] mx-auto mb-10 text-lg">
          Discover our commitments to responsible, local, and sustainable agriculture, ensuring quality, traceability, and support for farmers.
        </p>

        {/* Image Section */}
        <div className="w-[90%] md:w-[60%] mx-auto mb-12">
          <img
            src={ourCommitmentsImg}
            alt="Our Commitments"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16">
          {/* Card 1 */}
          <div className="bg-white p-6 text-center hover:shadow-lg ">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-[#a6c73a] text-4xl mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Support for the Sector</h3>
            <p className="text-gray-600">
              Social Impact: Supporting over 80 Cameroonian farmers.
              <br />
              Products “100% made in Cameroon.”
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 text-center hover:shadow-lg">
            <FontAwesomeIcon
              icon={faLeaf}
              className="text-[#a6c73a] text-4xl mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Responsible Agriculture</h3>
            <p className="text-gray-600">
              Sustainable farming: eco-friendly farming methods for healthier food.
              <br />
              Production Diversification: new varieties like cherry tomatoes, arugula, strawberries, melons...
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 text-center hover:shadow-lg ">
            <FontAwesomeIcon
              icon={faSquareCheck}
              className="text-[#a6c73a] text-4xl mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Quality Assurance</h3>
            <p className="text-gray-600">
              Guarantee of traceability and quality for all products.
              <br />
              Ensuring customer satisfaction with every purchase.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <LandingFooter />
    </div>
  );
};

export default OurCommitment;
