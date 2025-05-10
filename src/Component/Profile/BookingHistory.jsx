import React from "react";
import "../../Css/Profile/BookingHistory.css";
import moment from "moment";
import { del, get } from "../../services/userAuthAPI";
import { useEffect } from "react";
import { useState } from "react";
import { getProfile, getToken } from "../../services/localStorageServices";
import { Pagination, Divider, Tag, Button, Spin, message, Empty } from "antd";
import { IoMdCloseCircle } from "react-icons/io";

const BookingHistory = () => {
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(10);
  const [limit, setLimit] = useState(10);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { access_token } = getToken();
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const { profile } = getProfile();

  const handleFetch = async (search) => {
    try {
      setLoading(true);
      const header = {
        Authorization: `Bearer ${access_token}`,
      };

      const resp = await get(
        `/appointments/${profile?.id}?page=${page}&limit=${limit}${
          selectedDate
            ? "&date=" + moment(new Date(selectedDate)).format("YYYY-MM-DD")
            : ""
        }${search !== "" ? "&search=" + search : ""}`,
        header
      );

      if (resp) {
        setData(resp?.data);
        setTotal(resp?.pagination?.total);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const dbounce = setTimeout(() => {
      handleFetch(search);
    }, 300);

    return () => clearTimeout(dbounce);
  }, [page, search, selectedDate]);

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you sure you want to cancelled ?")) {
        setLoading(true);
        const header = {
          Authorization: `Bearer ${access_token}`,
        };

        const resp = await del(`/appointments/${id}`, header);

        if (resp) {
          handleFetch("");
          message.success("Cancelled successfull");
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spin spinning={loading}>
      <section className="order-section-order-list-main-con">
        <div className="container">
          <div className="order-section-order-list-head">
            <h2>My Appointments</h2>
          </div>
          {data.length > 0 ? (
            <div
              className="order-section-order-list-con"
              style={{ height: "unset", overflow: "unset" }}
            >
              <div className="MyOrder-Section-con">
                <div className="order-section-history-main-con">
                  <div className="row">
                    {data.map((val) => (
                      <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <div className="order-section-history-details-main-card">
                          <div className="order-history-card-time-date">
                            <h2>
                              {moment(val?.appointment_date).format(
                                "DD MMM YYYY"
                              )}
                            </h2>
                            <h2>{val?.appointment_time}</h2>
                          </div>
                          {val.services?.map((val) => (
                            <div className="order-history-card-name-and-price">
                              <h3>{val?.name}</h3>
                              <h4>₹ {val?.price}</h4>
                            </div>
                          ))}
                          <Divider />
                          <div className="order-history-card-price-con">
                            <h5>Total Amount</h5>
                            <h6>₹ {val.total}</h6>
                          </div>
                          <div className="order-history-card-cancel-btn d-flex justify-content-between align-items-center">
                            <span>
                              <strong>
                                Status:&nbsp;
                                <Tag
                                  color={
                                    val.appointment_status === "Success"
                                      ? "blue"
                                      : val.appointment_status === "Completed"
                                      ? "green"
                                      : "red"
                                  }
                                >
                                  {val.appointment_status}
                                </Tag>
                              </strong>
                            </span>

                            {val.appointment_status === "Success" && (
                              <Button
                                className="bg-danger text-white border-0"
                                icon={<IoMdCloseCircle />}
                                onClick={() => handleDelete(val?.id)}
                              >
                                cancel
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </section>
      <div className="container mb-4">
        <Pagination
          hideOnSinglePage
          className="mt-4"
          total={total}
          current={page}
          onChange={(page, limit) => {
            setPage(page);
            setLimit(limit);
          }}
        />
      </div>
    </Spin>
  );
};

export default BookingHistory;
