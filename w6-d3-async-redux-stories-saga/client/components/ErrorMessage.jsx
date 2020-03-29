import React from 'react'
import {connect} from 'react-redux'

export const ErrorMessage = (props) => {
  return (
    <div className='error'>
      {props.errorMessage}
    </div>
  )
}

export const mapStateToProps = ({errorMessage})=> errorMessage

export default connect(mapStateToProps)(ErrorMessage)
