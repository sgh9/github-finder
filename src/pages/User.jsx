import React, { useEffect, useContext } from 'react'
import { githubContext } from '../context/github/GithubContextProvider';
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom';
import { getUserAndRepo } from '../context/github/githubActions';
import { FaUsers, FaLink, FaBuilding, } from 'react-icons/fa';
import { MdEmail, MdLocationPin } from 'react-icons/md';
import RepoList from '../components/repo/RepoList';

const User = () => {
  const { login } = useParams();
  const {dispatch, loading, user, repos } = useContext(githubContext);

  useEffect(() => {
    getUserWithRepos();
  },[]);

  const { name, bio, followers, following, company
	,blog, location, email
	 } = user;

  const getUserWithRepos = async() => {
	  dispatch({ type: 'SET_LOADING'});
    const {user, repos } = await getUserAndRepo(login);
    dispatch({ type: "SET_USER_AND_REPOS", payload: { user, repos }});
  }

  	if(loading) {
		return <h3 className="text-center text-white text-3xl">Loading...</h3>;
	}

  return (
    <div className="flex pb-10 mx-auto text-center lg:text-left justify-center flex-col lg:flex-row">
       <div className="flex flex-col w-full align-center justify-center mx-auto md:w-1/3">
			<div className="avatar flex-col w-1/2 md:w-3/4 mx-auto lg:mx-0">
					<div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mb-4">
						<img src={user.avatar_url} alt={login}   />
					</div>
			</div>
			<h2 className="text-3xl text-white">{name}</h2>
			<p className="text-xl my-2">{login}</p>
			<p className="text-white">{bio}</p>
			<div className="flex my-2 justify-center md:justify-start">
				<div className="flex pl-0">
					<FaUsers className="mr-2 inline text-2xl "/>
					<span className="font-bold inline ">{followers}</span> &nbsp; <span className="text-white">followers</span>
					</div>
				<div className="flex pl-0">
					<span className="font-bold inline ">&nbsp;{following}</span> &nbsp; <span className="text-white">following</span>
				</div>
			</div>
			<ul className="py-2 text-white">
				<li><FaBuilding className="inline mr-2 text-gray-300"/>{company}</li>
				<li><MdLocationPin className="inline mr-2 text-gray-300"/>{location}</li>
				<li><FaLink className="inline mr-2 text-gray-300"/> {blog}</li>
				<li><MdEmail className="inline mr-2 text-gray-200/60"/>{email}</li>
			</ul>
        </div>
		<RepoList/>

    </div>
  )
}

User.propTypes = {}

export default User