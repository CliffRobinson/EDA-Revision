import React from 'react'
import { connect } from 'react-redux'
import { requestPosts } from '../actions'



export const LoadSubreddit = ({ children, dispatch }) => (
  <div>
    <button onClick={() => {
      //console.log("I'm clickin da button!")
      dispatch(requestPosts('newzealand'))
    }}>
      Fetch Posts
    </button>
    {children}
  </div>
)

export default connect()(LoadSubreddit)
