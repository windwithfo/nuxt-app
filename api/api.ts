/**
 * api for pages
 * @author dongkunshan(windwithfo@yeah.net)
 */

import fetch from 'isomorphic-fetch';

const Api: any = {
  home: {}
};

Api.home.getNum = (params) => fetch('http://localhost:3002/mock/test.json', params).then((response) => response.json());

export default Api;
