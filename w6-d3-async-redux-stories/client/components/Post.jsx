import React from 'react'
import {unix} from 'moment'

const styleObj = {
  background:"red",
  border: "2px solid green",
  width:"150px",
  margin:"2px"
}

const Post = ({post}) => {
    const {title, created, url, thumbnail} = post;
    const date = unix(created).format('dddd h:mm')
    return <div style={styleObj}>
        <h6>{title}</h6>
        <p>{date}</p> 
        {(thumbnail != "self") && <img src={thumbnail} />}
      </div>
}

export default Post
