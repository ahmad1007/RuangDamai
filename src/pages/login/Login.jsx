import React, { useState } from "react";
import "./Login.css";
import log2 from "./Log2.png";
import Navbar from "../../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const LoginPage = () => {
  const [signUpMode, setSignUpMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showSignUpPassword, setShowSignUpPassword] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await fetch("http://localhost:3000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      if (response.status === 201) {
        alert("Pendaftaran berhasil");
        setSignUpMode(false);
      } else {
        alert(data.message || "Gagal untuk mendaftar");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Gagal untuk mendaftar. Silakan coba lagi.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.status === 200) {
        localStorage.setItem("isAuthenticated", "true");
        window.location.href = "/home";
      } else {
        alert(data.message || "Gagal untuk login");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Gagal untuk login. Silakan coba lagi.");
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    const response = await fetch(
      "http://localhost:3000/api/users/oauth/google",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: credentialResponse.credential }),
      }
    );
    const data = await response.json();
    if (response.status === 200) {
      alert("Login Google berhasil");
      localStorage.setItem("isAuthenticated", "true");
      window.location.href = "/home";
    } else {
      alert(data.message || "Gagal login dengan Google");
    }
  };

  const handleGoogleFailure = (error) => {
    console.error("Google Login Failed:", error);
    alert("Login dengan Google gagal. Silakan coba lagi.");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleSignUpPasswordVisibility = () => {
    setShowSignUpPassword(!showSignUpPassword);
  };

  const inputContainerStyle = {
    position: "relative",
    marginTop: "5px",
    marginBottom: "5px",
  };

  const inputStyle = {
    border: "1px solid #ccc",
    padding: "10px 40px 10px 30px",
    borderRadius: "5px",
    width: "100%",
    boxSizing: "border-box",
  };

  const iconStyle = {
    position: "absolute",
    color: "#000",
    left: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "16px",
  };

  return (
    <>
      <Navbar />
      <div className="body">
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
          <div className={`container ${signUpMode ? "sign-up-mode" : ""}`}>
            <div className="signin-sigup">
              <form className="sign-in-form" onSubmit={handleLogin}>
                <h2 className="title" style={{ color: "blue" }}>
                  Sign in
                </h2>
                <div style={inputContainerStyle}>
                  <FontAwesomeIcon icon={faUser} style={iconStyle} />
                  <input
                    style={inputStyle}
                    type="text"
                    placeholder="Nama Pengguna"
                    name="username"
                    required
                  />
                </div>

                <div style={inputContainerStyle}>
                  <FontAwesomeIcon icon={faLock} style={iconStyle} />
                  <input
                    style={{ ...inputStyle, paddingRight: "40px" }}
                    type={showPassword ? "text" : "password"}
                    placeholder="Kata Sandi"
                    name="password"
                    required
                  />
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    onClick={togglePasswordVisibility}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                      fontSize: "16px",
                    }}
                  />
                </div>

                <button type="submit" className="btn">
                  Login
                </button>
                <p className="social-text">
                  <button
                    type="button"
                    className="link-btn"
                    onClick={() => setSignUpMode(true)}
                  >
                    Sign up
                  </button>
                </p>
                <div className="social-media">
                  <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onFailure={handleGoogleFailure}
                  />
                </div>
              </form>

              <form className="sign-up-form" onSubmit={handleSignUp}>
                <div
                  style={{ position: "relative", display: "flex" }}
                  className="switch-form , gap-2"
                >
                  <p>Sudah memiliki akun?</p>
                  <button
                    type="button"
                    style={{ color: "blue" }}
                    className="link-btn"
                    onClick={() => setSignUpMode(false)}
                  >
                    Login
                  </button>
                </div>
                <h2 style={{ color: "blue" }} className="title">
                  Sign up
                </h2>
                <div style={inputContainerStyle}>
                  <FontAwesomeIcon icon={faEnvelope} style={iconStyle} />
                  <input
                    style={inputStyle}
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>

                <div style={inputContainerStyle}>
                  <FontAwesomeIcon icon={faUser} style={iconStyle} />
                  <input
                    style={inputStyle}
                    type="text"
                    placeholder="Nama Pengguna"
                    name="username"
                    required
                  />
                </div>

                <div style={inputContainerStyle}>
                  <FontAwesomeIcon icon={faLock} style={iconStyle} />
                  <input
                    style={{ ...inputStyle, paddingRight: "40px" }}
                    type={showSignUpPassword ? "text" : "password"}
                    placeholder="Kata Sandi"
                    name="password"
                    required
                  />
                  <FontAwesomeIcon
                    icon={showSignUpPassword ? faEyeSlash : faEye}
                    onClick={toggleSignUpPasswordVisibility}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                      fontSize: "16px",
                    }}
                  />
                </div>

                <button type="submit" className="btn">
                  Register
                </button>
                <p className="social-text">Daftar dengan</p>
                <div className="social-media">
                  <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onFailure={handleGoogleFailure}
                  />
                </div>
              </form>
            </div>
            <div className="panel-container">
              <div className="panel left-panel">
                <div className="content">
                  <h3>Selamat datang di situs web kami</h3>
                  <p>Kami sangat menyambut kedatangan Anda semua</p>
                </div>
                <img src={log2} alt="" className="image" />
              </div>

              <div className="panel right-panel">
                <div className="content">
                  <h3>Selamat datang di situs web kami</h3>
                  <p>Kami sangat menyambut kedatangan Anda semua</p>
                </div>
                <img src={log2} alt="" className="image" />
              </div>
            </div>
          </div>
        </GoogleOAuthProvider>
      </div>
    </>
  );
};

export default LoginPage;
