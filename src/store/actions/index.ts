//User
export const setUser = (user: string) => {
  return {
    type: "SET_USER",
    payload: {
      user,
    },
  };
};

export const getUser = () => {
  return {
    type: "GET_USER",
  };
};

//Token
export const setToken = (access_token: string) => {
  return {
    type: "SET_TOKEN",
    payload: {
      access_token,
    },
  };
};

export const getToken = () => {
  return {
    type: "GET_TOKEN",
  };
};
