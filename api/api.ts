/**
 * api for pages
 * @author dongkunshan(windwithfo@yeah.net)
 */

/* eslint-disable max-len */
import http from 'axios'

const Api = {
  home: {
    getNum: (params?): Promise<any> => http.get('http://localhost:3000/mock/test.json', params)
  },
  user: {
    getUserInfo: (params?): Promise<any> => http.get('http://localhost:3000/mock/test.json', params),
    login: (params?): Promise<any> => http.get('http://localhost:3000/mock/test.json', params)
  }
}

export default Api
