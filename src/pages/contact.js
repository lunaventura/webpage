import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Container from '@material-ui/core/Container';


import { Input } from '../components'
import { makeStyles } from '@material-ui/core/styles';

import { formatMessage } from '../utils'
import { Layout } from '../components'
const items = [ 
  { title: "name", required: true, multiline:false, },
  { title: "email", required: true, multiline: false,  },
  { title: "message", required: true, multiline: true }
]

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '2rem',
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Contact() {
  const classes = useStyles()
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.name]: e.value
    })
  }

  return (
    <Layout title={formatMessage("contact.title")}>
      <div className={classes.root}>
          <Grid 
            container
            spacing={3}
            >
            <Grid item xs={12}>
              <Container maxWidth="sm">
                <Typography align="center" variant="h4" component="h1" gutterBottom>
                  {formatMessage("contact.title")}
                </Typography>
              </Container>        
            </Grid>        

            {items.map((x, i) => 
              <Grid key={i} item xs={12}>
                <Container maxWidth="sm">
                  <Input 
                    onChange={handleChange} 
                    value={contact[x.title]} 
                    name={x.title} 
                    label={x.title}
                    multiline={x.multiline}
                  />
                </Container>
              </Grid>
            )}

            <Grid item xs={12}>
              <Container maxWidth="xs">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  endIcon={<Icon>send</Icon>}
                  fullWidth
                >
                  {formatMessage("general.send")}
                </Button>
              </Container>        
            </Grid>        

          </Grid>        
      </div>
    </Layout>
  );
}
