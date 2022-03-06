import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import UserSearch from '../components/user/UserSearch';
import { githubContext } from '../context/github/GithubContextProvider';
import UserResults from '../components/user/UserResults';

const Home = props => {
  const {dispatch } = useContext(githubContext);

  return (
    <div className="container px-10">
      <UserSearch/>
      <UserResults/>
    </div>
  )
}

Home.propTypes = {}

export default Home