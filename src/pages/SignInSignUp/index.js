import React,{useState} from 'react'
import {Grid, Typography, InputAdornment, Divider} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import ReactCountryFlag from 'react-country-flag'
import {ArrowDropDown} from '@material-ui/icons'

import signInImage from '../../resources/powerupsokina.svg'
import InputField from '../../components/InputField'
import CustomButton from '../../components/CustomButton'
import Header from '../../components/Header'

import {checkNumber} from '../../dumbyApi'

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
  form:{
    width: '100%'
  }
})

const SignInSignUp = props=>{

  const {history} = props

  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)

  const styles = getStyles()

  const handleChange = event=>{
    const regex = RegExp('^[0-9]{0,11}$')
    const {target:{value}} = event
    if(regex.test(value))
      setPhone(value)
  }

  const handleSubmit = e=>{
    e.preventDefault()
    setLoading(true)
    checkNumber(phone)
      .then(({found})=>{
        if(found){
          history.push({
            pathname: '/signin',
            state: {phone}
          })
        }else{
          history.push({
            pathname: '/signup',
            state: {phone}
          })
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
              name="phone-no"
              placeholder="Please enter your phone no."
              onChange={handleChange}
              value={phone}
              disabled={loading}
              startAdornment={
                <InputAdornment position='start'>
                  <ReactCountryFlag code='BD' svg/>
                  <ArrowDropDown />
                </InputAdornment>
              }
            />
            <CustomButton onClick={handleSubmit} disabled={loading}>Sign In/ Sign Up</CustomButton>
          </form>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SignInSignUp