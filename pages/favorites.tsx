import { makeStyles } from '@material-ui/styles'
import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { Favorite } from '../src/components/Favorite'
import { useEffect } from 'react';
import storage from '../utils/storage';


export interface Favorite {
    breeds: Breed[];
    id: string;
    url: string;
    width: number;
    height: number;
}

export interface Breed {
    weight: Metrics;
    height: Metrics;
    id: number;
    name: string;
    bred_for: string;
    breed_group: string;
    life_span: string;
    temperament: string;
    reference_image_id: string;
}

export interface Metrics {
    imperial: string;
    metric: string;
}


const useStyles = makeStyles({
    main: {
        height: '85vh',
        width: '100%',
        padding: 20
    }
})

const Favorites = () => {

    const styles = useStyles()

    const [favorites, setFavorites] = useState<Favorite[]>([])

    const remove = (url: string) => {
        if (favorites) {
            const newFavs = favorites.filter(favorite => favorite.url != url)
            setFavorites(newFavs)
            storage.set('favs', JSON.stringify(newFavs))
        }
    }


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
                            <Grid item xs={3} key={favorite}>
                                <Favorite favorite={favorite} remove={remove} />
                            </Grid>)
                    }) : ''
            }
        </Grid>
    )
}

export default Favorites
