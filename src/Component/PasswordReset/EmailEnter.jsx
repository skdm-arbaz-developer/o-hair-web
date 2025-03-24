import React, { useState } from "react";
import OTP from "./OTP";
import { Button, Form, Input, message } from "antd";
import { IoIosSend } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { post } from "../../services/userAuthAPI";

export default function EmailEnter() {
  const [otpSend, setOtpSend] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleOtpSend = async () => {
    try {
      setLoading(true);
      const value = form.getFieldsValue();

      const formData = new FormData();
      formData.append("email", value.email);

      const resp = await post("/forget-password", formData);

      if (resp) {
        message.success("Reset link sent successfully");
        setOtpSend(true);
      }
    } catch (error) {
      // message.error("Email id is not registred with our account");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="inputCard">
      <h4>Forgot Password</h4>
      <p>Enter your email and we'll send you link to reset password</p>
      <Form
        layout="vertical"
        onFinish={handleOtpSend}
        autoComplete="off"
        form={form}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
            },
            { type: "email" },
          ]}
        >
          <Input
            type="email"
            disabled={otpSend}
            prefix={<IoMdMail />}
            className="formInput"
            placeholder="Registred Email ID"
          />
        </Form.Item>

        <Form.Item>
          <Button
            htmlType="submit"
            className="addButtons bg-dark text-white"
            icon={<IoIosSend />}
            loading={loading}
          >
            Send OTP
          </Button>
        </Form.Item>
      </Form>
      <NavLink to="/account/sign-in">
        <FaAngleLeft /> Back to login page
      </NavLink>
    </div>
  );
}
