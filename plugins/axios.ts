
export default function ({ $axios, app }) {
  $axios.onRequest(() => {
    // ПЕРЕХВАТЧИК ЗАПРОСА
    const cookieRes = app.$cookies.get('Authorization')
    const cookieReq = app.$cookies.get('Authorization', { fromRes: true }) // get from res instead of req
    console.log(cookieRes);
    console.log(cookieReq);
    // if (app.$cookies.get("Authorization") !== undefined) {}
    // console.log("Making request to " + config.url);
  });
}
