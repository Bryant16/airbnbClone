import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
                    <Link to={`/school/${school.id}`}>
                        <img className="schoolLogoImage" src={school.logo_url} alt="schoolImage"/>
                        <h2 key={school.name} className="schoolName">{school.name}</h2>
                    </Link>
                )
            })}
        </div>
    )
}

export default SchoolListings
