import { makeStyles } from '@material-ui/styles'
import { Button, Card, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';


const useStyles = makeStyles({
    container: {
        width: '100%'
    }
})

export const Favorite = (props: any) => {

    const styles = useStyles()

    return (
        <Card className={styles.container}>
            <Grid>
                <CardMedia
                    component='img'
                    height={200}
                    width='100%'
                    image={props.favorite.url} />
                <Grid item container flexDirection='column'>
                    <Typography style={{
                        fontWeight: 800
                    }}>
                        Breed:
                            </Typography>
                    <Typography
                        style={{
                            fontWeight: 300
                        }}>
                        {props.favorite.breeds[0] ? props.favorite.breeds[0].name : 'Who knows...'}
                    </Typography>
                </Grid>
                <Button onClick={() => props.remove(props.favorite.url)} style={{
                    marginTop: 10,
                    fontSize: 10,
                }}>
                    Remove
                </Button>

            </Grid>
        </Card>
    )
}
