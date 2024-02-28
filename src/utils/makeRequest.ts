import axios from 'axios';
import { IRequest } from '../types/request.interface';

export const makeRequest = ({ url = '/', method = "get", params, headers, data }: IRequest) => {
 return axios({
    url,
    method,
    params,
    responseType: 'json',
    headers,
    data
  })
}