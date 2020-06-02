function setParams(config) {
  const params = config.params || {};
  config.params = Object.assign(params, {});
  return config;
}
function returnData(res) {
  return res;
}
export default function(axios) {
  axios.interceptors.request.use(setParams);

//   
  axios.interceptors.response.use(returnData);
}
