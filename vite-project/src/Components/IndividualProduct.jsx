import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Container, useMediaQuery, useTheme } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const IndividualProduct = () => {

    const {id} = useParams();
    const [error,setError] = useState(null)
    const [indProductData,setIndProdData] = useState(null);
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'))
    const [rating,setRating] = useState(null)

    const containerStyle ={
        display:'flex',
        justifyContent: isLargeScreen ? 'flex-start' : 'center'
    }

    const getProductDetails = async()=>{
        
        try{
            const res = await axios.get(`https://dummyjson.com/products/${id}`);
            console.log(res.data)
            setIndProdData(res.data)
            setRating(res.data.rating)
        }
        catch(err){
            setError(err)
            console.log(err)
        }
    }
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
        
    useEffect(()=>{
        getProductDetails();
    },[])

    return (

        <Container sx={{}}>
            <Carousel sx={{width:"100%"}}>
                {indProductData?.images.map((image, index) => (
                    <Paper key={index}>
                    <img src={image} alt={`Slide ${index}`} style={{ width: '100%', height:'350px'}} />
                    </Paper>
                ))}
            </Carousel>

            <Box sx={{ minWidth: 275, marginTop:'1rem' }}>
                <Card variant="outlined"> <React.Fragment>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {indProductData?.brand}
                        </Typography>
                        <Typography variant="h5" component="div" sx={{fontWeight:'bold'}}>
                            ${indProductData?.price}.00
                        </Typography>
                        <Typography sx={{fontWeight:'bold'  }} color="text.primary">
                            {indProductData?.title}
                        </Typography>
                        
                    </CardContent>
                    
                </React.Fragment>
                </Card>
            </Box>

            <Box sx={{ minWidth: 275, marginTop:'1rem' }}>
                <Card variant="outlined"> <React.Fragment>
                    <CardContent>
                        
                        <Typography variant="h5" component="div" sx={{fontWeight:'bold'}}>
                            Details
                        </Typography>
                        
                        <Typography sx={{}} color="text.primary">
                            {indProductData?.description}
                            <Stack spacing={1}>
                                <Rating name="half-rating-read" value={rating} precision={0.5} 
                                readOnly />
                            </Stack>
                        </Typography>
                        
                    </CardContent>
                    
                </React.Fragment>
                </Card>
            </Box>
        </Container>
        
    )
}

export default IndividualProduct