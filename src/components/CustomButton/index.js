import React from 'react'
import PropTypes from 'prop-types'
import {Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

const getStyles = makeStyles({
  root:{
    background: props=>props.background? props.background.primary : '#e7e7e7',
    '&:hover': {
      background: props=>props.background? props.background.secondary : '#bdbdbd',
    },
    borderRadius: '4px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    marginTop: '15px',
    marginBottom: '15px'
  }
})

const CustomButton = props=>{
  const {children, background, ...others} = props
  const styles = getStyles(props)

  return(
    <Button fullWidth className={styles.root} {...others}>{children}</Button>
  )
}

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  background: PropTypes.shape({
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string.isRequired
  })
}

export default CustomButton