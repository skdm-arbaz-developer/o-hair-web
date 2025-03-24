import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { IoSend } from "react-icons/io5";
import { FaAngleLeft, FaLock } from "react-icons/fa";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { post } from "../../services/userAuthAPI";

export default function PasswordInput() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const handleResetPassword = async (value) => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("token", token);
      formData.append("password", value.password);
      formData.append("email", email);

      const resp = await post("/reset-password", formData);

      if (resp) {
        setLoading(false);
        message.success("Password Reset Successfully");
        navigate("/account/login");
      }
    } catch (error) {
      console.error(error);
      message.error("Unable to reset password please try again");
    }finally{
      setLoading(false);
    }
  };

  return (
    <div className="inputCard">
      <h4>Reset Password</h4>
      <p>Enter your password you want to reset</p>
      <Form layout="vertical" onFinish={handleResetPassword} autoComplete="off">
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.Password
            prefix={<FaLock />}
            className="formInput"
            placeholder="Enter Password"
          />
        </Form.Item>
        <Form.Item
          name="confirm_password"
          rules={[
            {
              required: true,
              message: "Please enter confirm password",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<FaLock />}
            className="formInput"
            placeholder="Confirm Password"
          />
        </Form.Item>
        <Form.Item>
          <Button
            loading={loading}
            htmlType="submit"
            className="addButtons bg-dark text-white"
            icon={<IoSend />}
          >
            Reset Passwrod
          </Button>
        </Form.Item>
      </Form>
      <NavLink to="/account/sign-in">
        <FaAngleLeft /> Back to login page
      </NavLink>
    </div>
  );
}
