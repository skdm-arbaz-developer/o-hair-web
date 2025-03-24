import React from "react";
import "../../Css/OrderDetails.css";
import { getProfile, setProfile } from "../../services/localStorageServices";

const OrderDeatils = () => {
  // Retrieve data from sessionStorage
  const { profile } = getProfile();


  return (
    <>
      <div className="OrderDetials-con">
        <div className="OrderDetials-billing-personal-details-con">
          <div className="OrderDetials-billing-personal-details">
            <h2>Personal Details</h2>
            <div className="OrderDetials-personal-details">
              <div className="row">
                <div className="col-12">
                  <div className="OrderDetials-personal-details-name">
                    <h2>
                      {profile?.first_name} {profile?.last_name}
                    </h2>
                  </div>
                </div>
                <div className="col-12">
                  <div className="OrderDetials-personal-details-name">
                    <h2>{profile?.email}</h2>
                  </div>
                </div>
                <div className="col-12">
                  <div className="OrderDetials-personal-details-name">
                    <h2>{profile?.phone_number}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDeatils;
