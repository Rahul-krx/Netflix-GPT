import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch(() => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out

        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-full bg-gradient-to-b from-black px-12 py-2 z-10 flex justify-between">
      <img
        className="w-48 "
        src={LOGO}
        alt="logo"
      />

      {user && (
        <div>
          {" "}
          <div className="flex p-2 ">
            <img
              className="w-12 h-12 mt-1 rounded-md"
              src="/ChatGPT Image Oct 23, 2025, 02_06_14 PM.png"
              alt="profile-logo"
            />
            <button
              className="text-white font-bold m-2 bg-red-500 p-2 border-black rounded-md cursor-pointer"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
