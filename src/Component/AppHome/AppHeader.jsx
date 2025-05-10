import React, { useState } from "react";
import "../../Css/App/AppHeader.css";
import { BsBell } from "react-icons/bs";
import { Badge, Divider, Drawer, Empty } from "antd";
import { IoBag } from "react-icons/io5";
import { useCartContext } from "../../context/addToCart";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const AppHeader = () => {
  const { cartValue, setCartCount, setCartValue, cartCount } = useCartContext();
  const [opens, setOpens] = useState(false);
  const showDrawers = () => {
    setOpens(true);
  };
  const onCloses = () => {
    setOpens(false);
  };
  const removeCartData = (index) => {
    setCartValue((prevData) => {
      const updatedData = prevData.filter((_, i) => i !== index);
      addtoLocatStorage(updatedData);
      setCartCount(updatedData?.length);
      return updatedData;
    });
  };
  const addtoLocatStorage = (data) => {
    localStorage.setItem("cart", JSON.stringify(data));
  };

  const calculateSubtotal = () => {
    return cartValue.reduce((acc, current) => {
      return acc + Number(current.price); // Accumulate subServicePrice values
    }, 0);
  };


  console.log("calculateSubtotal",calculateSubtotal())

  return (
    <>
      <section className="app-home-page-header-main-con">
        <div className="app-home-page-header-main">
          <div className="app-home-page-header-details-name">
            <h2>Hello Siddhesh</h2>
            <h3>Good Morning!</h3>
          </div>
          <div className="app-home-page-header-details-notification-icon">
            {/* <BsBell /> */}
            <Badge count={cartValue?.length} showZero>
              <IoBag style={{ fontSize: "26px" }} onClick={showDrawers} />
            </Badge>
          </div>
        </div>
      </section>

      <Drawer
        title="Shopping Cart"
        placement="right"
        onClose={onCloses}
        open={opens}
      >
        <div className="Product-addedCart-Side-Bar">
          {cartValue?.length !== 0 ? (
            <>
              {cartValue?.map((v, i) => (
                <div className="Product-addedCart-Side-details">
                  {/* <div className="Product-addedCart-Image-con">
                    <div className="Product-addedCart-Image">
                      <img src={v.subServiceImage} alt='img' />
                    </div>
                  </div> */}
                  <div className="Product-details-addedCart-price-name-main-con">
                    <div className="Product-details-addedCart-price-name">
                      <h2>{v.name}</h2>
                      <h3>
                        <span>Price : </span>
                        {v.price}.00 ₹
                      </h3>
                    </div>
                  </div>
                  <div className="Product-details-addedCart-cancel-btn">
                    <div
                      className="Product-details-addedCart-cancel-btn-con"
                      onClick={() => removeCartData(i)}
                    >
                      <RxCross2 />
                    </div>
                  </div>
                </div>
              ))}
              <Divider />
              <div className="shopping-cart-subtotal">
                <label>Subtotal</label>
                <label>
                  <label>₹ {calculateSubtotal()}</label>
                </label>
              </div>
              <div className="Product-details-Addedcart-btn-ViewCart">
                <Link to="/appointment">
                  <button onClick={onCloses}>CheckOut</button>
                </Link>
              </div>
            </>
          ) : (
            <Empty description="Your cart is empty" />
          )}
        </div>
      </Drawer>
    </>
  );
};

export default AppHeader;
