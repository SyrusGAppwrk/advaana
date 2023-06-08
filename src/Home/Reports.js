import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import img1 from "../assets/img/img1.jpg"
import img2 from "../assets/img/img3.png"
import React from 'react'
const arr = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img1 },
    { id: 3, img: img2 },
]

export default function Reports() {
    return (
        <>
            <Typography sx={{ fontWeight: "bold", mt: 4 }}>Reports(4)</Typography>
            <Box sx={{ mt: 2, display: "flex", gap: "40px" }}>
                {arr.map((itm) => {
                    return (
                        <Card variant="outlined" sx={{ maxWidth: 345, p: 1 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={itm.img}
                            />
                            <CardContent>
                                <Typography variant="body" component="div" sx={{ display: "flex", alignItems: "center",gap:"3px" }}>
                                    <Typography variant="body1" color="text" sx={{ fontSize: "12px", fontWeight: "bold" }}>
                                        My Reports
                                    </Typography><Typography variant="body2" color="text.secondary" sx={{ fontSize: "10px" }}>
                                        16 mins ago
                                    </Typography>
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                })}

            </Box>
        </>
    )
}
