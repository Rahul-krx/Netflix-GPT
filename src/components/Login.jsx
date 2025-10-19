import React, { useRef, useState, } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validatedata";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errormessage, seterrorMessage] = useState(null);


  const email = useRef(null);
  const password = useRef(null);


  const handleBtnClick = () =>{
    
    console.log(email.current.value);
    console.log(password.current.value);
    
   const message = checkValidData( email.current.value, password.current.value);
   seterrorMessage(message);

  }
  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/024bfb98-9e9d-441d-9c5f-d2c798d8e42f/web/IN-en-20251013-TRIFECTA-perspective_b6324826-0535-47c5-be5f-4f50e9663eaf_large.jpg"
          alt=""
        />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="w-4/12 bg-black text-white absolute p-12 my-36  mx-auto right-0 left-0 rounded-lg opacity-90">
        <h2 className="text-3xl font-bold my-2 ">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h2>
        {!isSignInForm && (
          <input
        
            type="text"
            placeholder="Full Name" required
            className="w-full p-3 my-4 bg-gray-900 border-1 border-gray-500 rounded-md"
          />
        )}
        <input
         ref={email}
          type="text"
          placeholder="Email/Phone no."
          className="w-full p-3 my-4 bg-gray-900 border-1 border-gray-500 rounded-md"
        />
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-3 my-4 bg-gray-900 border-1 border-gray-500 rounded-md"
        />
        <p className="text-red-600 py-2">{errormessage}</p>
        <button
          className="w-full bg-red-600 rounded-lg p-3 my-6 font-bold cursor-pointer"
          onClick={handleBtnClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? (
            <span style={{ color: "rgba(255,255,255,0.75)" }}>
              New to Netflix?
              <span
                style={{ color: "rgba(255,255,255,0.95)", fontWeight: 600 }}
              >
                {" "}
                Sign up now.
              </span>
            </span>
          ) : (
            <span style={{ color: "rgba(255,255,255,0.75)" }}>
              Already registered?
              <span
                style={{ color: "rgba(255,255,255,0.95)", fontWeight: 600 }}
              >
                {" "}
                Sign In now.
              </span>
            </span>
          )}
          {/* {" "}
          <span className="opacity-75">New to Netflix?</span>{" "}
          <span className="cursor-pointer font-semibold">Sign up now.</span> */}
        </p>
      </form>
    </div>
  );
};

export default Login;
