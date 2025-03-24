import React, { useState } from "react";
import "../../Css/Profile/ProfileUpdate.css";
import { Button, DatePicker, Form, Input, Radio, Upload, message } from "antd";
import { GoPlus } from "react-icons/go";
import { LuUser } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import {
  getProfile,
  getToken,
  setProfile,
} from "../../services/localStorageServices";
import { useEffect } from "react";
import dayjs from "dayjs";
import { post } from "../../services/userAuthAPI";
import moment from "moment";

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e.slice(-1); // Keep only the last uploaded file
  }
  return e?.fileList?.slice(-1); // Ensure only one file remains
};

const ProfileUpdate = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const { profile } = getProfile();
  const { access_token } = getToken();

  const handleChange = ({ fileList }: any) => {
    setFileList(fileList.slice(-1)); // Limit to only one file
  };

  useEffect(() => {
    form.setFieldsValue({
      ...profile,
      date_of_birth: dayjs(profile?.date_of_birth),
    });
  }, []);

  const handleUpdate = async (value) => {
    const formData = new FormData();

    Object.keys(value).forEach((key) => {
      formData.append(
        key,
        key === "date_of_birth"
          ? moment(new Date(value[key])).format("YYYY-MM-DD")
          : value[key]
      );
    });

    formData.append("_method", "PUT");

    const header = {
      Authorization: `Bearer ${access_token}`,
    };
    const resp = post(`user-update/${value.id}`, formData, header);

    if (resp) {
      message.success("Updates succesffully");

      Object.keys(value).forEach((key) => {
        profile[key] = value[key];
      });

      setProfile(profile);
    }
  };

  return (
    <div className="profile-update-main-con">
      <div className="container">
        <div className="profile-update-main-details-con">
          <div className="profile-update-tabs-head-con">
            <h2>Profile Update</h2>
          </div>

          <div className="profile-update-tabs-details-main-con">
            <div className="profile-update-tabs-main-con">
              <Form
                form={form}
                name="normal_login"
                className="login-form"
                layout="vertical"
                initialValues={{
                  remember: true,
                }}
                onFinish={handleUpdate}
              >
                <div className="row">
                  <div className="col-12">
                    <div className="profile-update-tabs-details-inputs-con">
                      <Form.Item
                        label="Upload"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                      >
                        <Upload
                          action="/upload.do"
                          listType="picture-card"
                          fileList={fileList}
                          maxCount={1} // Restrict to only one image
                          onChange={handleChange}
                        >
                          {fileList.length < 1 && (
                            <button
                              style={{ border: 0, background: "none" }}
                              type="button"
                            >
                              <GoPlus />
                              <div style={{ marginTop: 8 }}>Upload</div>
                            </button>
                          )}
                        </Upload>
                      </Form.Item>
                    </div>
                  </div>
                  <div className="col-6 d-none">
                    <div className="profile-update-tabs-details-inputs-con">
                      <Form.Item name="id">
                        <Input
                          prefix={<LuUser className="site-form-item-icon" />}
                          placeholder="Full Name"
                        />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="profile-update-tabs-details-inputs-con">
                      <Form.Item
                        name="first_name"
                        label="First name"
                        rules={[
                          {
                            required: true,
                            message: "Please input your name!",
                          },
                        ]}
                      >
                        <Input
                          prefix={<LuUser className="site-form-item-icon" />}
                          placeholder="Full Name"
                        />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="profile-update-tabs-details-inputs-con">
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
                  </div>
                  <div className="col-6">
                    <div className="profile-update-tabs-details-inputs-con">
                      <Form.Item
                        name="email"
                        label="Email"
                        // rules={[
                        //     {
                        //         required: true,
                        //         message: "Please input your email!",
                        //     },
                        //     {
                        //         type: "email",
                        //         message: "Please enter a valid email!",
                        //     },
                        // ]}
                      >
                        <Input
                          prefix={
                            <MdOutlineEmail className="site-form-item-icon" />
                          }
                          placeholder="Email"
                        />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="profile-update-tabs-details-inputs-con">
                      <Form.Item
                        name="phone_number"
                        label="Phone"
                        // rules={[
                        //     {
                        //         required: true,
                        //         message: "Please input your phone no.!",
                        //     },
                        //     {
                        //         min: 10,
                        //         max: 10,
                        //         message: "Please enter a valid Phone!",
                        //     },
                        // ]}
                      >
                        <Input
                          prefix={
                            <BsTelephone className="site-form-item-icon" />
                          }
                          placeholder="Phone No."
                        />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="profile-update-tabs-details-inputs-con">
                      <Form.Item label="DOB" name="date_of_birth">
                        <DatePicker
                          format={"DD MMM YYYY"}
                          style={{ width: "100%" }}
                        />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="profile-update-tabs-details-inputs-con">
                      <Form.Item label="Gender" name="gender">
                        <Radio.Group>
                          <Radio value="Male"> Male </Radio>
                          <Radio value="Female"> Female </Radio>
                        </Radio.Group>
                      </Form.Item>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="profile-update-tabs-details-inputs-con-btn-main-con">
                      <Button htmlType="submit" className="login-form-button">
                        Update
                      </Button>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
