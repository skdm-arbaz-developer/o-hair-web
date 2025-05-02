import React from "react";
import aboutImages from "../Images/shedule.png";
import { getToken } from "../services/localStorageServices";
import { Spin } from "antd";
import { get } from "../services/userAuthAPI";
import { useState } from "react";
import { useEffect } from "react";

const days = [
  "",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function TimeTableComp() {
  const [timeTabel, setTimeTable] = useState([]);
  const [loading, setLoading] = useState(false);
  const { access_token } = getToken();

  const handleFetchTime = async () => {
    try {
      setLoading(true);
      const header = {
        Authorization: `Bearer 1|sSu6UeBi40QxG2iULlO5gUFTZOHQtDXFlKDt4hjVfb8d1209`,
      };

      const resp = await get(`/slots?page=${0}&limit=${20}`, header);

      if (resp) {
        setTimeTable(resp?.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const dbounce = setTimeout(() => {
      handleFetchTime();
    }, 300);
    return () => {
      clearTimeout(dbounce);
    };
  }, []);
  return (
    <Spin spinning={loading}>
      <section
        className="vs-about-wrapper-about-page space-top space-negative-bottom"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #fcf2ee 0%, rgba(0, 0, 0, 0) 100%)",
        }}
      >
        <div className="container">
          <div className="row text-center text-lg-start align-items-start justify-content-between flex-row-reverse">
            <div className="col-lg-6 col-xl-6">
              <div className="transform-banner">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={aboutImages}
                  alt="ABout Image"
                />
              </div>
            </div>
            <div className="col-lg-6 col-xl-5">
              <div className="about-content about-page-details-main-con-info">
                <span className="sub-title">Meet with us At</span>
                <div className="row justify-content-center">
                  <div className="col-lg-12 col-md-10 col-sm-9">
                    <h2 className="sec-title">Our saloons shedule time</h2>
                  </div>
                  <div className="col-lg-12 col-md-9 col-sm-11">
                    <p>
                      Our salon follows a flexible schedule throughout the week.
                      Appointments are preferred to reduce wait time and ensure
                      you receive personalized attention from our professional
                      and friendly team.
                    </p>
                  </div>
                  <div className="col-lg-12 col-md-8 col-sm-10 pt-xl-2">
                    {days.map((item, index) => (
                      <div className="row w-100">
                        <div className="col-4 d-flex justify-content-start">
                          <h6>{item}</h6>
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                          {item === "" ? (
                            <strong>Male</strong>
                          ) : timeTabel?.find(
                              (val) => val.type === "Male" && val.day === item
                            )?.status === "deactive" ? (
                            <span style={{ color: "red" }}>Closed</span>
                          ) : (
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontSize: "12px",
                              }}
                            >
                              {
                                timeTabel?.find(
                                  (val) =>
                                    val.type === "Male" && val.day === item
                                )?.opening_time
                              }{" "}
                              -{" "}
                              {
                                timeTabel?.find(
                                  (val) =>
                                    val.type === "Male" && val.day === item
                                )?.closing_time
                              }
                            </span>
                          )}
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                          {item === "" ? (
                            <strong>Female</strong>
                          ) : timeTabel?.find(
                              (val) => val.type === "Female" && val.day === item
                            )?.status === "deactive" ? (
                            <span style={{ color: "red" }}>Closed</span>
                          ) : (
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontSize: "12px",
                              }}
                            >
                              {
                                timeTabel?.find(
                                  (val) =>
                                    val.type === "Female" && val.day === item
                                )?.opening_time
                              }{" "}
                              -{" "}
                              {
                                timeTabel?.find(
                                  (val) =>
                                    val.type === "Female" && val.day === item
                                )?.closing_time
                              }
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Spin>
  );
}
