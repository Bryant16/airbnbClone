import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSchools } from "../../store/homepage";
import "./homePage.css";

const SchoolListings = () => {
  const dispatch = useDispatch();
  const schools = useSelector((state) => state.schools);
  useEffect(() => {
    dispatch(getSchools());
  }, [dispatch]);
  return (
    <div className="div__home_container">
      {schools.map((school) => {
        return (
          <div className="div__school_container">
            <Link to={`/school/${school.id}/${school.name}`}>
              <img
                className="schoolLogoImage"
                src={school.logo_url}
                alt="schoolImage"
              />
              <h2 key={school.name} className="schoolName">
                {school.name}
              </h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SchoolListings;
