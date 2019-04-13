import React from 'react';
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

const ProjectListItem = (props) => {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="project"
          className={classes.media}
          height="200"
          image={props.project.thumbnail}
          title={props.project.name}
        />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.project.name}
          </Typography>
            <Typography component="p">
              {props.project.description}
              <br/>
              <span>Date Completed: {moment(props.project.date_completed).format('YYYY-MM-DD')}</span>
              <br/>
              <span>{props.project.tag_name}</span>
          </Typography>
          </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained" className={classes.button}>
          <a href={props.project.github} rel="noopener noreferrer" target="_blank">GitHub</a>
        </Button>
        <Button size="small" variant="contained" className={classes.button}>
          <a href={props.project.website} rel="noopener noreferrer" target="_blank">Website</a>
        </Button>
      </CardActions>
    </Card>
    </div>
  )
}

ProjectListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectListItem);