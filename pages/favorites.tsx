import { makeStyles } from '@material-ui/styles'
import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { Favorite } from '../src/components/Favorite'
import { useEffect } from 'react';
import storage from '../utils/storage';


const useStyles = makeStyles({
    main: {
        height: '85vh',
        width: '100%',
        padding: 20
    }
})

const Favorites = () => {

    const styles = useStyles()

    const [favorites, setFavorites] = useState([])


    useEffect(() => {
        async function fetch() {
            const storageFavs: string | null = await storage.get('favs')
            if (storageFavs) {
                setFavorites(JSON.parse(storageFavs))
            }
        }

        fetch()
    }, [])

    return (
        <Grid container sx={{ flexGrow: 1 }} spacing={2} className={styles.main}>
            {
                favorites ?
                    favorites.map(favorite => {
                        return (
                            <Grid item xs={3}>
                                <Favorite favorite={favorite} />
                            </Grid>)
                    }) : ''
            }
        </Grid>
    )
}

export default Favorites
