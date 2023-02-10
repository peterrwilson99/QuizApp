import React from 'react'
import { AppBar, Box, ButtonBase, Toolbar, Typography } from '@mui/material'

function Navigation() {

    return (
        <AppBar
            position="static"
            style={{ backgroundColor: 'transparent' }}
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <ButtonBase
                        href="/"
                    >
                        <Typography variant="h6" noWrap color='text'>
                            Quizzie
                        </Typography>
                    </ButtonBase>
                </Box>
                <nav>
                    <ButtonBase
                        href="/seng468"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        <Typography className="font-medium" color='text' >SENG 468</Typography>
                    </ButtonBase>
                    <ButtonBase
                        href="/seng460"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        <Typography className="font-medium" color='text' >SENG 460</Typography>
                    </ButtonBase>
                </nav>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation