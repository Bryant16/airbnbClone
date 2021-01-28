import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPropertiesNearSchools } from "../../store/listingsBySchools";


const ListingsNearSchools = () => {
    const dispatch = useDispatch();
    const properties = useSelector((state) => state.listings);
    useEffect(() => {
        dispatch(getPropertiesNearSchools())
    }, [dispatch])

    return(
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default ListingsNearSchools
