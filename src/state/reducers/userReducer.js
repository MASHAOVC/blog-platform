const initialState = {
  user: {
    authorised: false,
  },
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTHORISATION_STATUS':
      return { ...state, user: { ...state.user, authorised: action.payload } };

    default:
      return state;
  }
};
