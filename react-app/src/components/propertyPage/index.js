import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPage } from "../../store/propertyPage"

const PropertyPage = () => {
    const dispatch = useDispatch();
    const { propertyId } = useParams();
    const { property } = useSelector((state) => state.property);
    console.log(property)
    useEffect(() => {
        dispatch(getPage(propertyId))
    }, [dispatch])

    return (
        <div>
            <h1>{`${property.listing_title}`}</h1>
            <div>
                <img src={property.coverphoto_id} alt="coverPhoto" />
            </div>
            <div>
                <h1>{`${property.description}`}</h1>
            </div>
        </div>
    )
}

export default PropertyPage;
