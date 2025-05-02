import React, { useRef, useState } from "react";
import "../../Css/Home/Category.css";
import shape01 from "../../Images/shapes/sec-shape-1.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Spin, Empty } from "antd";
import { get } from "../../services/userAuthAPI";
// import required modules
import { Pagination } from "swiper/modules";
// import men from "../../Images/new/category/men.png";
// import women from "../../Images/new/category/women.png";
// import bridal from "../../Images/new/category/WhatsApp Image 2025-02-28 at 16.31.53.jpeg";
// import facial from "../../Images/new/category/fecial.png";
// import waxing_nails from "../../Images/new/category/waxing_and_nails.png";
import { useEffect } from "react";
import { getToken } from "../../services/localStorageServices";
import { useNavigate } from "react-router-dom";
import notData from "../../Images/notfound.png";

const Category = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { access_token } = getToken();
  const navigate = useNavigate();

  const handleFetch = async () => {
    try {
      setLoading(true);
      const header = {
        Authorization: `Bearer 1|sSu6UeBi40QxG2iULlO5gUFTZOHQtDXFlKDt4hjVfb8d1209`,
      };

      const resp = await get(`/maincategories?page=${0}&limit=${20}`, header);

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
      <section className="home-section-category">
        <div className="container">
          <div className="home-section-category-main-con">
            <div className="home-section-category-head-main-con">
              <h2>We Style With Love
              </h2>
              <h3>Radiance. Rejuvenation. Glow. Naturally.</h3>
              <p className="lead" style={{display:"none"}}>
              Feel revitalized with our luxurious facials that bring out your natural radiance, leaving you glowing from within.
              </p>
              <div className="home-section-category-head-shape-main-con">
                <div className="home-section-category-head-shape-con">
                  <img src={shape01} alt="shape" />
                </div>
              </div>
            </div>
            {data.length > 0 ? (
              <div className="home-section-category-details-main-con">
                <div className="home-section-category-details-swiper-main-con">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                      },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {data.map((item, index) => (
                      <SwiperSlide
                        key={index}
                        onClick={() =>
                          navigate(
                            `/salon-for-hair-treatment-matunga?page=${item.name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`
                          )
                        }
                      >
                        <div className="home-catering-category-main-service-con">
                          <div className="home-catering-category-service-con">
                            <img src={item.image} alt="icons01" />
                          </div>
                          <h3>{item.name}</h3>
                        </div>
                      </SwiperSlide>
                    ))}
                    {/* <SwiperSlide>
                      <div className="home-catering-category-main-service-con">
                        <div className="home-catering-category-service-con">
                          <img src={women} alt="icons01" />
                        </div>
                        <h3>women</h3>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="home-catering-category-main-service-con">
                        <div className="home-catering-category-service-con">
                          <img
                            style={{ objectFit: "cover" }}
                            src={bridal}
                            alt="icons01"
                          />
                        </div>
                        <h3>Bridal</h3>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="home-catering-category-main-service-con">
                        <div className="home-catering-category-service-con">
                          <img src={facial} alt="icons01" />
                        </div>
                        <h3>Facials</h3>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="home-catering-category-main-service-con">
                        <div className="home-catering-category-service-con">
                          <img src={waxing_nails} alt="icons01" />
                        </div>
                        <h3>Waxing & Nails</h3>
                      </div>
                    </SwiperSlide> */}
                  </Swiper>
                </div>
              </div>
            ) : (
              <Empty
                image={notData}
                styles={{
                  image: {
                    height: 250,
                  },
                }}
                description={<h5>No Data Found</h5>}
              />
            )}
          </div>
        </div>
      </section>
    </Spin>
  );
};

export default Category;
