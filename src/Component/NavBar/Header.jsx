import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Button,
  Drawer,
  Space,
  Badge,
  Divider,
  Empty,
  Dropdown,
  ConfigProvider,
} from "antd";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import "../NavBar/Header.css";
import "../../Css/AddtoCart.css";
import logo from "../../Images/O-hair-logo.png";
import {
  FaAngleDown,
  FaList,
  FaLock,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { IoBag } from "react-icons/io5";
import { useCartContext } from "../../context/addToCart";
import {
  getProfile,
  getToken,
  removeToken,
} from "../../services/localStorageServices";
import { useDispatch, useSelector } from "react-redux";
import { setUserToken } from "../../features/authSlice";
import { Avatar } from "antd";
import { IoCall } from "react-icons/io5";

const Header = () => {
  // const {cartCount } = useCartContext();
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const { access_token } = getToken();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { cartValue, setCartCount, setCartValue } = useCartContext();
  const { profile } = getProfile();
  const [getCat, setGetCat] = useState([]);

  const navigate = useNavigate();

  const logoutHandle = () => {
    removeToken();
    navigate("/");
  };

  const items = [
    {
      key: "1",
      icon: <FaUserCircle />,
      label: (
        <Link
          style={{ textDecoration: "none" }}
          to="/profile-details?active=profile"
        >
          Profile
        </Link>
      ),
    },
    {
      key: "2",
      icon: <FaList />,
      label: (
        <Link
          style={{ textDecoration: "none" }}
          to="/profile-details?active=appointment"
        >
          Appointments
        </Link>
      ),
    },
    {
      key: "3",
      icon: <FaLock />,
      label: (
        <Link
          onClick={(e) => {
            e.preventDefault();
            logoutHandle();
          }}
          style={{ textDecoration: "none" }}
        >
          Logout
        </Link>
      ),
    },
  ];

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const [opens, setOpens] = useState(false);
  const showDrawers = () => {
    setOpens(true);
  };
  const onCloses = () => {
    setOpens(false);
  };
  const [visible, setVisible] = useState(false);

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
  // const getCategory
  useEffect(() => {
    setGetCat(JSON.parse(localStorage.getItem("category")));
  }, []);

  useEffect(() => {
    dispatch(setUserToken({ token: access_token }));
  }, [access_token, dispatch]);

  const calculateSubtotal = () => {
    return cartValue.reduce((acc, current) => {
      return acc + Number(current.price); // Accumulate subServicePrice values
    }, 0);
  };

  return (
    <>
      <div className="outter-navbar">
        <div className="container navbar-main-container">
          <div>
            <Space>
              <Button className="header-drawer" type="" onClick={showDrawer}>
                <RxHamburgerMenu />
              </Button>
              <Drawer
                title=""
                placement={placement}
                width={500}
                onClose={onClose}
                open={open}
                // bodyStyle={{ backgroundColor: "#f0f0f0" }} // Change to your desired color
              >
                {!profile ? (
                  <>
                    <Link
                      to="/account/sign-in"
                      className="header-drawer-sign-in-sign-out"
                      onClick={onClose}
                    >
                      <div className="d-flex justify-content-start gap-3 align-items-center mb-2">
                        <label>
                          <FaUserCircle className="fs-5" />
                        </label>
                        <label className="fs-5 fw-bold">Login</label>
                      </div>
                      <Divider />
                    </Link>
                  </>
                ) : (
                  <>
                    <div className="side-bar-main-profile-con-link">
                      <Link>
                        <div className="side-bar-main-profile-con">
                          <div className="side-bar-main-profile">
                            <div className="side-bar-main-profile-image-main-con">
                              <Avatar
                                icon={<FaUserCircle />}
                                src={profile?.image}
                              />
                            </div>
                            <div className="side-bar-main-profile-detials-main-con">
                              <h3>
                                {profile?.first_name} {profile?.last_name}
                              </h3>
                              <h4>+91 {profile?.phone_number}</h4>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </>
                )}

                <div className="d-flex navbar-product-category">
                  <div>
                    {/* <div className="navbar-product-category-head-main-con phone-view-navbar-items-display">
                      <Link to='/dashboard' onClick={onClose}>
                        DashBoard
                      </Link>
                    </div> */}
                    <div className="navbar-product-category-head-main-con">
                      <Link to="/" onClick={onClose}>
                        Home
                      </Link>
                    </div>
                    <div className="navbar-product-category-head-main-con">
                      <Link to="/service" onClick={onClose}>
                        Services
                      </Link>
                    </div>
                    <div className="navbar-product-category-head-main-con">
                      <Link to="/about-us" onClick={onClose}>
                        About Us
                      </Link>
                    </div>
                    <div className="navbar-product-category-head-main-con">
                      <Link to="/privacy-policy" onClick={onClose}>
                        Privacy Policy
                      </Link>
                    </div>
                    <div className="navbar-product-category-head-main-con">
                      <Link to="/terms-conditions" onClick={onClose}>
                        Terms & Conditions
                      </Link>
                    </div>
                    <div className="navbar-product-category-head-main-con">
                      <Link to="/contact-page" onClick={onClose}>
                        Contact us
                      </Link>
                    </div>
                    {/* <div className="navbar-product-category-head-main-con phone-view-navbar-items-display">
                      <Link to='/profile' onClick={onClose}>
                        Profile
                      </Link>
                    </div> */}
                  </div>
                </div>
                <div className="navbar-social-media">
                  <div className="navbar-social-media-inner-div">
                    <div>
                      <a
                        href="https://www.facebook.com/share/5AbV8V5VJQ6tCDfL/?mibextid=LQQJ4d"
                        target="_blank"
                      >
                        <FaFacebookF />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.instagram.com/katariashubli?igsh=MWQ1dGtyOTQzeTd3cA%3D%3D"
                        target="_blank"
                      >
                        <TiSocialInstagram />
                      </a>
                    </div>
                    <div>
                      <a href="https://wa.me/+919321032490" target="_blank">
                        <FaWhatsapp />
                      </a>
                    </div>
                    <div>
                      <a href="tel:+919321032490" target="_blank">
                        <IoCall />
                      </a>
                    </div>
                    <div>
                      <a href="https://in.pinterest.com/" target="_blank">
                        <FaPinterestP />
                      </a>
                    </div>
                  </div>
                </div>
              </Drawer>
            </Space>
          </div>
          <div className="nav-logo-div">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <div className="navbar-right-main">
            <div className="navbar-right-main-con">
              {token ? (
                <div>
                  <Dropdown
                    menu={{
                      items,
                    }}
                  >
                    <Button type="text">
                      <FaUserCircle size={24} />
                      &nbsp;{profile.first_name}&nbsp;
                      <FaAngleDown />
                    </Button>
                  </Dropdown>
                </div>
              ) : (
                <ConfigProvider
                  theme={{
                    components: {
                      Button: {
                        /* here is your component tokens */
                      },
                    },
                  }}
                >
                  <NavLink
                    to="/account/sign-in"
                    className="header-login-register-on-hover"
                  >
                    <Button style={{ borderColor: "#000", color: "#000" }}>
                      Sign in / Sign up
                    </Button>
                  </NavLink>
                </ConfigProvider>
              )}
            </div>
            <div className="navbar-addTo-cart-icon">
              <Badge count={cartValue?.length} showZero>
                <IoBag
                  style={{ fontSize: "26px", color: "#025739" }}
                  onClick={showDrawers}
                />
              </Badge>
            </div>
          </div>
        </div>
      </div>

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
                      <img src={v.subServiceImage} alt="" />
                    </div>
                  </div> */}
                  <div className="Product-details-addedCart-price-name-main-con">
                    <div className="Product-details-addedCart-price-name">
                      <h2>{v.name}</h2>
                      <h3>
                        <span>Price : </span>
                        {v.price} ₹
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

export default Header;
