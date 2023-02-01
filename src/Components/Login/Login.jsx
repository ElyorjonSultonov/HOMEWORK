import React, { useState } from "react";
import "./Login.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
// import { AiOutlineEye } from "react-icons/ai"; // open

function Login() {
  const [show, setShow] = useState();
  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className="login">
      <form action="">
        <h1>Profilga kirish</h1>
        <div className="emailFlex">
          <h3>Elektron pochta</h3>
        </div>
        <input className="mb-30" type="email" placeholder="emailingiz" />
        <div className="hideshow">
          <h3>parolingiz</h3>
          <div>
            {show ? (
              <span onClick={toggle}>
                <AiOutlineEyeInvisible className="showIcon" />
                Hide
              </span>
            ) : (
              <span onClick={toggle}>
                <AiOutlineEye className="showIcon" />
                Show
              </span>
            )}
          </div>
        </div>
        <input type={show ? "text" : "password"} placeholder="parolingiz" />
        <div className="system">
          <span>Akkauntingiz yo’qmi? </span>
          <h4> Ro'yxatdan o'tish</h4>
        </div>
        <div className="formBtn">
          <button>Bepul ro'yxatdan o'ting</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
