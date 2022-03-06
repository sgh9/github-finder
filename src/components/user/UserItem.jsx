import React from 'react';
import { Link } from 'react-router-dom';


const UserItem = ({ user }) => {

  return (
    <Link to={`/users/${user.login}`} className="cursor-pointer">
        <figure>
            <img src={user.avatar_url} alt={user.login} />
        </figure>
        <p className="text-1xl">{user.login}</p>
    </Link>
  )
}
export default UserItem;
