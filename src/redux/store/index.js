// store/index.js
import { createStore } from 'redux';

// Defina o estado inicial
const initialState = {
  name: '',
  email: '',
  phone: ''
};

// Defina uma função reducer para atualizar o estado
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FORM':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// Crie a store do Redux
const store = createStore(reducer);

export default store;
