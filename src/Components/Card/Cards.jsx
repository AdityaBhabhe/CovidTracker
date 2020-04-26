 import React from 'react'
import {Card,CardContent, Typography,Grid} from '@material-ui/core'
import Countup from 'react-countup'
import './Cards.css'
const Cards = (props) => {
    console.log("abc",props)
    if(!props.data.confirmed){
        return "Loading....."
    }
    return(
        <div className="container">
            <Grid container spacing={3} justify="centre">
                <Grid  item component={Card} xs={12} md={3} className="card infected">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Confirmed</Typography>
                        <Typography variant='h5'>
                            <Countup
                                start={0}
                                end={props.data.confirmed}
                                duration={2.5}
                                separator=","

                            />
                        </Typography>
                        <Typography color="textSecondary">{props.data.lastUpdatedTime}</Typography>
                        <Typography variant="body2">Number of active cases of covid 19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}xs={12} md={3} className="card deaths">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant='h5'>
                            <Countup
                                    start={0}
                                    end={props.data.deaths}
                                    duration={2.5}
                                    separator=","

                                />
                        </Typography>
                        <Typography color="textSecondary">{props.data.lastUpdatedTime}</Typography>
                        <Typography variant="body2">Number of recoveries of covid 19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="card recovered">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant='h5'>
                            <Countup
                                        start={0}
                                        end={props.data.recovered}
                                        duration={2.5}
                                        separator=","

                                    />
                        </Typography>
                        <Typography color="textSecondary">{props.data.lastUpdatedTime}</Typography>
                        <Typography variant="body2">Number of deaths due to covid 19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;