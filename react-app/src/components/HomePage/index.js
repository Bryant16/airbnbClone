import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getSchools } from "../../store/homepage";
import "./homePage.css"


const SchoolListings = () => {
    const dispatch = useDispatch();
    const schools = useSelector((state) => state.schools);
    useEffect(() => {
        dispatch(getSchools())
    }, [dispatch])
    return (
        <div>
            {schools.map(school => {
                return(
                    <div>
                        <img className="schoolLogoImage" src={school.logo_url} alt="schoolImage"/>
                        <h2 key={school.name}>{school.name}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default SchoolListings
