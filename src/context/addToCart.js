import React, { createContext, useContext, useEffect, useState } from "react";
import { Avatar, Button, Drawer, InputNumber, List, notification } from "antd";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartValue, setCartValue] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [showCartList, setShowCartList] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [totalPrice, setTotalPrice] = useState([]);
  const handleCartList = () => setShowCartList((prev) => !prev);

  // selected priduct details 


  // selected Service details 
  const [selectedService, setSelectedService] = useState(null);
  const [selectedServiceName, setSelectedServiceName] = useState(null);
  const [selectedServicePrice, setSelectedServicePrice] = useState(null);
  const [selectedServiceImage, setSelectedServiceImage] = useState(null);



  /////====gestdetail====///

  // price state 

  const [amountDetails, setAmountDetials] = useState({
    totalAmount: "",
    subTotal: "",
    texAmount: "",
  });

  const [guestDetails, setGuestDetails] = useState(null);

  const updateGuestDetails = (details) => {
    setGuestDetails(details);
  };

  // Function to calculate total item price
  const totalItemPrice = () => {
    return cartValue.reduce(
      (total, product) => total + parseFloat(product.price),
    );
  };

  // Function to calculate sales tax
  const salesTextPrice = (itemTotal) => {
    return (itemTotal * 10) / 100;
  };


  // ===================== Added Into Cart ===============
  const handleAddCart = (value) => {
    console.log('Cart Value:', JSON.stringify(value));

    if (cartValue && cartValue.length > 0) {
      const index = cartValue.findIndex(
        (filtValue) =>
          filtValue.name == value.name
      );

      if (index >= 0) {
        // If service already exists, show notification and do not add again
        openNotification(value, "This service is already in your cart.");
      } else {
        // Add new service to cart
        const updatedCart = [...cartValue, value];
        setCartValue(updatedCart);
        addtoLocatStorage(updatedCart); // Store updated cart in local storage
        openNotification(value, "Service added to cart.");
      }
    } else {
      // If cart is empty, add first service
      const updatedCart = [value];
      setCartValue(updatedCart);
      addtoLocatStorage(updatedCart);
      openNotification(value, "Service added to cart.");
    }
  };


  // console.log("cartValue", cartValue)

  //   =================== Open Notiification ================
  const openNotification = (value, message) => {
    console.log("openNotification value", value)
    const key = `open${Date.now()}`;
    const listDesign = (
      <List itemLayout="horizontal">
        <List.Item>
          <List.Item.Meta
            // avatar={<Avatar size={54} src={value.subServiceImage} />}
            title={`${value.name}`}
            description={
              `Price: ${value.price}`
            }
          />
        </List.Item>
      </List>
    );
    api.open({
      message: message,
      description: listDesign,
      key,
    });
  };
  //////branchdetail//

  const contextValue = {
    cartCount,
    handleCartList,
    handleAddCart,
    showCartList,
    cartValue,
    salesTextPrice,
    guestDetails,
    setGuestDetails,
    updateGuestDetails,
    // Removed updateBranchData because it's not defined,
    setCartValue,
    setCartCount,
    totalItemPrice,
    setShowCartList,
    totalPrice,
    amountDetails,
    selectedService,
    setSelectedService,
    selectedServiceName,
    setSelectedServiceName,
    selectedServicePrice,
    setSelectedServicePrice,
    selectedServiceImage,
    setSelectedServiceImage
  };
  //brnchdetai

  // =================== add to local Storage ==================

  const addtoLocatStorage = (data) => {
    localStorage.setItem("cart", JSON.stringify(data));
  };

  useEffect(() => {
    const cartdata = JSON.parse(localStorage.getItem("cart"));
    if (cartdata && cartdata !== null) {
        setCartValue(cartdata);
        setCartCount(cartdata?.length); // Fix: Use `cartdata` instead of `cartValue` to get correct length

        if (cartdata && cartdata.length > 0) {
            setCartValue((prevCartValue) => {
                let total = 0;
                prevCartValue.forEach((product) => {
                    total += parseFloat(product.servicePrice); // Fix: Use `servicePrice` instead of `product_price`
                });

                const taxRate = 18; // Change tax rate to 18%
                const totalTax = (total * taxRate) / 100;
                const tax = parseFloat(totalTax.toFixed(2));
                const itemTotal = parseFloat(total.toFixed(2));
                const totalAdd = itemTotal + tax;
                const finalAmount = parseFloat(totalAdd.toFixed(2));

                // Update state using callback
                setAmountDetials((prevAmountDetails) => ({
                    ...prevAmountDetails,
                    texAmount: tax,
                    subTotal: itemTotal,
                    totalAmount: finalAmount,
                }));

                return prevCartValue;
            });
        }
    }
}, []);


  return (
    <CartContext.Provider value={contextValue}>
      {contextHolder}
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
