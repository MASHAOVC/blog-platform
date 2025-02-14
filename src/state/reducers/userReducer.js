const initialState = {
  user: {
    email: '',
    username: '',
    image: null,
    token: '',
  },
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, user: { ...state.user, token: action.payload } };

    case 'LOG_OUT':
      return { ...state, user: { ...state.user, token: '' } };

    case 'SET_USER_DATA':
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload.email,
          username: action.payload.username,
          image: action.payload.image,
        },
      };

    default:
      return state;
  }
};
