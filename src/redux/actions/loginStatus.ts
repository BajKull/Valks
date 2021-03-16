export const loginStatus = (status: any) => {
  return {
    type: "CHANGE_LOGIN_STATUS",
    payload: status,
  };
};
