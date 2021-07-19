const INITIAL_STATE = {
  person: {},
  count: 0,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "AUTHORIZE":
      return {
        ...state,
        person: payload,
      };
    default:
      return state;
  }
};
