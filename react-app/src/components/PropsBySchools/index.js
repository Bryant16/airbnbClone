import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPropertiesNearSchools } from "../../store/listingsBySchools";
import {useParams} from "react-router-dom";
import "./propsBySchool.css"

const ListingsNearSchools = () => {
    const dispatch = useDispatch();
    const properties = useSelector((state) => state.propsNearSchools);
    console.log("properties:", properties)
    const id = useParams();
    useEffect(() => {
        console.log("hi",id.schoolId)
        dispatch(getPropertiesNearSchools(id.schoolId))
    }, [dispatch])

    let property
    if (properties) {
        property = properties.map(p => {
            return (
                <div className="propsBySchool__container">
                    <img className="listingBySchool__image" key={p.id} src={p.coverphoto_url} alt="propertyImage" />
                    <h2 className="propsBySchool__text" key={p.listing_title}>{p.listing_title}</h2>
                    <h2 className="propsBySchool__text" key={p.address1}>{`${p.address1}, ${p.address2} ${p.city} ${p.zip_code} `}</h2>
                    <h2 className="propsBySchool__text" key={p.nightly_rate_usd}>{`$${p.nightly_rate_usd}/Night`}</h2>
                </div>
            )
        })
    } else {
       property = <h1>Loading...</h1>
    }

    return(
        <div>
            {property}

        </div>
    )
}

export default ListingsNearSchools
