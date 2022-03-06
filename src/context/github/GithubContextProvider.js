import { createContext, useReducer } from 'react';
import githubReducer from './githubReducer';

export const githubContext = createContext();

const GithubContextProvider = ({children})=> {

    const initialState = {
        users: [],
        repos: [],
        user: {},
        loading: false
    };

    const [state, dispatch] = useReducer(githubReducer, initialState);
    return (
        <githubContext.Provider 
            value={{
                ...state, 
                dispatch
        }}>
            {children}
        </githubContext.Provider>

    )  
}

export default GithubContextProvider;