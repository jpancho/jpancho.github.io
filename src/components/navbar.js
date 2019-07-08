import React from 'react';
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PaperSheet from './profile';
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <Router>
      <AppBar position="static" color="default">
        <Toolbar>
          <Grid
            justify="space-between"
            container
            spacing={24}
          >
            <Grid item>
              <Typography variant="h5">
                <Link href="/" underline="none" color="default">
                  Justin Pancho
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Button color="inherit" href="/experience">Experience</Button>
              <Button color="inherit" href="/projects">Projects</Button>
            </Grid>
          </Grid>
        </Toolbar>
        <Route path="/" exact component={PaperSheet} />
      </AppBar>
    </Router>

  )
}