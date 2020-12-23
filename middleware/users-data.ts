import { Middleware } from "@nuxt/types";

const UserData: Middleware = async context => {
  if (!context.store.getters["users/users-index/GetCheckUserLoader"]) {
    await context.store.dispatch("users/users-index/RequestUsersProfile");
  }
};

export default UserData;
