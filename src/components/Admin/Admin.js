import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AdminForm from '../AdminForm/AdminForm';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

// styling with material ui
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  button: {
      margin: theme.spacing.unit,
      background: 'linear-gradient(360deg, #99D22B 10%, #FBFF00 360%)',
      color: 'white',
      textColor: 'white',
  },
});

// stateless component to render materia ui table
function Admin(props) {
  const { classes } = props;

   // saga function to delete project
   // had to map the project id into the arrow button 
   // no state on component to access
   function deleteProject(projectID) {
      console.log(projectID);
      props.dispatch({
          type: 'DELETE_PROJECT',
          payload: projectID
      });
  }

  return (
        <section>
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Admin</h1>
            </header>
        </div>
        <Router>
            <button><Link to="/">Back to Projects</Link></button>
        </Router>
        <AdminForm />
        <Paper className={classes.root}>
        <Table className={classes.table}>
            <TableHead>
            <TableRow>
                <TableCell>Project Name</TableCell>
                <TableCell align="right">{'\u00A0'}</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {props.reduxState.projects.map(projectItem => (
                <TableRow key={projectItem.id}>
                <TableCell component="th" scope="project">
                    {projectItem.name}
                </TableCell>
                <TableCell align="right">
                    <Button type="button" className={classes.button}
                    onClick={() => deleteProject(projectItem.id)}>DELETE
                    </Button>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </Paper>
        </section>
  );
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

Admin.propTypes = {
    classes: PropTypes.object.isRequired,
};

// export default connect(mapReduxStateToProps)(withStyles(styles)(Admin));

const StyledAdmin = withStyles(styles)(Admin);
export default connect(mapReduxStateToProps)(StyledAdmin);