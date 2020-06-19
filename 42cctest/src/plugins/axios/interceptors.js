function setHeaders(config) {
    const headers = config.headers || {};
    config.headers = Object.assign(headers, {
      Authorization: localStorage.getItem("token-42cctest")
        ? `Token ${localStorage.getItem("token-42cctest")}`
        : "",
  
      "Content-Type":'multipart/form-data; boundary=----WebKitFormBoundaryBfpW7JErqslMoB7r',// "application/x-www-form-urlencoded", //"application/json"// 
      // "X-Requested-With": "XMLHttpRequest"
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
  