import React, {useContext } from 'react'
import RepoItem from './RepoItem';
import { githubContext } from '../../context/github/GithubContextProvider';

const RepoList = () => {
    const {dispatch, loading, repos } = useContext(githubContext); 

    return (
        <div className="card w-full ">
        <h3 className="text-md text-white">Popular Repositories</h3>
        <div className="grid grid-cols-1 place-items-center sm:place-items-center lg:place-items-start md:grid-cols-1 lg:grid-cols-2 gap-4 p-2 md:p-2 md:pl-0">
            {
                repos.length > 0 && repos.slice(0, 6).map(repo=> (<RepoItem repo={repo} key={repo.id}></RepoItem>))
            }
        </div>
        </div>
    )
}

export default RepoList;
