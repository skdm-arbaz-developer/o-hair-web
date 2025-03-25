import PayOrderOrder from "../Component/Appointment/PayOrder";
import "../Css/CheckOutPage.css";
import OrderDeatils from "../Component/Appointment/OrderDeatils";
import Orderlogin from "../Component/Appointment/Orderlogin";
import BookingAppointmnet from "../Component/Appointment/BookingAppointmnet";
import OtherBanner from "../Component/Home/OtherBanner";
import { useState } from "react";
import dayjs from "dayjs";
import { useCartContext } from "../context/addToCart";
import { getProfile, getToken } from "../services/localStorageServices";
import { message } from "antd";
import moment from "moment";
import { useSelector } from "react-redux";
import { post } from "../services/userAuthAPI";
import { useNavigate } from "react-router-dom";

const CheckOutPage = () => {
  const { token } = useSelector((state) => state.auth);
  const [selectedDate, setSelectedDate] = useState(dayjs(new Date()));
  const [selectedSlot, setSelectedSlot] = useState(null); // State to track selected slot
  const [loading, setLoading] = useState(false);
  const { cartValue, setCartValue } = useCartContext();
  const { profile } = getProfile();
  const { access_token } = getToken();
  const navigate = useNavigate();

  let finalsubtotal = 0;

  // Calculate subtotal (sum of all service prices)
  cartValue.forEach((product) => {
    finalsubtotal += parseFloat(product.price);
  });
  finalsubtotal = Math.round(finalsubtotal); // Round subtotal

  // Calculate tax as 18% of subtotal
  let totaltax = Math.round(finalsubtotal * 0.18);

  // Calculate total amount (subtotal + tax)
  let totalamount = finalsubtotal + totaltax;

  console.log(profile)

  const onFinish = async () => {
    try {
      setLoading(true);
      const formData = new FormData();

      formData.append("user_id", profile.id);
      {
        cartValue.map((val) => formData.append("service_id[]", val.id));
      }
      formData.append(
        "appointment_date",
        moment(selectedDate).format("YYYY-MM-DD")
      );
      formData.append("appointment_time", selectedSlot);
      formData.append("appointment_status", "Success");
      formData.append("subtotal", finalsubtotal);
      formData.append("total", finalsubtotal);
      formData.append("remaining", 0);
      formData.append("tax", 0);

      const header = {
        Authorization: `Bearer ${access_token}`,
      };
      const resp = await post("/appointments", formData, header);

      if (resp) {
        message.success("Appointment created successfully!");
        setCartValue([]);
        navigate("/profile-details?active=appointment");
      }
    } catch (error) {
      message.error("Failed to add service! Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <OtherBanner title={"Check Out"} />

      <section className="appointment-booking-main-page">
        <div className="container">
          <div className="appointment-booking-main-page-con">
            <div className="row">
              <div className="col-md-7">
                {token ? (
                  <>
                    <OrderDeatils />
                    <BookingAppointmnet
                      selectedDate={selectedDate}
                      selectedSlot={selectedSlot}
                      setSelectedDate={setSelectedDate}
                      setSelectedSlot={setSelectedSlot}
                    />
                  </>
                ) : (
                  <Orderlogin />
                )}
              </div>
              <div className="col-md-5">
                <PayOrderOrder loading={loading} onFinish={onFinish} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOutPage;
