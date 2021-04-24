//example api request: replace with your API request here in folder API
  
import axios from 'axios';
import {BaseUrl,ApiRoutes}  from './Routes';

const Services = {
  getPrograms: function (): Promise<any> {
    return axios.get(BaseUrl+ApiRoutes.GET_PROGRAMS)
  },
  getTvLink:function():Promise<any>{
    return axios.get(BaseUrl+ApiRoutes.GET_TVLINK)
  },
  getUser:() => {
    try {
      return Promise.resolve({
        status: 'success',
        data: [
          { id: 1, name: 'Fira' },
          { id: 2, name: 'Nadia' },
          { id: 3, name: 'Handy' },
          { id: 4, name: 'Fakara' }
        ]
      })
    } catch (e) {
      return Promise.reject(e)
    }
  }
}

export default Services;
