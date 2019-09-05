import React from 'react'
import {withRouter} from 'react-router-dom'
import {Grid, Button, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

import logo from '../../resources/shobhobe-logo.svg'

const getStyles = makeStyles({
  body: { 
    background: 'white',
  },
  logo: {
    margin: '0 5%',
    paddng: 0
  },
  contactButton: {
    margin: '0 5%',
    background: 'white',
    ':hover': {
      background: '#fcfcfc'
    },
    borderRadius: '4px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)'
  }
})

const Header = props=>{

  const {location:{pathname}} = props

  const classes = getStyles()

  return(
    <Grid className={classes.body} container justify='space-between' alignItems='center'>
      <img className={classes.logo} src={logo} alt='shobhobe-logo'/>
      <Button className={classes.contactButton} variant='contained'>
        <Typography variant='button'>
          {pathname==='/signup'? 'Sign In':'Contact Us'}
        </Typography>
      </Button>
    </Grid>
  )
}

export default withRouter(Header)