import axios from 'axios';
import { BaseUrl, ApiRoutes } from './Routes';

const GithubServices = {
    getUsers: function (since:number,per_page:number): Promise<any> {
        console.log('since', since);
        console.log('per_page', per_page);
        return axios.get(BaseUrl + ApiRoutes.GET_USERS+`?since=${since}&per_page=${per_page}`)
    },
}


export default GithubServices;