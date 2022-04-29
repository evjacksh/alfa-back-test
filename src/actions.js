import { getDataAction} from "./reducer"
  
export const getData = () => {
    return function(dispatch) {
      fetch('https://api.thecatapi.com/v1/images/search?limit=5', {
        headers: {
          'x-api-key': '9d1dfcdf-4a50-4ff7-90d4-f7777b690554',
        }
      })
      .then(res => res.json())
      .then(json => dispatch(getDataAction(json)))
      .catch(err => console.log(err))
    }
}

