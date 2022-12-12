import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Images from "../Components/images";
import Grid from '@mui/material/Grid';
import Col from 'react-bootstrap/Col';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import Navbar from "../Components/Header";
import "../Cssfiels/Activites.css";
import Footer from "../Components/Footer"
export default function Activites() {
  return (
	<>
	<Navbar />
	<Grid className='cards'>
	{Images.map((e,i) =>
    <Card  className="cards" >
      <CardCover>
        <img
          src={e.photo}
        //   srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
          {e.text}
        </Typography>
        <Typography
          startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
        >
          {e.text2}
        </Typography>
      </CardContent>
    </Card>
	
	)}
	</Grid>
	<Footer/>
	</>
  );
}
