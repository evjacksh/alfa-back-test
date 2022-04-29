import React, {useState} from 'react'
import { deleteItemAction,likeToggleAction } from '../../reducer'
import { useDispatch } from 'react-redux'
import { HeartFilled, DeleteFilled } from '@ant-design/icons'

function ContentCard({url,id,state}) {
  const [liked,setLiked] = useState(false)
  const dispatch = useDispatch()

  const like = () => {
    setLiked(!liked)

    const newArr = state.map(e => {
      if(e.id === id){
        return {...e, liked: !liked}
      } else{
        return e
      }
    })
    dispatch(likeToggleAction(newArr))
  }

  const deleteItem = () => {
    dispatch(deleteItemAction(state.filter(e => e.id !== id)))
  }

  const clazz = liked ? 'side_card_btn liked' : 'side_card_btn' 
  return (
    <div className='content_side_card'>
        <div className="card_image" style={{backgroundImage: `url('${url}')`}}>
            <div className="card_image_inner"></div>
        </div>
        <HeartFilled className={clazz} onClick={() => like()} />
        <DeleteFilled className='card_delete_btn' onClick={() => deleteItem()} />
    </div>
  )
}

export default ContentCard