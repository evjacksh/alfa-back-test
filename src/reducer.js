
const initialState = {
  data: []
}

const GET_DATA = 'GET_DATA'
const DELETE_ITEM = 'DELETE_ITEM'
const LIKE_TOGGLE = 'LIKE_TOGGLE'

export const reducer = (state = initialState,action) => {
  const {payload,type} = action
    switch(type){
      case GET_DATA:
        return {...state, data: [...state.data, ...payload]}
      case DELETE_ITEM:
        return {...state, data: [...payload]}
      case LIKE_TOGGLE:
        return{...state, data: [...payload]}
      default:
        return state
    }
  }
  
export const getDataAction = payload => ({type: GET_DATA, payload})
export const deleteItemAction = payload => ({type: DELETE_ITEM, payload})
export const likeToggleAction = payload => ({type: LIKE_TOGGLE, payload})