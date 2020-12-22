import { StateAll, TypeUsersVuex, TypeUserAuthApi } from "~/store/users/users-type";
import { MutationTree ,ActionTree } from "vuex";
export const state = (): StateAll => ({
  Users: {},
  checkUser: false,
  checkUserLoader: false,
});

export const mutations = {
  SetUsers(state: StateAll, data: TypeUsersVuex) {
    // Данные пользователь
    state.Users = data;
  },
  checkUserLoaderTrue(state: StateAll) {
    // Пользователь был загружен
    state.checkUserLoader = true;
  },
  checkUserTrue(state: StateAll) {
    // Это пользователь
    state.checkUser = true;
  },
  checkUserFalse(state: StateAll) {
    // пользователь вышел
    state.checkUser = false;
  },
};

export const actions: ActionTree<any, any> = {
  async RequestAuthProfile({ commit, dispatch } ,dataset:any) {
    // Были ли уже загруженна информация про users
    const data: TypeUserAuthApi = await dispatch(
      "users/users-axios/UsersAuthAxios" , {dataset},
      { root: true }
    );
    console.log(data);
    if (data.id !== null) { // Пользователь существует
      this.app.$cookies.set("Authorization" , data.token);
      await dispatch("RequestUsersProfile");
      return false;
    }else {// Пользователя нету
      commit("checkUserLoaderTrue");
      return  true;
    }
  },
  async RequestUsersProfile({ commit, dispatch }) {
    const data: TypeUsersVuex | null = await dispatch(
      "users/users-axios/UsersProfileAxios" , {},
    { root: true }
    );
    if (data !== null) {
      commit("SetUsers", data);
      commit("checkUserTrue");
    }
    commit("checkUserLoaderTrue");
  },
};

export const getters = {
  GetUsers: (s: { Users: TypeUsersVuex }) => s.Users,
  GetCheckUserLoader: (s: { checkUserLoader: boolean }) => s.checkUserLoader,
  GetCheckUser: (s: { checkUser: boolean }) => s.checkUser,
};
