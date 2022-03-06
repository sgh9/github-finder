import React, { useState, useContext } from 'react';
import { githubContext } from '../../context/github/GithubContextProvider';
import { getUsers } from '../../context/github/githubActions';

const UserSearch = () => {
    const [text, setText] = useState('');
    const {dispatch, loading, users} = useContext(githubContext);
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        if (text === '') {
            alert("Please select a text");
            return;
        }
        setText('');
        dispatch({ type: "SET_LOADING" });
        const users = await getUsers(text);
        dispatch({ type: "SET_USERS", payload: users });
    }

    return (
        <div className="grid grid-cols-1 grid-rows-2 place-items-start">
            <form onSubmit={handleSubmit} className="flex w-full md:w-3/4 lg:w-1/2 ">
                <input 
                    onChange={(e)=> setText(e.target.value)}
                    type="text" 
                    name="user" 
                    placeholder="Search users" 
                    id="user" 
                    value={text}
                    className="input border-gray-200/50 w-full active:border-gray-200/100"/>
                <button className="ml-4 btn btn-primary"type="submit">submit</button>
            </form>

            {
                users.length > 0 && (
                    <div className="w-full md:w-1/2">
                        <button className="btn btn-sm mt-4"onClick={()=> dispatch({type: 'CLEAR_USERS'})}>
                            clear
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default UserSearch;