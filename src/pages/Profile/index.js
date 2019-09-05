import React from 'react'
import {Grid, Typography, Divider, Link} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

import profileImage from '../../resources/Sokina_Smile.svg'
import CustomButton from '../../components/CustomButton'
import Header from '../../components/Header'

const getStyles = makeStyles({
  background: {
    background: '#e6ffdd',
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
    textAlign: 'center',
    width: '100%'
  },
  link: {
    color: '#4a4a4a'
  }
})

const Profile = props=>{
  
  const styles = getStyles()

  return(
    <Grid className={styles.background} container direction='column' justify='flex-start' alignItems='stretch'>
      <Grid container item>
        <Header />
      </Grid>
      <Grid className={styles.content} container item justify="center" alignItems="center">
        <Grid className={styles.body} container direction='column' justify='center' alignItems='center'>
          <img src={profileImage} alt='loginimage' />
          <Typography className={styles.intro} variant='h6' >
            Welcome to ShobHobe!
            <Divider variant='fullWidth'/>
          </Typography>
          <Typography className={styles.intro} variant='caption' >
            Press below to unlock your dashboard
          </Typography>
          <CustomButton 
              background={{primary: '#e73948', secondary: '#d32f2f'}}
            >
              + Add Order
          </CustomButton>
          <Link classes={{root: styles.link}} underline='none' href='asdasd'>
            Change Store Info
          </Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Profile