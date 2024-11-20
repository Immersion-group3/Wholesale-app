
import {Link} from 'react-router-dom';
import OurCommitment from './OurCommitment';




const LandingPage = () => {
  return (
    <div>
      {/* New Section */}
<section className="py-8 bg-green-100">
  <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-8">
    {/* Logo */}
    <div className="flex items-center">
      <img
        src="./src/assets/images/logo.png"
        alt="Logo"
        className="h-10 md:h-12"
      />
      <span className="text-lg font-bold text-green-700 ml-2">
        Les Potagers de Bafou
      </span>
    </div>

    {/* Button */}
    <div>
      <Link to="/vendorsignup"><button className="bg-[#FFFFB8] text-[#abcb41] py-2 px-4 rounded-md">
        Access the Platform
      </button></Link>
    </div>
  </div>
</section>
      {/* Header Section */}
      <header
  className="relative bg-cover bg-center h-screen flex flex-col justify-center items-center text-white"
  style={{ backgroundImage: "url('./src/assets/images/immerLand.webp')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

  {/* Content */}
  <div className="text-center px-4 relative z-10">
    <h1 className="text-4xl md:text-5xl font-bold">
      Your solution for fresh and local Cameroonian products
    </h1>
    <p className="mt-4 text-lg">
      Simplify your access to fresh products, just a few clicks away.
    </p>
    <div className="mt-6 flex gap-4 justify-center">
      <button className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded">
        Contact Us
      </button>
      <Link  to="/vendorsignup"><button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
        Access the Platform
      </button></Link>
    </div>
  </div>
</header>

      {/* Who Are We Section */}
      <section className="py-16 px-5 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div className="mt-[-20]">
            <h3 className="text-green-700 text-lg font-semibold mb-2">
              Les Potagers de Bafou
            </h3>
            <h2 className="text-3xl font-bold mb-4">Who Are We?</h2>
            <p className="text-lg leading-relaxed mb-4">
              It all begins on the highlands of Bafou with sustainable
              agriculture practices. Local farmers and our team of agronomists
              passionately grow flavorful vegetables.
            </p>
            <p className="text-lg leading-relaxed">
              By following good agricultural practices, our farmers respect
              their products. Freshly harvested, the vegetables are quickly
              transported to Douala, preserving their freshness and quality.
            </p>
            <button className="mt-6 bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded">
              Enjoy 100% Cameroonian products!
            </button>
          </div>

          {/* Image Section */}
          <div className="grid grid-rows-1 grid-cols-6 gap-4">
            {/* Top Row */}
            <div className="">
              <img
                src="./src/assets/images/redPepper.webp"
                alt="Red Pepper"
                className="rounded-lg shadow-md col-span-2 h-auto object-cover"
              />
              <img
                src="./src/assets/images/carrot.jpg"
                alt="Carrot"
                className="rounded-lg shadow-md h-auto object-cover"
              />
            </div>
            {/* Bottom Row */}
            <img
              src="./src/assets/images/greenbeans.jpg"
              alt="Green Beans"
              className="rounded-lg shadow-md h-auto object-cover"
            />
            <img
              src="./src/assets/images/pumkins.jpg"
              alt="Pumkins"
              className="rounded-lg shadow-md col-span-2 h-auto object-cover"
            />
            <img
              src="./src/assets/images/buttersq.jpg"
              alt="buttersq"
              className="rounded-lg shadow-md col-span-2 h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Offer Section */}
      <section className="py-16 px-5 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Our Offer</h2>
          <p className="text-lg">
            We have top products available throughout the year: seasonal and
            sustainable.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <img
            src="./src/assets/images/buttersq.jpg"
            alt="buttersq.jpg"
            className="rounded-lg shadow-md"
          />
          <img
            src="./src/assets/images/tomatoes.jpg"
            alt="tomatoes"
            className="rounded-lg shadow-md"
          />
          <img
            src="./src/assets/images/mint.jpg"
            alt="mint"
            className="rounded-lg shadow-md"
          />
          <img
            src="./src/assets/images/pumpkinN.jpg"
            alt="pumpkinN"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="text-center mt-10">
          <Link tO="/clientproductcatalog"><button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
            Discover Our Products
          </button></Link>
        </div>
      </section>
      <OurCommitment/>
    </div>
  );
};
export default LandingPage;


