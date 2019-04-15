import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const moment = require('moment');

// styling with material ui
const styles = theme => ({
  card: {
    display: 'inline-block',
    margin: 'auto',
    padding: '10px',
    backgroundColor: 'white',
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
  button: {
      margin: theme.spacing.unit,
      background: 'linear-gradient(360deg, #99D22B 10%, #FBFF00 360%)',
      color: 'white',
      textColor: 'white',
  },
});



class ProjectListItem extends Component{ 

  // Can now add componentDidMount() - if we wanted to...

  getCardImage = (project, classes) => {
    if ( project.thumbnail !== '' && project.thumbnail !== null ) {
      return <CardMedia
        component="img"
        alt="project"
        className={classes.media}
        height="200"
        image={project.thumbnail}
        title={project.name}
      />
    }

    return null;
  } 

  render () {
    const { classes } = this.props;

    // Do some conditional rendering
    let gitHubJsx = 'Sorry no link';
    if (this.props.project.github !== '' && this.props.project.github !== null) {
      gitHubJsx = <Button size="small" variant="contained" className={classes.button} 
        href={this.props.project.github} rel="noopener noreferrer" target="_blank">
        GitHub</Button> 
    }

    return (
      <div>
        <Card className={classes.card}>
        <CardActionArea>
            { this.getCardImage(this.props.project, classes) }
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.project.name}
            </Typography>
              <Typography component="p">
                {this.props.project.description}
                <br/>
                <span>Date Completed: {moment(this.props.project.date_completed).format('YYYY-MM-DD')}</span>
                <br/>
                <span>{this.props.project.tag_name}</span>
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
          { gitHubJsx }
          <Button size="small" variant="contained" className={classes.button}
            href={this.props.project.website} rel="noopener noreferrer" target="_blank">
            Website
          </Button>
        </CardActions>
      </Card>
      </div>
    )
  }
}

ProjectListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectListItem);