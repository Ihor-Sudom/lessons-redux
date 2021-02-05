import { SET_LANGUAGE } from './language.actions';

const initalState = {
  lenguage: 'en'
}

const languageReduser = (state = initalState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        lenguage: action.payload
      }
    default:
      return state;
  }
}

export default languageReduser;