import React, { useContext } from 'react'
import { githubContext } from '../../context/github/GithubContextProvider';

const RepoItem = ({ repo }) => {
    const {name, description, visibility } = repo;
    const {dispatch, loading, user, repos } = useContext(githubContext);
  return (
    <div className="card card-compact w-96 border border-gray-100 
        shadow-xl flex justify-center p-3 h-full pt-1">
        <h4 className="flex justify-between text-1xl font-bold text-blue-600/100 my-2
            cursor-pointer  hover:underline">{name}
            <div className="badge badge badge-outline">{visibility === "public" && "Public"}</div>
        </h4>
        <p className="text-sm ">{description} </p>
        <ul className="py-2 flex gap-4 justify-start">
            <li>javaSceript</li>
            <li> starts</li>
            <li>forks</li>
        </ul>
    </div>
  )
}

export default RepoItem;
