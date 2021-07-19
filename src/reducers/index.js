const initialState = {
  person: {},
  token: "",
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    default:
      break;
  }
};
