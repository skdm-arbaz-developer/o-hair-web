import React, { useEffect, useState } from "react";
import "../../Css/account.css";
import login from "../../Images/Untitled design (5).png";
import { Breadcrumb, Button, Checkbox, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { LuUser } from "react-icons/lu";
import Google from "../../Images/google-removebg-preview.png";
import { useDispatch, useSelector } from "react-redux";
import { setUserToken } from "../../features/authSlice";
import {
  setProfile,
  storeToken,
  setdeliveryaddress,
  getToken,
} from "../../services/localStorageServices";
import GoogleLogin from "react-google-login";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import Password from "antd/es/input/Password";
import { post } from "../../services/userAuthAPI";
export default function SignIn() {
  // google login

  const clientId =
    "413735203093-tt019nmdfqqkff5vf69lhskudqtph6m0.apps.googleusercontent.com";

  // const onSuccess = async (res) => {
  //   try {
  //     const formDataToSend = new FormData();
  //     // Append data to FormData object
  //     formDataToSend.append("User_Name", res.profileObj.name);
  //     formDataToSend.append("User_Email", res.profileObj.email);
  //     formDataToSend.append("action", "add");
  //     const response = await post(
  //       "https://ohair.lifestylefitnes.com/api/Googlelogin.php?",
  //       formDataToSend
  //     );
  //     if (response.data) {
  //       dispatch(setUserToken({ token: response.data.token }));
  //       storeToken(response.data.token);
  //       setProfile(response.data.profile);
  //       navigate("/");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  //   console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
  // };

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    const payload = {
      email: values.username,
      password: values.password,
    };
    try {
      const response = await post("/login", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response) {
        message.success("Login successful");
        dispatch(setUserToken({ token: response.token }));
        storeToken(response.token, values.remember);
        setProfile(response.user, values.remember);
        navigate("/");
      }
    } catch (error) {
      // Handle login error, e.g., show an error message
      console.error("Login failed:", error);
      message.error(error.message);
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
    <div>
      <div className="row">
        <div className="col-md-6 image-vector-main-con">
          <img className="widthimage" src={login} alt="login"></img>
        </div>
        <div className="col-md-6 px-5 d-flex align-items-center">
          <div className="account-card">
            <div className="title">
              <h1>Sign In</h1>
              <Breadcrumb
                items={[
                  {
                    title: <Link to="/">Home</Link>,
                  },
                  {
                    title: "Sign In",
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
                <Form.Item
                  name="username"
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
                    prefix={<LuUser className="site-form-item-icon" />}
                    placeholder="Email"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input.Password
                    prefix={<LuUser className="site-form-item-icon" />}
                    placeholder="Password"
                    iconRender={(visible) =>
                      visible ? <IoEyeOutline /> : <FaRegEyeSlash />
                    }
                  />
                </Form.Item>
                <Form.Item
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {/* <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item> */}

                  <Link
                    className="login-form-forgot"
                    to="/account/forgot-password"
                  >
                    Forgot password
                  </Link>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    loading={loading}
                  >
                    Log in
                  </Button>
                  <br />
                  Or <Link to="/account/sign-up">register now!</Link>
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
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
