import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import ProjectListItem from '../ProjectListItem/ProjectListItem';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const ProjectList = (props) => {
  const { classes } = props;

        return (
            <section>
                <div>
                    <Header />
                </div>
                <div className={classes.root}>
                    <Grid item lg={12}>
                        { 
                            props.reduxState.projects.map(project => 
                            <ProjectListItem key={project.id} project={project} />) 
                        }
                        </Grid>
                </div>
            </section>
        );
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

ProjectList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(ProjectList));