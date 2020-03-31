import React from 'react'
import {connect} from 'react-redux'

export const ErrorMessage = (props) => {
  return (
    <div className='error'>
      Error Message: {props.errorMessage}
    </div>
  )
}

export const mapStateToProps = ({errorMessage}) => {return {errorMessage}}

export default connect(mapStateToProps)(ErrorMessage)
