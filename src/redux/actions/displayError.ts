const showError = (error: string) => {
  return { type: "SET_ERROR", payload: error };
};

export const displayError = (error: string) => {
  if (error === "") return { type: "SET_ERROR", payload: error };
  return async (dispatch: any) => {
    dispatch(showError(error));
    setTimeout(() => {
      dispatch(showError(""));
    }, 5000);
  };
};
