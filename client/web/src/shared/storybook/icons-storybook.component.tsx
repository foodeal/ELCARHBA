import React from 'react';

import { makeStyles, createStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Icon } from '../components';

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      height: 140,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }
  })
);

export const Storybook = () => {
  const classes = useStyles();
  const icons = [
    'activity',
    'square',
    'help',
    'document',
    'content',
    'close',
    'group',
    'fire',
    'firewall',
    'flame',
    'flash',
    'fuel',
    'gas-storage',
    'joist',
    'joist-2',
    'logs',
    'oil',
    'roof',
    'roof-2-1',
    'tiles',
    'vector',
    'ventilation',
    'wood-2',
    'fan',
    'chaleur',
    'calendar',
    'stroke-1',
    'profile',
    'rounded-profile',
    'circle',
    'show',
    'hide',
    'shield',
    'location',
    'info-circle',
    'round-check',
    'book-mark',
    'chat',
    'logout',
    'wallet',
    'pencil',
    'paper',
    'paper-plus',
    'left-arrow',
    'up-arrow',
    'down-arrow',
    'home',
    'graph',
    'filter',
    'chart',
    'download',
    'upload',
    'question-mark',
    'more-square',
    'time-circle',
    'lock',
    'missed-call',
    'video',
    'send',
    'menu',
    'calling',
    'folder'
  ];

  return (
    <div className='p-rem-2'>
      <Grid container justifyContent='center' spacing={2}>
        {icons.map(name => (
          <Grid key={name} item xs={4} sm={3} md={2} lg={1}>
            <Paper className={classes.paper}>
              <Icon
                prefix='elcarhba'
                name={name}
                color='#0057B7'
                style={{ height: '30px', width: '30px' }}
              />
              <Typography variant='h5' component='h4'>
                {' '}
                {name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
