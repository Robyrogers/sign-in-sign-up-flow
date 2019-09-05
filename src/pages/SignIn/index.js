import React,{useState} from 'react'
import {Redirect} from 'react-router-dom'
import {Grid, Typography, InputAdornment, Checkbox, FormControlLabel, Link, IconButton, Divider} from '@material-ui/core'
import {makeStyles, withStyles} from '@material-ui/styles'
import ReactCountryFlag from 'react-country-flag'
import {ArrowDropDown, CheckCircle, Lock, Visibility, VisibilityOff} from '@material-ui/icons'

import signInImage from '../../resources/powerupsokina.svg'
import InputField from '../../components/InputField'
import CustomButton from '../../components/CustomButton'
import Header from '../../components/Header'

import {checkCredentials} from '../../dumbyApi'

const getStyles = makeStyles({
  background: {
    background: '#fcfcfc',
    height: "100vh"
  },
  content: {
    flexGrow: 1,
  },
  body: {
    maxWidth: '500px',
    background: 'white',
    padding: '15px 20px',
    border: '1px solid #e7e7e7',
    borderRadius: '10px'
  },
  intro: {
    boxSizing: 'border-box',
    marginTop: '5px',
  },
  form: {
    width: '100%'
  },
  iconButton:{
    padding: 0
  }
})

//Checkbox with custom styles
const CustomCheckbox = withStyles({
  root: {
    color: '#e7e7e7',
    '&$checked': {
      color: '#27C278',
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />)

//CheckCircle Icon with custom styles
const CustomCheckCircle = withStyles({
  colorPrimary:{
    color: '#27C278'
  }
})(props=><CheckCircle {...props}/>)

//Sign in UI for the '/signin' route
const SignIn = props=>{
  
  const {location:{state}, history} = props
  
  const [showPassword, setShowPassword] = useState(false)
  const [fields, setFields] = useState({
    phone: state? state.phone:'',
    pass: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({})


  if(!state)
    return <Redirect to='/'/> 

  const styles = getStyles()

  const handlePasswordVisibility = ()=>{
    setShowPassword(prev=>!prev)
  }

  const handleChange = event=>{
    const {target:{name, value}} = event
    switch(name){
      case 'phone':{
        const regex = RegExp('^[0-9]{0,11}$')
        if(regex.test(value)){
          setFields(prev=>({
            ...prev,
            [name]: value
          }))
        }
        break
      }
      default:
        setFields(prev=>({
          ...prev,
          [name]: value
        }))
    }
  }

  const handleSubmit = ()=>{
    setLoading(true)
    checkCredentials(fields.phone, fields.pass)
      .then(({found})=>{
        if(!found){
          setError({
            pass: 'Password Mismatch'
          })
          setLoading(false)
        }else{
          setError({})
          history.push('/profile')
        }
      })
      .catch(err=>{
        console.log(err)
        setLoading(false)
      })
  }

  return(
    <Grid className={styles.background} container direction='column' justify='flex-start' alignItems='stretch'>
      <Grid container item>
        <Header />
      </Grid>
      <Grid className={styles.content} container item justify="center" alignItems="center">
        <Grid className={styles.body} container direction='column' justify='center' alignItems='center'>
          <img src={signInImage} alt='loginimage' />
          <Typography className={styles.intro} variant='h6' >
            Enter the ShobHobe Universe!
            <Divider variant='fullWidth'/>
          </Typography>
          <form className={styles.form}>
            <InputField
              label="Phone No:"
              name="phone"
              value={fields.phone}
              onChange={handleChange}
              disabled
              placeholder="Please enter your phone no."
              startAdornment={
                <InputAdornment position='start'>
                  <ReactCountryFlag code='BD' svg/>
                  <ArrowDropDown />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position='end'>
                  <CustomCheckCircle 
                    color='primary'
                  />
                </InputAdornment>
              }
            />
            <InputField
              label="Password:"
              name="pass"
              type={showPassword? 'text':'password'}
              value={fields.pass}
              onChange={handleChange}
              disabled={loading}
              error={error.pass? true: false}
              startAdornment={
                <InputAdornment position='start'>
                  <Lock />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton className={styles.iconButton} onClick={handlePasswordVisibility}>
                    {showPassword? <Visibility />:<VisibilityOff /> }
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormControlLabel
              control={
                <CustomCheckbox/>
              }
              label='Remember Me' 
            />
            <CustomButton 
              disabled={loading} 
              background={{primary: '#ffe335', secondary: '#fbc028'}}
              onClick={handleSubmit}
            >
              Sign In
            </CustomButton>
          </form>
          <Link underline='none' href='asdasd'>
            Forgot Password?
          </Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SignIn