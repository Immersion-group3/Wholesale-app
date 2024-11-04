import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"
import googleIcon from "../assets/VendorImages/googleIcon.png"
import appleIcon from "../assets/VendorImages/appleIcon.png"
import fbIcon from "../assets/VendorImages/fbIcon.png"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { faEye,faEyeSlash } from "@fortawesome/free-solid-svg-icons"
const VendorLogin = () => {
  const navigate = useNavigate();
  //state for password visibility
  const [showPass, setShowPass] = useState(false);

  //onClick for icon to toggle visibilty
  const toggleVisibilty = () => setShowPass(!showPass)
  const handleBack=()=>{
    navigate("/");

  }
  return (
    <div>
      <section className="h-[100vh] bg-[#c5e0b5] py-[5%] px-[15%]">
        <div className=" h-[100%] bg-white w-[100%] rounded-3xl flex">
          <div className="w-[30%] bg-[#0d8a2e] rounded-3xl"></div>
          <div className="w-[75%] bg-[white] rounded-3xl z-1 flex flex-col pt-[3%] pl-[5%] pr-[5%]">
            <div className="h-[10%] mb-[0.5em] flex">
              <FontAwesomeIcon icon={faArrowLeftLong} onClick={handleBack} className="hover:cursor-pointer text-[1.5em] mt-[0.5em] mr-[5%] " />
              <h1 className="text-[1.8em] font-semibold ">Log Into Your Account</h1>
            </div>
            <p className="text-center mb-[0.5em]">Log In with </p>
              <div className="h-[10%] flex justify-center items-center gap-x-[5%] mb-[5%]">
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
              <form action="" className="h-[100%]">
                <div className="h-auto w-[100%] flex flex-col">
                <div className="h-[100%] w-[80%] ml-auto mr-auto pb-[1em] pl-[0.5em]">
                    <label htmlFor="email">Email<br /></label>
                    <input type="email" placeholder="johndoe@gmail.com" className="h-[80%] border-b-2 w-[90%]" />
                  </div>

                  <div className="h-[100%] w-[80%] ml-auto mr-auto pb-[1em] pl-[0.5em]">
                    <label htmlFor="password">Password<br /></label>
                    <input type={showPass ? "text" : "password"} placeholder="*******" className="h-[80%] border-b-2 w-[90%]" />
                    <div className="mt-[-1.4em] ml-[85%]">
                        {showPass ? (<FontAwesomeIcon icon={faEye} onClick={toggleVisibilty} className="text-[#0d8a2e] cursor-pointer " />) : <FontAwesomeIcon icon={faEyeSlash} onClick={toggleVisibilty} className="text-[#0d8a2e] cursor-pointer" />}
                      </div>
                      <Link to="/forgotpassword" className="text-[#0d8a2e]">Forgot Password?</Link>
                      <button className="mt-[0.8em] h-[20%] w-[100%] border bg-[#0d8a2e] text-center text-[white] font-bold py-[0.5em]">Log In</button>
                  <p className="mt-[0.5em] mb-[0.5em] text-center">Don't have an account? <Link to="/vendorsignup" className="text-[#0d8a2e] font-semibold">Sign Up</Link></p>
                  </div>
                </div>
              </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VendorLogin