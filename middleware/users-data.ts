// @ts-ignore
export default async ({store}) => {
  if(!store.getters["users/users-index/GetCheckUserLoader"]){
    await store.dispatch("users/users-index/RequestUsersProfile");
  }
};
