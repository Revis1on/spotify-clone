import React from "react";
import { loginUrl } from "../../SpotifyApi/spotify";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <img
        className="logo__spotify"
        src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
        alt="Spotify Logo"
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
