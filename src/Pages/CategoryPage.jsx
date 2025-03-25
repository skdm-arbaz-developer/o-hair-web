import React from "react";
import "../Css/CategoryPage.css";
import "../Css/ServicePage.css";
import OtherBanner from "../Component/Home/OtherBanner";
import Accordion from "react-bootstrap/Accordion";
import { FiPlus } from "react-icons/fi";
import notData from "../Images/notfound.png";
import { getToken } from "../services/localStorageServices";
import { useState } from "react";
import { useEffect } from "react";
import { get } from "../services/userAuthAPI";
import { Spin, Empty } from "antd";
import { useCartContext } from "../context/addToCart";

const CategoryPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { access_token } = getToken();
  const { handleAddCart } = useCartContext();

  const handleFetch = async () => {
    try {
      setLoading(true);
      const header = {
        Authorization: `Bearer 1|sSu6UeBi40QxG2iULlO5gUFTZOHQtDXFlKDt4hjVfb8d1209`,
      };

      const resp = await get(
        `/maincategories-all?page=${0}&limit=${20}`,
        header
      );

      if (resp) {
        setData(resp?.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const dbounce = setTimeout(() => {
      handleFetch();
    }, 1000);
    return () => {
      clearTimeout(dbounce);
    };
  }, []);

  return (
    <Spin spinning={loading}>
      <OtherBanner />
      {data.length > 0 ? (
        <section className="catergory-main-page-section-1">
          <div className="container">
            {data.map((elem, index) => {
              const { name, image, sub_categories, description } = elem;
              return ( elem?.sub_categories?.length > 0 &&
                <>
                  <div className="category-main-page-section-1-main-con">
                    <div className="row">
                      <div
                        className={`col-md-5 align-items-start ${
                          index % 2 === 0 ? "order-1" : "order-2"
                        }`}
                      >
                        <div className="main-category-section-image-main-con align-items-start">
                          <div className="main-category-section-image-con w-100">
                            <img
                              style={{ width: "100%", height: "100%" }}
                              src={image}
                              alt={name}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className={`col-md-7 ${
                          index % 2 === 0 ? "order-2" : "order-1"
                        }`}
                      >
                        <div className="category-main-page-section-details-main-con">
                          <div className="category-main-page-section-head-con">
                            <h2 className="category-main-con-head">{name}</h2>
                            <p>{description}</p>
                          </div>
                          <div className="category-main-page-section-details-card-main-con">
                            <Accordion defaultActiveKey="0">
                              {sub_categories.map((data, index) => {
                                const { name, services } = data;
                                return (
                                  <>
                                    <Accordion.Item eventKey={index.toString()}>
                                      <Accordion.Header>
                                        {name}
                                      </Accordion.Header>
                                      <Accordion.Body>
                                        <div className="new-service-page-details-menu-list-main-con">
                                          {services.map(
                                            (serviceData, serviceIndex) => (
                                              <div
                                                key={serviceIndex}
                                                className="new-service-page-setails-menu-main-con"
                                              >
                                                <div className="service-page-section-card-head-name">
                                                  <h2>{serviceData?.name}</h2>
                                                  {/* <h3>₹ {serviceData?.subServicePrice}</h3> */}
                                                </div>
                                                <span className="price-dots"></span>
                                                <div
                                                  className="service-page-section-card-btn-main-con"
                                                  onClick={() =>
                                                    handleAddCart(serviceData)
                                                  }
                                                >
                                                  <h3>
                                                    ₹ {serviceData?.price}
                                                  </h3>
                                                  <div
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                    className="service-page-section-card-btn-icons"
                                                  >
                                                    <FiPlus />
                                                  </div>
                                                </div>
                                              </div>
                                            )
                                          )}
                                        </div>
                                      </Accordion.Body>
                                    </Accordion.Item>
                                  </>
                                );
                              })}
                            </Accordion>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      ) : (
        <Empty
          image={notData}
          styles={{
            image: {
              height: 350,
            },
          }}
          description={<h4 className="mb-5">No Data Found</h4>}
        />
      )}
    </Spin>
  );
};

export default CategoryPage;
