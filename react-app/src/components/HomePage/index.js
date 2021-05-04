import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { nanoid } from 'nanoid';

import { getSchools } from '../../store/homepage';

import './homePage.css';

export default function SchoolListings () {
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
                  <div className='school_buttons' key={nanoid()}>
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
            <div className='school_button_container_2'>
              {schools.slice(5, 10).map((school) => (
                <div className='school_buttons' key={nanoid()}>
                  <Link to={`/school/${school.id}/${school.name}`}>
                    <img
                      className='schoolLogoImage'
                      src={school.logo_url}
                      alt='schoolImage'
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
