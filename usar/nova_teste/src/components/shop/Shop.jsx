import React, { useState } from "react";
import GoogleLogin from "react-google-login";



export default function Shop() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  const responseGoogle = response => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
  };
  return (
    <div className="Login">
      {/* <h1 className="login">Login with Google</h1> */}

      <h2 className="bemvindo">Welcome:{name} </h2>

      <h2 className="email"> Email: {email} </h2>

      <img className="imagem" src={url} alt={name} />

      <GoogleLogin
        className="dark"
        clientId="465234973180-endijv8herlk2sgucru2r0sis78t8auu.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};
