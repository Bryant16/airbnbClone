import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPage } from "../../store/propertyPage"

const PropertyPage = () => {
    const dispatch = useDispatch();
    const { propertyId } = useParams();
    const { property } = useSelector((state) => state.property);
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
                <h3>{`Host: ${property.owner_id}`}</h3>
                <h3>{`${property.address1}`}</h3>
                <h2>{`${property.description}`}</h2>
                <h3>{`Private: ${property.private}`}</h3>
                <h3>{`Nightly Rate: $${property.nightly_rate_usd}`}</h3>
                <h3>{`Number of guest allowed: ${property.guest_spots}`}</h3>
            </div>
        </div>
    )
}

export default PropertyPage;
