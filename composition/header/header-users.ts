import { useContext, computed } from "@nuxtjs/composition-api";

export function HeaderUsers() {
  const { store } = useContext();
  const CheckUsers = computed(
    () => store.getters["users/users-index/GetCheckUser"]
  );
  const CheckUsersData = computed(
    () => store.getters["users/users-index/GetUsers"]
  );
  return { CheckUsers, CheckUsersData };
}
