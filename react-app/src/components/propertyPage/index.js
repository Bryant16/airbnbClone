import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPage } from "../../store/propertyPage";
import Reservation from '../Reservation';
import ReviewDisplay from '../ReviewDisplay';

import './propertyPage.css';

const PropertyPage = () => {
    const dispatch = useDispatch();
    const { propertyId } = useParams();
    const { property } = useSelector((state) => state.property);
    const [rev, setRev] = useState(false)
   
    
    // propertyReviews.map(rev=> console.log(rev))
    useEffect(() => {
        const getReviews = async()=>{
            const response = await fetch(`/api/reviews/${propertyId}`)
            const reviews = await response.json();
            setRev(reviews)
        }
        getReviews()
        dispatch(getPage(propertyId))
    }, [dispatch])
    console.log(property)
    return (
        <div className='singleproperty_container'>
            <div className='singleproperty_container_address'>
            <h1>{`${property.listing_title}`}</h1>
            <p>{`${property.address1}, ${property.city}`}</p>
            <div>
                <img src={property.coverphoto_url} alt="coverPhoto" />
            </div>
            </div>
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
            {property.rating && <div className='singleproperty_container_review_container'>
                <h1>REVIEWS</h1>
                <p>Stars: {property.rating.average} *</p>
                <div className='review_categories'>
                    <p>Cleanliness </p>
                    <span className='bar'><span style={{width:`${property.rating.cleanliness / 5 *100}%`}}className='bar_progress'></span></span>
                    <span>{property.rating.cleanliness}</span>
                    <p>Communication</p>
                    <span className='bar'><span style={{width:`${property.rating.communication / 5 *100}%`}}className='bar_progress'></span></span>
                    <span>{property.rating.communication}</span>
                    <p>Check-in</p>
                    <span className='bar'><span style={{width:`${property.rating.check_in / 5 *100}%`}}className='bar_progress'></span></span>
                    <span>{property.rating.check_in}</span>
                    <p>Accuracy</p>
                    <span className='bar'><span style={{width:`${property.rating.accuracy / 5 *100}%`}}className='bar_progress'></span></span>
                    <span>{property.rating.accuracy}</span>
                    <p>Location</p>
                    <span className='bar'><span style={{width:`${property.rating.location / 5 *100}%`}}className='bar_progress'></span></span>
                    <span>{property.rating.location}</span>
                    <p>Value</p>
                    <span className='bar'><span style={{width:`${property.rating.overall_value / 5 *100}%`}}className='bar_progress'></span></span>
                    <span>{property.rating.overall_value}</span>
                </div>
                {rev && rev.map(r=> <ReviewDisplay key={r.id}review={r} />)}
            </div>}
        </div>
    )
}

export default PropertyPage;
