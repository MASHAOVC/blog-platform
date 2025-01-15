const initialState = {
  sorted: 'the cheapest',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT_OPTION':
      return { ...state, sorted: action.payload };

    default:
      return state;
  }
};

//пока просто как шаблон редьюсера для примера, надо будет изменить
