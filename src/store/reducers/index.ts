export const storeReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload.user,
      };
    case "GET_USER":
      return state.user;
    case "SET_TOKEN":
      return {
        ...state,
        access_token: action.payload.access_token,
      };
    case "GET_TOKEN":
      return state.access_token;
  }
};
