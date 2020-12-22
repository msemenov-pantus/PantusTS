import { TypeUsersVuex, TypeUsersApi,TypeUsersErrorApi } from "~/store/users/users-type";
import {ActionTree} from "vuex";
import axios from "axios";
const UsersMap = (data: TypeUsersApi) => {
  const dataset: TypeUsersVuex = {};
  if(data.id !== undefined){
    dataset.id = data.id;
    dataset.email  = data.contacts.email;
    dataset.login  = data.account.login;
    dataset.nameFirst  = data.name.first
    dataset.nameLast  = data.name.last;
    dataset.patronymic  = data.name.patronymic;
    dataset.phone = data.contacts.phone.personal;
    return dataset;
  }
  else {return null;}
}
export const actions: ActionTree<any,any> = {
  async UsersProfileAxios() {
    const requestUsers = await this.$axios.get(`${process.env.api}/personal/profile`);
    const data: TypeUsersApi = requestUsers.data;
    return UsersMap(data);
  },

  async UsersAuthAxios({}, dataset:any) {
    const requestUsers = await axios.get(`${process.env.api}/auth`,{
      headers: {
        Authorization: `Basic ${window.btoa(dataset.dataset.login + `:` + dataset.dataset.password)}`,
      },
    });
    return requestUsers.data;
  }
}

