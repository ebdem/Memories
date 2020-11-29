import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography  } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import Delete from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
 
import useStyles from './styles';

export default function Post(){
    const classes = useStyles();
    return(
        <Card className={classes.card}>
                
        </Card>
    )
}