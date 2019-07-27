import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from "@material-ui/core/List";

const useStyles = makeStyles(theme => ({
  root: {
    width: '70%',
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function Experience() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Absolute Software</Typography>
          <Typography className={classes.secondaryHeading}>QA Automation Engineer Intern, Jan 2018 - August 2018</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <List>Developed and maintained testautomation frameworks using Java, Selenium, Rest Assured, Android Debug Bridge,TestNG, and Maven</List>
            <List>Managed, configured, and scheduled CI/CD using Jenkins, Jenkins API, Docker, Artifactory, declarative pipeline, and Python scripts</List>
            <List>Implemented performance tests using JMeter, Fiddler, Puppeteer, and Chrome Dev Tools</List>
            <List>Tested middle tier API using SoapUI and integrated Groovy scripts</List>
            <List>Provided support and documentation to QA teams with regards to tools, tests, frameworks, and configurations</List>
            <List>Utilized Jira for project tracking, BitBucket for collaboration,and Confluence for documentation</List>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}