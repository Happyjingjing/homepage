import axios from '@/myAxios'

var api = {
  getProvince(params) {
    return axios.get('province', params);
  },
  getcountry(params) {
    return axios.get('country', params);
  },
  getyazhou(params) {
    return axios.get('yazhou', params);
  },
  getouzhou(params) {
    return axios.get('ouzhou', params);
  },
  getHeilongjiang(params) {
    return axios.get('heilongjiang', params);
  },
  getBeiJing(params) {
    return axios.get('beijing', params);
  },
  getBaLin(params) {
    return axios.get('balin', params);
  },


}

export default api