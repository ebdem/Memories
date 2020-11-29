import React from 'react';

import { Grid, CircularProgress } from "@material-ui/core";
import Post from './Post/Post.js';

import { useSelector } from "react-redux";

import useStyles from './styles';

export default function Posts(){

    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    

    return(
      !posts.length ? <CircularProgress /> : (
          <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {
                    posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post}/>
                        </Grid>
                    ) )
                }
          </Grid>
      )
    )
}