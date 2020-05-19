import React, { Component } from 'react'
import * as M from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import imgNoFound from "../../../public/shared/image-not-found.png"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



// {
//     this.props.movies.map(x =>
//         <div key={x.id}> 
//             <h1 >{x.name}</h1> 
//             <p>{x.description}</p>
//             <Button
//             variant="contained"
//             color="primary"
//                 href={x.url}
//             >
//                 TEST</Button>
//         </div>
//         )
//     }
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    cardSize: {
      maxWidth: 345,
    }
  }));

  export default function BodyElement(data) {
    const classes = useStyles();
  
  
    return (
      <div className={classes.root}>
        <M.Grid container spacing={1}>
          { data.testVideos.map(v => 
          <M.Grid key={v.id} item xs={4}>
            {/* <Router>
            <Link to={v.url}> */}
            <M.Card className={classes.cardSize}>
            <M.CardActionArea>
              <M.CardMedia 
                    component="img"
                    height="140"
                    image={imgNoFound}
              />
              <M.CardContent>
              <M.Typography gutterBottom variant="h5" component="h2">
                  {v.name}
              </M.Typography>
              <M.Typography variant="body2" color="textSecondary" component="p">
                   Vistas/Like&Dislikes/Favorito
              </M.Typography>
              </M.CardContent>
            </M.CardActionArea>
          </M.Card>
            {/* </Link>
            </Router> */}
          </M.Grid>
       
              //  <M.Grid item xs={4} key={v.id}>
              //    <h1 >{v.name}</h1> 
              //           <p>{v.description}</p>
              //           <M.Button
              //           variant="contained"
              //           color="primary"
              //               href={v.url}
              //           >
              //               TEST</M.Button>
              //  </M.Grid>
          )
          }
        
        </M.Grid>
      </div>
    );
  }