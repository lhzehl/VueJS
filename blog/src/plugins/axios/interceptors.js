function setHeaders(config) {
  const headers = config.headers || {};
  config.headers = Object.assign(headers, {
    Authorization: localStorage.getItem("token")
      ? `Token ${localStorage.getItem("token")}`
      : "",

    "Content-Type":'multipart/form-data; boundary=----WebKitFormBoundaryBfpW7JErqslMoB7r'// "application/x-www-form-urlencoded", //"application/json"// 
  });
  return config;
}
function returnData(res) {
  return res;
}
export default function(axios) {
  axios.interceptors.request.use(setHeaders);

  //
  axios.interceptors.response.use(returnData);
}
