import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

export default function Folder() {
    return (
        <>
            <Typography sx={{ fontWeight: "bold", mt: 4 }}>Folders(1)</Typography>
            <Box sx={{ mt: 2, display: "flex", gap: "40px" }}>
                <Card variant="outlined" sx={{ width: "200px", p: 2, display: 'flex', alignItems: "center", justifyContent: 'center' }}>
                    <AddIcon sx={{ color: "#1976D2" }} />
                </Card>
                <Card variant="outlined" sx={{ width: "200px", p: 2, display: 'flex', alignItems: "center", justifyContent: 'center' }}>

                </Card>
            </Box>
        </>
    )
}
