import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../Css/account.css";
import SignUpImg from "../../Images/Untitled design (5).png";
import {
  Breadcrumb,
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  message,
  Radio,
} from "antd";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { BiLockOpen } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserToken } from "../../features/authSlice";
import { getToken, setProfile, storeToken } from "../../services/localStorageServices";
import { LuUser } from "react-icons/lu";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import moment from "moment";
import { post } from "../../services/userAuthAPI";

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    setProfile(values);

    const formattedDateOfBirth = values.date_of_birth
      ? moment(values.date_of_birth).format("YYYY-MM-DD")
      : "";

    const payload = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      phone_number: values.phone_number,
      date_of_birth: formattedDateOfBirth,
      role: "user",
      gender: values.gender,
      password: values.password,
      password_confirmation: values.password_confirmation,
    };

    try {
      const response = await post("/register", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Check if response.data exists
      if (response) {
        dispatch(setUserToken({ token: response.token }));
        storeToken(response.token, values.remember);
        setProfile(response.user, values.remember);
        navigate("/");
      }
    } catch (error) {
      console.error("Signup Error", error);

      // Handle invalid JSON responses
      if (error.response?.data) {
        try {
          const errorData = JSON.stringify(error.response.data);
          message.error(errorData);
        } catch (jsonError) {
          message.error("Invalid response format from server");
        }
      } else {
        message.error(error.message || "An error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const { access_token } = getToken();

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(setUserToken({ token: access_token }));
  }, [access_token, dispatch]);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);


  return (
    <div className="row">
      <div className="col-md-6 px-5 d-flex align-items-center">
        <div className="account-card signUp">
          <div className="title">
            <h1>Sign Up</h1>
            <Breadcrumb
              items={[
                {
                  title: <Link to="/">Home</Link>,
                },
                {
                  title: "Sign Up",
                },
              ]}
            />
          </div>
          <div className="account-form">
            <Form
              name="normal_login"
              className="login-form"
              layout="vertical"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <div className="row">
                <div className="col-md-6">
                  <Form.Item
                    name="first_name"
                    label="First Name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your name!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<LuUser className="site-form-item-icon" />}
                      placeholder="First Name"
                    />
                  </Form.Item>
                </div>
                <div className="col-md-6">
                  <Form.Item
                    name="last_name"
                    label="Last Name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your name!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<LuUser className="site-form-item-icon" />}
                      placeholder="Last Name"
                    />
                  </Form.Item>
                </div>
                <div className="col-md-6">
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                      {
                        type: "email",
                        message: "Please enter a valid email!",
                      },
                    ]}
                  >
                    <Input
                      prefix={
                        <MdOutlineEmail className="site-form-item-icon" />
                      }
                      placeholder="Email"
                    />
                  </Form.Item>
                </div>
                <div className="col-md-6">
                  <Form.Item
                    name="phone_number"
                    label="Phone"
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone no.!",
                      },
                      {
                        min: 10,
                        max: 10,
                        message: "Please enter a valid Phone!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<BsTelephone className="site-form-item-icon" />}
                      placeholder="Phone No."
                    />
                  </Form.Item>
                </div>
                <div className="col-md-6">
                  <div className="register-gender-main-con">
                    <Form.Item label="Gender" className="gender" name="gender">
                      <Radio.Group>
                        <Radio value="Male"> Male </Radio>
                        <Radio value="Female"> Female </Radio>
                      </Radio.Group>
                    </Form.Item>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="register-dob-main-con">
                    <Form.Item label="DOB" name="date_of_birth">
                      <DatePicker style={{ width: "100%" }} />
                    </Form.Item>
                  </div>
                </div>
                <div className="col-md-6">
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      prefix={<BiLockOpen className="site-form-item-icon" />}
                      placeholder="Password"
                      iconRender={(visible) =>
                        visible ? <IoEyeOutline /> : <FaRegEyeSlash />
                      }
                    />
                  </Form.Item>
                </div>
                <div className="col-md-6">
                  <Form.Item
                    label="Confirm Password"
                    name="password_confirmation"
                    dependencies={["password"]}
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your password!",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error("The passwords do not match!")
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password
                      prefix={<BiLockOpen className="site-form-item-icon" />}
                      placeholder="Confirm Password"
                    />
                  </Form.Item>
                </div>
                <div className="col-12 d-flex justify-content-start">
                  <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                </div>
                <Form.Item>
                  <Button
                    htmlType="submit"
                    className="login-form-button"
                    loading={loading}
                  >
                    {loading ? "Signing up..." : "Sign Up"}
                  </Button>
                  <br></br>
                  Or <Link to="/account/sign-in">login now!</Link>
                </Form.Item>

                {/* <Form.Item>
                  <div className="Google-Login-btn-con">
                    <GoogleLogin
                      clientId={clientId}
                      buttonText="Sign in with Google"
                      onSuccess={onSuccess}
                      onFailure={onFailure}
                      cookiePolicy={'single_host_origin'}
                    />
                  </div>
                </Form.Item> */}
              </div>
            </Form>
          </div>
        </div>
      </div>
      <div className="col-md-6 image-vector-main-con">
        <img className="widthimage" src={SignUpImg} alt="login"></img>
      </div>
    </div>
  );
}
