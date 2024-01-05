import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container} from '@mui/material';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";

const AllProducts = () => {

    const [allproducts,setAllProducts] = useState(null)
    const [error,setError] = useState(null)
    const nav = useNavigate()

    const getAllProducts = async()=>{
        
        try{
            const res = await axios.get('https://dummyjson.com/products');
            setAllProducts(res.data.products);
            console.log(res.data.products)

        }
        catch(err){
            setError(err.response.data)
            console.log(err)
        }
      
    }
 
    useEffect(()=>{        
        getAllProducts()
    },[])
    

  return (
    
    <div>
        <Container maxWidth="xl" sx={{display:'flex',flexWrap:"wrap",gap:2,justifyContent:'center'}}> {/* Adjust maxWidth based on your design */}
        
        {allproducts && allproducts?.map((product) => (
        
        <Card onClick={()=>{nav(`/productdetails/${product.id}`)}} 
            key={product.id} sx={{ maxWidth: 300, marginBottom: 2,cursor:'pointer'}}>
            
            <CardMedia sx={{ height: 140 }} image={product.images[0]} title={product.title} />
            
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {product.description.slice(0,50)+'...'}
                </Typography>
            </CardContent>
            
            <CardActions>
                {/* Add actions or buttons if needed */}
            </CardActions>
            
            </Card>
        ))}

        {
        !allproducts && 
            <Stack sx={{ width: '100%'}} spacing={2}>
                <Alert severity="error">{error}</Alert>
            </Stack>   }

        </Container>
    </div>

  )
}

export default AllProducts