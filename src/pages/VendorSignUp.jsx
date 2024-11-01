import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeftLong, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import googleIcon from "../assets/VendorImages/googleIcon.png"
import appleIcon from "../assets/VendorImages/appleIcon.png"
import fbIcon from "../assets/VendorImages/fbIcon.png"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import PhoneInput from "react-phone-input-2"

const VendorSignUp = () => {
  //state for password visibility
  const [showPass, setShowPass] = useState(false);

  //onClick for icon to toggle visibilty
  const toggleVisibilty = () => setShowPass(!showPass)

  //state for phoneNumber
    const [phoneNumber, setPhoneNumber] = useState("");

    // Handle phone number change
    // const handleChange = (e) => {
    //   const formattedNumber = e.target.value.replace(/\D/g, ""); // Strip non-numeric characters
    //   setPhoneNumber(formattedNumber);
    // };


    return (

      <div>
        <section className="h-[100vh] bg-[#c5e0b5] py-[3%] px-[15%]">
          <div className=" h-[100%] bg-white w-[100%] rounded-3xl flex">
            <div className="w-[30%] bg-[#0d8a2e] rounded-3xl"></div>
            <div className="w-[75%] bg-[white] rounded-3xl z-1 flex flex-col pt-[3%] pl-[5%] pr-[5%]">
              <div className="h-[10%] mb-[0.5em] flex">
                <FontAwesomeIcon icon={faArrowLeftLong} className="text-[1.5em] mt-[0.5em] mr-[5%] " />
                <h1 className="text-[1.8em] font-semibold ">Create Account</h1></div>
              <p className="text-center mb-[0.5em]">Sign Up with </p>
              <div className="h-[100%] flex justify-center items-center gap-x-[5%] mb-[5%]">
                <button className="w-[100%] h-[100%] border flex pt-[0.3em]">
                  <img src={googleIcon} className="h-[1.5em] ml-[10%] mr-[5%]" alt="Google" />
                  <p>Google</p>
                </button>

                <button className="w-[100%] h-[100%] border flex pt-[0.3em]">
                  <img src={appleIcon} className="h-[1.5em] ml-[10%] mr-[5%]" alt="Apple" />
                  <p>Apple</p>
                </button>

                <button className="w-[100%] h-[100%] border flex pt-[0.3em]">
                  <img src={fbIcon} className="h-[1.5em] ml-[10%] mr-[5%]" alt="Facebook" />
                  <p>Facebook</p>
                </button>
              </div>
              <hr />
              <h2 className=" font-semibold bg-[white] text-center mt-[-0.8em] w-[10%] h-[5%] ml-auto mr-auto mb-[0.5em]">OR</h2>
              <form action="" className="mt-0 h-[100%]">
                <div className="grid grid-rows-3 grid-cols-2 gap-x-[15%] h-auto px-[5%]">

                  <div className="h-[100%] pb-[1em] pl-[0.5em] ">
                    <label htmlFor="">Business Name</label>
                    <input type="text"
                      id="business" placeholder="BestLife Ent." className="h-[80%] border-b-2" />
                  </div>

                  <div className="h-[100%] pb-[1em] pl-[0.5em]">
                    
                    <PhoneInput 
                      country={"cm"}
                      value={phoneNumber}
                      onChange={(phone)=>setPhoneNumber(phone)}
                      inputProps={{
                        
                        required:true,
                        autoFocus:true
                      }}
                      containerClass="h-[80%] "
                      inputClass="border-b-2 h-full focus:outline-none"
                      id="tel"
                      />
                  </div>

                  <div className="h-[100%] pb-[1em] pl-[0.5em]">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text"
                      id="firstname"
                      placeholder="John" className="h-[80%] border-b-2" />
                  </div>
                  <div className="h-[100%] pb-[1em] pl-[0.5em]">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" placeholder="Doe" className="h-[80%] border-b-2 " />
                  </div>
                  <div className="h-[100%] pb-[1em] pl-[0.5em] ">
                    <label htmlFor="email">Email<br /></label>
                    <input type="email" placeholder="johndoe@gmail.com" className="h-[80%] border-b-2" />
                  </div>
                  <div className="h-[100%] pb-[1em] pl-[0.5em]">
                    <label htmlFor="">Password</label>
                    <div className="flex">
                      <input type={showPass ? "text" : "password"} placeholder="*******" className="h-[80%] border-b-2 " />
                      <div className="ml-[-1em]">
                        {showPass ? (<FontAwesomeIcon icon={faEye} onClick={toggleVisibilty} className="text-[#0d8a2e] cursor-pointer" />) : <FontAwesomeIcon icon={faEyeSlash} onClick={toggleVisibilty} className="text-[#0d8a2e] cursor-pointer" />}
                      </div>
                    </div>
                  </div>
                  <div></div>


                </div>
                <div className="flex flex-col">
                  <div className="flex">
                    <input type="checkbox" id="checkbox" className="accent-[#0d8a2e] mr-[1em] mt-[0.5em]" />
                    <label htmlFor="checkbox" className="text-[#616161] mt-[0.5em] ">I agree to the <Link to="" className="underline decoration-dashed underline-offset-4" >Terms and Conditions</Link></label>
                  </div>
                  <button className="mt-[0.8em] h-[20%] w-[100%] border bg-[#0d8a2e] text-center text-[white] font-bold py-[0.5em]">Sign Up</button>
                  <p className="mt-[0.5em] mb-[0.5em] text-center">Already have an account? <Link to="/vendorlogin" className="text-[#0d8a2e] font-semibold">Log in</Link></p>
                </div>

              </form>
            </div>

          </div>



        </section>
      </div>
    )
  }

  export default VendorSignUp

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
