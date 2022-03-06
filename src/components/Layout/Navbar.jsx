import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
const Navbar = ({title }) => {
  return (
    <div className="navbar mb-12 bg-neutral text-neutral-content shadow-lg">
        <div className="container mx-auto">
            <div className="flex-none px-2 mx-2">
                <FaGithub className="inline text-4xl mr-2 "/> 
                <Link to="/" className="font-bold ">{title}</Link>
            </div>
            <div className="flex-1 px-1 mx-1">
                <div className="flex justify-end">
                    <Link to="/" className="btn btn-ghost btn-sm rounded-btn">Home</Link>
                    <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">About</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
Navbar.defaultProps = {
    title: 'Github Finder'
}

Navbar.propTypes = {
    title: propTypes.string
}
export default Navbar;
