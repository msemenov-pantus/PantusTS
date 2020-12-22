export default ({ $axios, app }) => {
  console.log(app.$cookies);
  $axios.onRequest(config => {
    config.headers.common[
      "Authorization"
    ] = `Bearer nuY0ABQfg3FiSTFM3INIUUkRXUfWNVih`;
  });
  // inject("axiosHeader", $axios);
};
