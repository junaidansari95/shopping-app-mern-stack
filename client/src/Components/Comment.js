import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Box } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));
export default function AlignItemsList(props) {
  const classes = useStyles();
  const { all_comments } = props;
  return (
    <List className={classes.root}>
      {all_comments ? all_comments.map(comment => {
        return (
          <Box key={comment.comment_id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={comment.name} src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={comment.name}
                secondary={" — " + comment.text} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </Box>
        )
      }) : null}
    </List>
  );
}