import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export default function Products() {
  const [product, setProduct] = useState();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch();
        const data = await res.json();
      } catch (error) {}
    })();
  }, []);
  return (
    <>
       <Card sx={{ maxWidth: 300, backgroundColor:'#FAF7F0', boxShadow:5, margin:5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" sx={{backgroundColor:'#D8D2C2', width:200}}>
          More Info
        </Button>
      </CardActions>
    </Card>
    </>
  );
}




