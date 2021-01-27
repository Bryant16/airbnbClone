import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPage } from "../../store/propertyPage"

const GetProperty = () => {
    const dispatch = useDispatch();
    const { propertyId } = useParams();
    const { property } = useSelector((state) => state.property);
    useEffect(() => {
        dispatch(getPage(product(propertyId)))
    }, [dispatch])

    return (
        <div>
            <h1>{property.listing_title}</h1>
            <div>
                <img src={product.coverphoto_id} alt="coverPhoto" />
            </div>
        </div>
    )
}

export default GetProperty;
