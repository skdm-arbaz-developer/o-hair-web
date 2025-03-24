import React, { useEffect, useState } from "react";
import "../../Css/Home/HomePlan.css";
import plan_back_image from "../../Images/plan/service-card-image.jpg";
import icoons from "../../Images/plan/scissor-and-comb.png";
import HomePlanData from "./HomePlanData";
import axios from "axios";

const HomePlan = (() => {

    const [allData, setAllData] = useState([])
    const FetchData = async () => {
        try {
            const response = await axios.get("https://ohair.lifestylefitnes.com/api/fetch-category-services")
            console.log("response", response)
            setAllData(response.data.data.categories)
        } catch (error) {

        }
    }

    useEffect(() => {
        FetchData()
    }, [])

    console.log("allData", allData)
    return (
        <>
            <section className="home-plan-section">
                <div className="container">
                    <div className="home-plan-section-main-con">
                        <div className="row">
                            {
                                allData?.map((elem) => {
                                    return (
                                        <>
                                            <div
                                                className="col-lg-6 col-md-6 col-xl-4 mb-30 slick-slide slick-cloned slick-active"
                                                // style={{ width: 480 }}
                                                tabIndex={-1}
                                                data-slick-index={4}
                                                id=""
                                                aria-hidden="false"
                                            >
                                                <div
                                                    className="price-grid background-image"
                                                    style={{
                                                        backgroundImage: `url(${elem.image})`
                                                    }}
                                                >
                                                    <div className="price-shape" />
                                                    <div className="price-shape2" />
                                                    <div className="price-shape3" />
                                                    <div className="price-icon">
                                                        <img src={icoons} alt="Price plan icon" />
                                                    </div>
                                                    <h3 className="package-name">{elem.name}</h3>
                                                    <div className="price-list">
                                                        <ul>
                                                            {
                                                                elem?.services?.map((elm) => {
                                                                    return (
                                                                        <>
                                                                            <li>
                                                                                <p className="package">{elm.name}</p>
                                                                                <div className="border-middle" />
                                                                                <span className="price">₹ {elm.price}</span>
                                                                            </li>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
});

export default HomePlan;