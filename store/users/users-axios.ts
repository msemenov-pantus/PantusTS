import axios from "axios";
import { TypeUsersVuex, TypeUsersApi,TypeUsersErrorApi } from "~/store/users/users-type";

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

export async function UsersProfileAxios() {
  const requestUsers = await axios.get(`${process.env.api}/personal/profile`, {
    headers: { // Сделать что б везде отправлялась
      "Authorization":  "Bearer WuoSVSyoniHXHWjwPToxFD59f5rmAtQR"
    }
  });
  const data: TypeUsersApi = requestUsers.data;
  return UsersMap(data);
}
