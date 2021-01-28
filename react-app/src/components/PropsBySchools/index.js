import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPropertiesNearSchools } from "../../store/listingsBySchools";
import {useParams} from "react-router-dom";


const ListingsNearSchools = () => {
    const dispatch = useDispatch();
    const properties = useSelector((state) => state.listings);
    const { schoolId } = useParams();
    useEffect(() => {
        dispatch(getPropertiesNearSchools(schoolId))
    }, [dispatch])

    return(
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default ListingsNearSchools
