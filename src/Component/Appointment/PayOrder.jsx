import React from "react";
import "../../Css/YourOrder.css";
import { useCartContext } from "../../context/addToCart";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import service_not_select from "../../Images/not-found-service.jpg";
import { Button } from "antd";

const PayOrder = ({ onFinish, loading }) => {
  const navigate = useNavigate();
  const { cartValue, setCartCount, setCartValue } = useCartContext();

  const removeCartData = (index) => {
    setCartValue((prevData) => {
      const updatedData = [...prevData];
      updatedData.splice(index, 1);
      addtoLocatStorage(updatedData);
      setCartCount(updatedData.length);
      return updatedData;
    });
  };

  const addtoLocatStorage = (data) => {
    localStorage.setItem("cart", JSON.stringify(data));
  };

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

  return (
    <>
      <div className="YourOrder-Con-Main">
        {cartValue.length > 0 ? (
          <>
            <div className="YourOrder-Con-head-Main">
              <h2>Your Selected Service</h2>
            </div>
            <div className="YourOrder-Con-Title-Main">
              <h2>Service</h2>
              <h2>Total</h2>
            </div>
            <div className="Product-addedCart-Side-Bar">
              {cartValue?.map((elem, index) => (
                <div className="Product-addedCart-Side-details" key={index}>
                  <div className="Product-details-addedCart-price-name">
                    <h2>{elem.name}</h2>
                    <h3>
                      <span>Price : </span>
                      {elem.price} ₹
                    </h3>
                  </div>
                  <div className="Product-details-addedCart-cancel-btn">
                    <div
                      className="Product-details-addedCart-cancel-btn-con"
                      onClick={() => removeCartData(index)}
                    >
                      <RxCross2 />
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="YourOrder-Con-details-Main">
                <div className="YourOrder-Con-details-text">
                  <h2 className="YourOrder-totoal">Subtotal</h2>
                </div>
                <h2>₹ {finalsubtotal}</h2>
              </div> */}
              {/* <div className="YourOrder-Con-details-Main tax-main-con">
                <div className="YourOrder-Con-details-text">
                  <h2 className="YourOrder-totoal tax">Tax (18%)</h2>
                </div>
                <h2 className="tax">₹ {totaltax}</h2>
              </div> */}
              <div className="YourOrder-Con-details-Main">
                <div className="YourOrder-Con-details-text">
                  <h2 className="YourOrder-totoal">Total Amount</h2>
                </div>
                <h2>₹ {Math.round(finalsubtotal)}</h2>
              </div>
            </div>
            <div className="Product-details-Addedcart-btn">
              <div className="Product-details-Addedcart-btn-ViewCart">
                <Button className="bg-dark text-white" loading={loading} onClick={onFinish}>
                  Book Appointment
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="check-out-page-main-images-con">
              <img src={service_not_select} alt="service not select" />
              <h3>Oops! It looks like you haven't chosen a service yet.</h3>
              <div className="check-out-page-main-images-con-service-btn">
                <Link to="/salon-for-hair-treatment-matunga">
                  <Button>Select Service</Button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PayOrder;
