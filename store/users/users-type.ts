export type TypeUsersApi = {
  id?: number;
  guid: number;
  account: {
    activity: boolean;
    login: string;
    type: "wholesale" | "";
  };
  name: {
    first: string;
    last: string;
    patronymic: string;
  };
  contacts: {
    email: string;
    phone: {
      personal: string;
    };
  };
  organization: {
    name: string;
    address: string;
    type: string; //Спорно
    tin: string; //Спорно
  };
};
export type TypeUsersErrorApi = {
  error?: {
    code: string;
    description: string;
    token: string;
  };
};
export type TypeUsersVuex = {
  id?: number;
  login?: string;
  email?: string;
  nameFirst?: string;
  nameLast?: string;
  patronymic?: string;
  phone?: string;
};
export type StateAll = {
  Users: TypeUsersVuex;
  checkUserLoader: boolean;
  checkUser: boolean;
};
