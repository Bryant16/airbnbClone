import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSchools } from "../../store/homepage";
import logo from "./campus_photo.png";
import arrow from "./arrow.png"
import "./homePage.css";
import { Helmet } from "react-helmet";

const SchoolListings = () => {
  const dispatch = useDispatch();
  const schools = useSelector((state) => state.schools);
  useEffect(() => {
    dispatch(getSchools());
  }, [dispatch]);
  return (
    <div className='homepage_container'>
    <div className="div__home_container">
      <Helmet>
        <title>CollegeBnB</title>
      </Helmet>
      <div className="div__school_container">
        <div className='school_button_container_1'>
        {schools.slice(0,5).map((school) => {
          return (
            <div className="school_buttons">
              <Link to={`/school/${school.id}/${school.name}`}>
                <img
                  className="schoolLogoImage"
                  src={school.logo_url}
                  alt="schoolImage"
                />
                {/* <h2 key={school.name} className="schoolName">
                {school.name}
              </h2> */}
              </Link>
            </div>
          );
        })}
            </div>
            
        <div className='school_button_container_2'>
        {schools.slice(5,10).map((school) => {
          return (
            <div className="school_buttons">
              <Link to={`/school/${school.id}/${school.name}`}>
                <img
                  className="schoolLogoImage"
                  src={school.logo_url}
                  alt="schoolImage"
                />
                {/* <h2 key={school.name} className="schoolName">
                {school.name}
              </h2> */}
              </Link>
            </div>
          );
        })}
        </div>
      </div>
    </div>
    <footer>
      <div className='footer_container'>
        <div>
          <h1>Contributors</h1>
        </div>
        <div>
          <h1>GitHub</h1>
        </div>
        <div></div>
      </div>
    </footer>
    </div>
    
    
  );
};

export default SchoolListings;
