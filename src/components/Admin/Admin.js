import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function Admin(props) {
  const { classes } = props;

  return (
        <section>
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Admin</h1>
            </header>
        </div>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell align="right">{'\u00A0'}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.reduxState.projects.map(project => (
            <TableRow key={project.id}>
              <TableCell component="th" scope="project">
                {project.name}
              </TableCell>
              <TableCell align="right"><button>DELETE</button></TableCell>
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

export default connect(mapReduxStateToProps)(withStyles(styles)(Admin));

// class Admin extends Component {
//     render() {
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <h1 className="App-title">Admin</h1>
//                 </header>
                
//             </div>
//         );
//     }
// }

// export default Admin;