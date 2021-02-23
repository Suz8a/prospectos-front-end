


export const storeReducer = (
    state: {user:undefined},
    action: any
  ) => {
    switch (action.type) {
      case "SET_USER":

        return {
          ...state,
          user: action.payload.user
        };
  
  };