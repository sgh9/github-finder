import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="hero">
        <div className="hero-content text-primary-content text-center">
            <div className="max-w-lg">
               <span className="text-1xl text-error">Error</span> 
               <p className="text-2xl my-4">404 - Page Not Found!</p>
               <Link to="/" className="btn btn-lg btn-primary">
                    <FaHome className='mr-2' />Go to Home</Link>
            </div>
        </div>
    </div>
  )
}

NotFound.propTypes = {

}

export default NotFound