import axios, {AxiosPromise} from 'axios';

const rootPath = 'https://api.themoviedb.org/3';
const apiKey = 'a556d4c388b9310ae40669b9b6c80dc9';

export interface GetParam {
  key: string,
  value: string,
}

export default {
  get(url: string, params?: GetParam[]|null): AxiosPromise {
    let paramsStr = '';
    params?.forEach((item: GetParam) => paramsStr += `&${item.key}=${item.value}`)
    return axios({
      method: 'get',
      url: `${rootPath}/${url}?api_key=${apiKey}${paramsStr}`,
    })
  },
  post(url: string, data: object) {
    return axios({
      method: 'post',
      url: `${rootPath}/${url}?api_key=${apiKey}`,
      data
    })
  }
}
