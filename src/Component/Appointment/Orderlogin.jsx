import React from 'react';
import "../../Css/Orderlogin.css";
import { Link } from 'react-router-dom';


const Orderlogin = () => {
    return (
        <>
            <div className='Orderlogin-con'>
                <div className='Orderlogin-billing-personal-details-con'>
                    <div className='Orderlogin-billing-personal-details'>
                        <h2>Personal Details</h2>
                        <div className='Orderlogin-personal-details'>
                            <div className='Order-Details-btn-login-con'>
                                <Link to="/account/sign-in">
                                    <button>
                                        Login
                                    </button>
                                </Link>
                            </div>
                            <div className='Order-Details-btn-Register-con'>
                                <Link to="/account/sign-up">
                                    <button>
                                        Register
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Orderlogin