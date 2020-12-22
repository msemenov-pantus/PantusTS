export default ({ $axios, app }) => {
  $axios.onRequest(config => {
    if (app.$cookies.get("Authorization")) {
      config.headers.common["Authorization"] = `Bearer ${app.$cookies.get(
        "Authorization"
      )}`;
    }
  });
};
