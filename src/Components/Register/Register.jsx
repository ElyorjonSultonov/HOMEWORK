import React, { useState } from "react";
import "./Register.css";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai"; // open
import { Password } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate=useNavigate()
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [text, setText] = useState("");
  console.log(name);
  console.log(email);
  console.log(password);

  const [show, setShow] = useState();
  const toggle = () => {
    setShow(!show);
  };

  const regBtn = (e) => {
    e.preventDefault();
    if (!name) {
      setText("Ism kiriting");
    } else if (!email) {
      setText("email kiriting");
    } else if (!password) {
      setText("Parol kiriting");
    } else {
      setText("");
      const newUser = {
        name,
        email,
        password,
      };
    }
  };

  return (
    <div className="register">
      <form action="">
        <h1>Ro’yxatdan o’tish</h1>
        <div className="emailFlex">
          <h3>Ismingiz</h3>
          <div className="system">
            <span>Akkauntingiz bormi?</span>
            <h4 onClick={()=>navigate("Login")}>Tizimga kirish</h4>
          </div>
        </div>
        <input
          onChange={(e) => setName(e.target.value)}
          className="mb-30"
          type="text"
          placeholder="ismingiz"
        />
        <div>
          <h3>Elektron pochta</h3>
        </div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="mb-30"
          type="email"
          placeholder="emailingiz"
        />
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
        <input
          onChange={(e) => setPassword(e.target.value)}
          type={show ? "text" : "password"}
          placeholder="parolingiz"
        />
        <div className="formBtn">
          <div>
            <ul>
              <li>Bitta kichik harf</li>
              <li>Bitta bosh harf</li>
              <li>Bitta raqam</li>
            </ul>
            <ul>
              <li>Bitta maxsus belgi</li>
              <li>Kamida 8 ta belgi</li>
            </ul>
          </div>
          <button onClick={regBtn}>Bepul ro'yxatdan o'ting</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
