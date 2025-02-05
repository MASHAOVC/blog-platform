const initialState = {
  user: {
    token: null,
  },
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, user: { ...state.user, token: action.payload } };

    case 'LOG_OUT':
      return { ...state, user: { ...state.user, token: null } };

    default:
      return state;
  }
};
