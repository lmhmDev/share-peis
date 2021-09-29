import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { blue } from '@mui/material/colors'

const useStyles = makeStyles({
    main: {
        height: '5vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    github: {
        color: blue[300],
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline'
        }
    }
})

export const Footer = () => {

    const styles = useStyles();
    return (
        <Box className={styles.main}>
            Developed by
            <Link href="https://github.com/lmhmDev" passHref={true}>
                <Typography className={styles.github}>
                    Lorenzo Hermoso
                </Typography>
            </Link>
        </Box>
    )
}
