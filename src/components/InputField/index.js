import React from 'react'
import PropTypes from 'prop-types'
import {FormControl, InputBase, InputLabel, FormHelperText} from '@material-ui/core' 
import {blue} from '@material-ui/core/colors'
import {makeStyles} from '@material-ui/styles'

const getStyles = makeStyles({
  input: {
    display: 'flex',
    marginTop: '10px'
  },
  inputLabel:{
    position: 'relative'
  }, 
  inputField:{
    border: '2px solid #e7e7e7',
    borderRadius: '4px',
    lineHeight: '12px',
    padding: '0 10px',
  },
  focus: {
    borderColor: blue[100]
  },
  error:{
    borderColor: '#ff8e8e'
  }
})

const InputField = ({label, name, ...others})=>{
  
  const styles = getStyles()
  const id = `${name}_input`
  
  return(
    <FormControl className={styles.input} fullWidth error={others.error}>
      <InputLabel className={styles.inputLabel} htmlFor={id} disableAnimation shrink>{label}</InputLabel>
      <InputBase
        name={name}
        {...others} 
        classes={{
          focused: styles.focus,
          error: styles.error
        }} 
        className={styles.inputField} 
        id={id}
      />
      {others.error && <FormHelperText>Password Incorrect! Please try again</FormHelperText>}
    </FormControl>
  )
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default InputField