import React from 'react'
import {Paper, Typography} from '@material-ui/core'

export default function Read({ article }) {


    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Paper style={{backgroundColor: "#ffff"}}>
                {console.log(article)}
                <Typography>hello this is only for testing</Typography>
                <Typography>hello this is only for testing</Typography>
                <Typography>hello this is only for testing</Typography>
                <Typography>hello this is only for testing</Typography>
                <Typography>hello this is only for testing</Typography>
                <Typography>hello this is only for testing</Typography>
                <Typography>hello this is only for testing</Typography>
                <Typography>hello this is only for testing</Typography>
                </Paper>
            </div>
        </div>
    )
}