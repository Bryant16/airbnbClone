import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSchools } from "../../store/homepage";
import "./homePage.css"


const SchoolListings = () => {
    const dispatch = useDispatch();
    const schools = useSelector((state) => state.schools);
    console.log("before useEffect")
    useEffect(() => {
        dispatch(getSchools())
    }, [dispatch])
    console.log(schools)
    return (
        <div>
            {schools.map(school => {
                return(
                    <div>
                        <img className="schoolLogoImage" src={school.logo_url} alt="schoolImage"/>
                        <h2 key="name">{school.name}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default SchoolListings
