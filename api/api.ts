/**
 * api for pages
 * @author dongkunshan(windwithfo@yeah.net)
 */

import fetch from 'isomorphic-fetch';

const Api = {
  home: {
    getNum: (params?): Promise<any> => fetch('http://localhost:3002/mock/test.json', params).then((response) => response.json())
  },
  user: {
    getUserInfo: (params?): Promise<any> => fetch('http://localhost:3002/mock/test.json', params).then((response) => response.json()),
    login: (params?): Promise<any> => fetch('http://localhost:3002/mock/test.json', params).then((response) => response.json())
  }
};

export default Api;
