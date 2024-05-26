import { signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { auth, provider } from "../firebase/config";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
export const Header = () => {
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth")) || false
  );
  function handelLogin() {
    signInWithPopup(auth, provider).then((results) => {
      console.log(results);
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
    });
  }
  function handelLogout() {
    signOut(auth);
    setIsAuth(false);
    localStorage.setItem("isAuth", false);
  }
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="WriteNode" />
        <span>WriteNode</span>
      </Link>
      <nav className="nav">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        {isAuth ? (
          <>
            <NavLink to="/create" className="link">
              Create
            </NavLink>
            <button onClick={handelLogout} className="auth">
              <i className="bi bi-box-arrow-right"></i> Logout
            </button>
          </>
        ) : (
          <button onClick={handelLogin} className="auth">
            <i className="bi bi-google"></i> Login
          </button>
        )}
      </nav>
    </header>
  );
};
