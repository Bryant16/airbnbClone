import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { nanoid } from 'nanoid';

import { getSchools } from '../../store/homepage';
import Tags from './Tags';
// import logo from './campus_photo.png';
// import arrow from './arrow.png';
import './homePage.css';
import './tags.css';

const SchoolListings = () => {
  const dispatch = useDispatch();
  const schools = useSelector((state) => state.schools);

  useEffect(() => {
    dispatch(getSchools());
  }, [dispatch]);

  return (
    <>
      <div className='homepage_container'>
        <div className='div__home_container'>
          <Helmet>
            <title>CollegeBnB</title>
          </Helmet>

          <div className='div__school_container'>
            <div className='school_button_container_1'>
              {schools.slice(0, 5).map((school) => {
                return (
                  <div
                    className='school_buttons'
                    key={nanoid()}
                  >
                    <Link to={`/school/${school.id}/${school.name}`}>
                      <img
                        className='schoolLogoImage'
                        src={school.logo_url}
                        alt='schoolImage'
                      />
                      {/* <h2 key={school.name} className="schoolName">
                {school.name}
              </h2> */}
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className='school_button_container_2'>
              {schools.slice(5, 10).map((school) => {
                return (
                  <div
                    className='school_buttons'
                    key={nanoid()}
                  >
                    <Link to={`/school/${school.id}/${school.name}`}>
                      <img
                        className='schoolLogoImage'
                        src={school.logo_url}
                        alt='schoolImage'
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className='indy_container'>
          <Tags />
        </div>

        {/* <div className="footer_container">
          <div className="indy_container">
            <div>
              <ul>
                <li>Andrew</li>
                <li>Bryant</li>
                <li>James</li>
                <li>JM</li>
              </ul>
            </div>
            <div className="tags">
              <ul></ul>
            </div>
          </div>
        </div> */}
      </footer>
    </>
  );
};

export default SchoolListings;
