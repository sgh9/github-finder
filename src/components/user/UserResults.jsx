import React, { useContext } from 'react'
import { githubContext } from '../../context/github/GithubContextProvider';
import UserItem from './UserItem';

const UserResults = () => {
    const {dispatch, loading, users} = useContext(githubContext);

    if(loading) {
        return <h3 className="text-center text-white text-3xl">Loading...</h3>;
    }


  return (
    <div className="py-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        place-items-center">
        {
            users.length > 0 && users.map(user => (
                <UserItem user={user} key={user.id} />
            ))
        }
    </div>
  )
}

export default UserResults
