import { useEffect, useState } from 'react';
import './App.css';
import ContentCard from './components/contentCard/ContentCard';
import { useSelector, useDispatch} from 'react-redux'
import { getData} from './actions'

function App() {
  const state = useSelector(state => state.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
  },[])
  
  const [data,setData] = useState(state)
  const [activeFilters,setActiveFilters] = useState(false)
  const [likedFilters,setLikedFilters] = useState(false)

  useEffect(() => {
    if(likedFilters === false){
      setData([...state])
    } else{
      setData([...state.filter(e => e.liked)])
    }
  },[state])

  const onlyLiked = () => {
    setLikedFilters(!likedFilters)

    if(!likedFilters){
      setData(state.filter(elem => elem.liked))
    } else{
      setData(state)
    }
  }

  let contentList;
  if(!likedFilters){
    if(data.length === 0 && likedFilters === false){
      <h2 className='noLikedContent'>No posts :(</h2> 
    } else{
      contentList = data.map(e => <ContentCard key={e.id} {...e} state={state}/>)
    }
  } else{
    if(data.length === 0 && likedFilters === true){
      contentList = <div className='noLikedContent'> No liked posts :(</div> 
    } else{
      contentList = data.map(e => <ContentCard key={e.id} {...e} state={state}/> )
    }
  }

  const clazz = activeFilters ? 'filters_side_content active' : 'filters_side_content'
  const clasz = likedFilters ? ' liked' : ''
  const moreButtonClass = data.length === 0 && likedFilters === true ? 'app_more_btn hide' : 'app_more_btn'

  return (
    <div className="App">
      <div className="app_content_side">
        { contentList }
        <span className={moreButtonClass} onClick={() => dispatch(getData())}> More</span>
      </div>
      <div className="app_filters_side">
        <div className='filters_side_button' onClick={() => setActiveFilters(!activeFilters)}>Filters <span className='filters_side_icon'></span></div>
        <ul className={clazz + clasz} onClick={() => onlyLiked()} >
          <li>
            Liked posts
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
