import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Container from '@material-ui/core/Container';

import { Input } from '../components'
import { contactItems } from '../data';
import { contactStyles } from '../styles';
import { convertArrToObj, formatMessage } from '../utils'
import { Layout } from '../components'

export default function Contact() {
  const classes = contactStyles()
  const [contact, setContact] = useState(convertArrToObj(contactItems,"title","defaultValue"))

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
            >
            <Grid item xs={12} className={classes.inputSpacing}>
              <Container maxWidth="sm">
                <Typography align="center" variant="h4" component="h1" gutterBottom>
                  {formatMessage("contact.title")}
                </Typography>
              </Container>        
            </Grid>        

            {contactItems.map((x, i) => 
              <Grid key={i} item xs={12} className={classes.inputSpacing}>
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

            <Grid item xs={12} className={classes.inputSpacing}>
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
