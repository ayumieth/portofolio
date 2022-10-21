
const initialState = {
  darkMode: true,
}

const reducer = (state = initialState, action) => {
  console.log("action>>>", action.payload);
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state, darkMode: action.payload,
      }
    default:
      return state;
  }
}
export default reducer;