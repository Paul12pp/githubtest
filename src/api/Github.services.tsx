import axios from 'axios';
import { BaseUrl, ApiRoutes } from './Routes';

const GithubServices = {
    getUsers: function (since:number,per_page:number): Promise<any> {
        return axios.get(BaseUrl + ApiRoutes.GET_USERS+`?since=${since}&per_page=${per_page}`)
    },
    getUser:function (username:string):Promise<any>{
        console.log(BaseUrl + ApiRoutes.GET_USER+`${username}`)
        return axios.get(BaseUrl + ApiRoutes.GET_USER+`${username}`)
    },
    getRepos:function (username:string):Promise<any>{
        return axios.get(BaseUrl + ApiRoutes.GET_REPOS+`${username}/repos`)
    },
    getFollowers:function (username:string):Promise<any>{
        return axios.get(BaseUrl + ApiRoutes.GET_REPOS+`${username}/followers`)
    }
    
}


export default GithubServices;