import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
console.log("URL: " + GITHUB_URL)

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: { Authorization : `token ${GITHUB_TOKEN}` },
});


export const getUsers  = async(login)=> {

    const params = new URLSearchParams({
        q: login
    });

    const response = await github.get(`search/users?${params}`);
    const  users = await response.data.items;
    return users;
}

export const getUserAndRepo = async(login) => {

    const [user, repos] =  await Promise.all([
        github.get(`users/${login}`),
        github.get(`users/${login}/repos`)
    ]);

    console.log(user, repos);

    return {
        user: user.data,
        repos: repos.data
    }
}