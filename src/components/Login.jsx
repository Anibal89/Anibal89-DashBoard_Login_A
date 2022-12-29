import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logodemon from "../assets/img/demon.png";
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPasssword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.data.rol === "admin") {
            navigate("/dashboard");
          } else if (res.data.rol === "user") {
            navigate("/dashboard2");
          }
          s;
        });
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.message);
        
        
      }
    }
  };


  return (
    <section className="hero is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <form onSubmit={Auth} className="box">
                <p className="has-text-centered">{msg}</p>
                <h1 className="title is-3 has-text-centered">Iniciar sesión</h1>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={logodemon} width="112" height="28" alt="logo" />
                </div>
                <div className="field">
                  <label className="label">correo o usuario</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => SetEmail(e.target.value)}
                    />
                    
                  </div>
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
                <div className="field">
                  <label className="label">Contraseña</label>
                  <div className="control">
                    <input
                      type="password"
                      className="input"
                      placeholder="******"
                      value={password}
                      onChange={(e) => SetPasssword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <button onClick={ () => toast.error(msg)} type="submit" className="button is-info is-fullwidth">
                    Login
                  </button>
                  <br />
                  {/* <button type="button" className="button is-danger is-fullwidth" onClick={ () => toast('Unas Galleticas :v')}>Precioname</button> */}
                  <Toaster
                    position="bottom-right"
                    reverseOrder={false}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
