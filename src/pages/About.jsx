import React from 'react'
import PropTypes from 'prop-types'

const About = props => {
  return (
    <div className="container grid ">
      <h2 className="text-3xl my-3 text-bold">Getting started with the REST API</h2>
      <p className="text-2xl mb-2">Learn the foundations for using the REST API, starting with authentication and some endpoint examples.</p>
      <a className="underline text-1xl" href="https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api">GitHub Rest API Documentation</a>
      </div>
  )
}

About.propTypes = {
    
}

export default About