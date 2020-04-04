import React, { useState } from "react";
import GoogleLogin from "react-google-login";



export default function Login() {
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
        clientId="465234973180-0758f7i8l8t7kbr3nu48us2amsnqhqbq.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};
