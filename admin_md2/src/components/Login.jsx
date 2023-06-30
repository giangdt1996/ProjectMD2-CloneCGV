import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Login() {
  const [admin, setAdmin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleInputAd = (e) => {
    setAdmin(e.target.value);
  };
  const handleInputPass = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `http://localhost:8000/admin?admin=${admin}&?password=${password}`
    );
    console.log(response.data);
    if (response.data.length > 0) {
      toast.success("Chào mừng ADMIN trở lại!", { icon: "📢" });
      localStorage.setItem("adminLogin", true);
      navigate("/admin");
    } else {
      // Sai email hoặc password
      toast.error("Tên đăng nhập hoặc Mật khẩu sai!", { icon: "⛔" });
    }
  };

  return (
    <>
      <h1>LOGIN ADMIN</h1>
      <Form className="mb-3 formLogin" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Admintrastor</Form.Label>
          <Form.Control
            className="input"
            type="text"
            value={admin}
            onChange={handleInputAd}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="input"
            type="password"
            value={password}
            onChange={handleInputPass}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Đăng Nhập
        </Button>
      </Form>
    </>
  );
}

export default Login;
