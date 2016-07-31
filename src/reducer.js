const fooReducer = (state={foo: 'default value'}, action) => {
  switch (action.type) {
    case 'WOW':
      return {...state, foo: 'WOW'}
    case 'OK':
      return {...state, foo: 'OK'}
    default:
      return state
  }
}

export default fooReducer