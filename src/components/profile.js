import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { loadCSS } from 'fg-loadcss';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  paper: {
    padding: theme.spacing(1),
    margin: 'auto',
    maxWidth: 400,
  },
  spacing: {
    margin: theme.spacing(1),
  },
}));

export default function PaperSheet() {
  const classes = useStyles();
  const linkedIn = "https://www.linkedin.com/in/jpancho/";
  const gitHub = "https://github.com/jpancho";

  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  const [elevation, setElevation] = useState(1);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}
             onMouseOver={() => setElevation(10)}
             onMouseOut={() => setElevation(1)}
             elevation={elevation} >
        <Typography className={classes.spacing} variant="h5" component="h3">
          Hi I'm Justin Pancho
        </Typography>
        <Typography component="p">
          a Software Developer with a passion for games, technology, sports, and great food
        </Typography>
        <IconButton className={clsx(classes.spacing, 'fab fa-linkedin')} href={linkedIn} />
        <IconButton className={clsx(classes.spacing, 'fab fa-github-square')} href={gitHub} />
      </Paper>
    </div>
  );
}