import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from '../Components/Header';
import Footer from "../Components/Footer"
import img1 from "../images/eslam6.jfif"
import img2 from "../images/eslam3.jpg"
import img3 from "../images/eslam8.jfif"
import img4 from "../images/eslam11.jfif"
export default function Activites() {
return (
	<div >
    <Navbar />
	<Carousel  >
		<Carousel.Item interval={1500} >
		<img
			className="d-block w-100"
src={img1}
			alt="Image One"
      style={{height:"650px",opacity:"0.8"}}
		/>
		<Carousel.Caption style={{color:"black"}}>
			<h3>Label for first slide</h3>
			<p>Sample Text for Image One</p>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={1500}>
		<img
    style={{height:"650px",opacity:"0.8"}}
			className="d-block w-100"
src={img2}
			alt="Image Two"
		/>
		<Carousel.Caption style={{color:"black"}}>
			<h3>Label for second slide</h3>
			<p>Sample Text for Image Two</p>
		</Carousel.Caption>
		</Carousel.Item>
    <Carousel.Item interval={1500}>
		<img
    style={{height:"650px",opacity:"0.8"}}
			className="d-block w-100"
src={img3}
			alt="Image Two"
		/>
		<Carousel.Caption style={{color:"black"}}>
			<h3>Label for third slide</h3>
			<p>Sample Text for Image Three</p>
		</Carousel.Caption>
		</Carousel.Item>
    <Carousel.Item interval={1500}>
		<img
    style={{height:"650px",opacity:"0.8"}}
			className="d-block w-100"
src={img4}
			alt="Image Two"
		/>
		<Carousel.Caption style={{color:"black"}}>
			<h3>Label for third slide</h3>
			<p>Sample Text for Image Three</p>
		</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
  <Footer />
	</div>
);
}
