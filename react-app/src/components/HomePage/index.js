import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSchools } from "../../store/homepage"


const SchoolListings = () => {
    const dispatch = useDispatch();
    const { schools } = useSelector(state = state.schools);
    useEffect(() => {
        dispatch(getSchools())
    }, [dispatch])

    return (
        <div>
            {schools.map(school => {
                return(
                    <h1>{school.name}</h1>
                )
            })}
        </div>
    )
}

export default SchoolListings
