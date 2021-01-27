import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPage } from "../../store/propertyPage";
import Reservation from '../Reservation';
import './propertyPage.css';

const PropertyPage = () => {
    const dispatch = useDispatch();
    const { propertyId } = useParams();
    const { property } = useSelector((state) => state.property);
    useEffect(() => {
        dispatch(getPage(propertyId))
    }, [dispatch])
   
    return (
        <div className='singleproperty_container'>
            <div className='singleproperty_container_address'>
            <h1>{`${property.listing_title}`}</h1>
            <p>{`${property.address1}, ${property.city}`}</p>
            </div>
            <img src={property.coverphoto_url} alt="coverPhoto" />
            <div className='detailReservationContainer'>
            <div className='singleproperty_container_propertyInfo'>
            <h3>{`Host: ${property.owner_id}`}</h3>
            <h2>{`${property.description}`}</h2>
            <h3>{`Private: ${property.private}`}</h3>
            <h3>{`Number of guest allowed: ${property.guest_spots}`}</h3>
            </div>
            <div className='singleproperty_container_reservation'>
                <Reservation property={property}/>
            </div>
            </div>
        </div>
    )
}

export default PropertyPage;
