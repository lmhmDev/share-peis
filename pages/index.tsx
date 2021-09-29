import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import PetsIcon from '@mui/icons-material/Pets'
import { makeStyles } from '@material-ui/styles'
import { blueGrey } from '@mui/material/colors'
import { Button, Card, CardMedia, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import axios from 'axios'
import storage from '../utils/storage'


export interface Response {
  data: Data[]
}

export interface Data {
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px'
  },
  container: {
    padding: 10
  },
})

const Home: NextPage = () => {

  const styles = useStyles()
  const [imgUrl, setImgUrl] = useState('')
  const [breed, setBreed] = useState('')
  const [object, setObject] = useState({})

  useEffect(() => {
    async function fetch() {
      const response: Response = await axios.get('https://api.thedogapi.com/v1/images/search?limit=1')
      setObject(response.data[0])
      setImgUrl(response.data[0].url)
      if (response.data[0].breeds[0]) {
        setBreed(response.data[0].breeds[0].name)
      }
    }
    fetch();

  }, [])

  const newDog = async () => {
    setImgUrl('')
    setBreed('')
    const response: Response = await axios.get('https://api.thedogapi.com/v1/images/search?limit=1')
    setObject(response.data[0])
    setImgUrl(response.data[0].url)
    if (response.data[0].breeds[0]) {
      setBreed(response.data[0].breeds[0].name)
    }
  }

  const fav = () => {
    const favs: string | null = storage.get('favs')
    if (favs) {
      const favsArray = JSON.parse(favs)
      favsArray.push(object)
      storage.set('favs', JSON.stringify(favsArray))
    } else {
      storage.set('favs', JSON.stringify([object]))
    }
  }

  return (
    <div>
      <Box className={styles.main}>
        <Card className={styles.container}>
          <Grid>
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
                {breed ? breed : 'Who knows...'}
              </Typography>
            </Grid>
            {imgUrl ?
              <>
                <CardMedia
                  component='img'
                  height={400}
                  width='100%'
                  image={imgUrl} />
                <Button onClick={newDog} style={{
                  marginTop: 10
                }}>
                  New Dog
                </Button>
                <Button onClick={fav} style={{
                  marginTop: 10
                }}>
                  Add to favorite
                </Button>
              </>
              :
              <Box style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <CircularProgress style={{ color: blueGrey[300] }} />
              </Box>
            }

          </Grid>
        </Card>
      </Box>
    </div>
  )
}

export default Home
