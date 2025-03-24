import React, { useState } from "react";
import "../../Css/BookingAppointmnet.css";
import { DatePicker, Empty } from "antd";
import moment from "moment";
import dayjs from "dayjs";
import { getProfile, getToken } from "../../services/localStorageServices";
import { get } from "../../services/userAuthAPI";
import { useEffect } from "react";
import { message } from "antd";

const BookingAppointmnet = ({
  selectedDate,
  setSelectedDate,
  selectedSlot,
  setSelectedSlot,
}) => {
  const [timeSlots, setTimeSlots] = useState([]);
  const { profile } = getProfile();
  const { access_token } = getToken();

  // Callback for when the date is changed
  const onChange = (date) => {
    setSelectedDate(date);
    getSlots(date);
  };

  // Disable dates before today
  const disabledDate = (current) => {
    return current && current < moment().startOf("day");
  };

  // Handle slot selection
  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };

  const getSlots = async (date) => {
    try {
      const header = {
        Authorization: `Bearer ${access_token}`,
      };
      const resp = await get(
        `/slots/${moment(new Date(date)).format("dddd")}?type=${
          profile.gender
        }&date=${moment(new Date(date)).format("YYYY-MM-DD")}`,
        header
      );

      if (resp.message) {
        message.error(resp.message);
        setTimeSlots([]);
      }

      if (resp) {
        setTimeSlots(resp.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const dbounce = setTimeout(() => {
      getSlots(selectedDate);
    }, 300);

    return () => {
      clearTimeout(dbounce);
    };
  }, [selectedDate]);

  return (
    <div className="OrderDetials-con booking-appointment-main-con">
      <div className="OrderDetials-billing-personal-details-con">
        <div className="OrderDetials-billing-personal-details">
          <h2>Select Appointment Date</h2>
          <div className="appointment-booking-details-main-con">
            <div className="appointment-booking-datepicker-details-main-con">
              <div className="appointment-booking-datepicker-main-con">
                <DatePicker
                  value={selectedDate}
                  onChange={onChange}
                  disabledDate={disabledDate}
                  format={"DD-MM-YYYY"}
                  style={{ width: "100%", height: "50px" }}
                />
              </div>

              {profile?.status !== "Black List" && timeSlots.length > 0 ? (
                <div className="appointment-booking-time-slot-main-con">
                  <h3>Select Availabel Time Slots</h3>
                  <div className="appointment-booking-slot-main-con">
                    <div className="row">
                      {timeSlots?.map((slot, index) => (
                        <div
                          key={index}
                          className="col-md-3 col-sm-6"
                          onClick={() => handleSlotSelect(slot)}
                          style={{
                            cursor: "pointer",
                            padding: "10px",
                            margin: "5px",
                            textAlign: "center",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            backgroundColor:
                              selectedSlot === slot ? "#025739" : "#fff",
                            color: selectedSlot === slot ? "#fff" : "#000",
                          }}
                        >
                          {slot}
                        </div>
                      ))}
                    </div>
                    {/* <div className="slot-booking-btn-main">
                      <button>Book Now</button>
                    </div> */}
                  </div>
                </div>
              ) : (
                <Empty description={<strong>No Slots Available</strong>} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingAppointmnet;
