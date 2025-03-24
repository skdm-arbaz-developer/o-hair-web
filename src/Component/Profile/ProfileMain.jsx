import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BookingHistory from "./BookingHistory";
import "../../Css/Profile/ProfileMain.css";
import ProfileUpdate from "./ProfileUpdate";
import { useSearchParams } from "react-router-dom";

const ProfileMain = () => {
  const [selectedComponent, setSelectedComponent] = useState("profile");

  const [searchParams] = useSearchParams();
  const active = searchParams.get("active");
  const navigate = useNavigate(); 

  useEffect(() => {
    if (active) {
      setSelectedComponent(active);
    }
  }, [active]);


  return (
    <div className="mt-5 pt-5">
      {selectedComponent === "profile" && <ProfileUpdate />}
      {selectedComponent === "appointment" && <BookingHistory />}
    </div>
  );
};

export default ProfileMain;
