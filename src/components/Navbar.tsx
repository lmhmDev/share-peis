import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import PetsIcon from '@mui/icons-material/Pets'
import { makeStyles } from '@material-ui/styles'
import { blueGrey } from '@mui/material/colors'
import Link from 'next/link'


const useStyles = makeStyles({
    main: {
        height: '10vh',
        padding: 10,
        borderBottom: '1px solid',
        borderBottomColor: blueGrey[100],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        color: blueGrey[700]
    },
    links: {

    },
    fullLogo: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        color: blueGrey[700]
    },
    logo: {
        color: blueGrey[300],
        '&:hover': {
            color: blueGrey[500]
        }
    },
})

export const Navbar = () => {

    const styles = useStyles()

    return (
        <Box className={styles.main}>
            <div className={styles.fullLogo}>
                <PetsIcon className={styles.logo} fontSize={'large'} />
                <Typography variant="h4" component="p">
                    Share Peis
                </Typography>
            </div>
            <div className={styles.links}>
                <Link href="/" passHref={true}>
                    <Button variant="text">Home</Button>
                </Link>
                <Link href="/favorites" passHref={true}>
                    <Button variant="text">Favorites</Button>
                </Link>
            </div>

        </Box>
    )
}
